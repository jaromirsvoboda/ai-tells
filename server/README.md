# Quiz activity and public verification

These are deployment templates. Nothing here is deployed by the static site.
The shipped `quiz/config.js` has an empty endpoint, so activity stays in the
browser. Choose one backend, deploy it, test it, then set that endpoint.

Both templates accept `POST` with a JSON body `{ "events": [...] }` and answer
`{ "ok": true }` only after storage succeeds. Use `Content-Type: text/plain`:
this avoids a browser CORS preflight for the Apps Script web app. Batches have
at most 100 events and 20 KB of UTF-8 data. Clients send smaller batches.
Validation rejects malformed batches in full. `event_id` makes retries and
pagehide beacons idempotent. A queued beacon remains in local storage until a
later fetch receives an acknowledgement.

## Google Apps Script and Sheets

1. Create a private Google Sheet for quiz activity. Copy its ID from the URL
   between `/d/` and `/edit`. Keep the Sheet private; public lookups use the script.
2. Open **Extensions → Apps Script**. Replace `Code.gs` with
   `server/apps-script/Code.gs` from this repository. Save the project.
3. Open **Project Settings → Script properties → Add script property**.
   Set `SHEET_ID` to the Sheet ID. The code creates an `events` tab with a
   header and one row per event. Each field has a column; `raw_json` preserves
   the submitted event. Formula-like text is escaped in extracted columns.
4. In the editor choose `installRetentionTrigger`, then **Run**. Grant the
   script permission to edit your Sheet and create a daily trigger. Check
   **Triggers** to confirm that `deleteExpiredEvents` runs daily. It deletes
   records received more than 365 days ago.
5. Choose **Deploy → New deployment → Web app**. Run as **Me**, allow access to
   **Anyone**, and deploy. Use the public URL ending in `/exec`, not `/dev`.
   Your Google account or organisation must permit anonymous web apps.
6. Open the `/exec?result=ABCD-1234` URL in a private browser window. A missing
   result should return JSON with `ok: false`, without a sign-in page.
7. Set the endpoint as described below. Play a short round, add a name after
   finishing, and open its verification link in a private window. Check that
   the name, answers and score match, and that a second round reports one
   earlier recorded round. Use DevTools Network to confirm the POST response
   can be read from the deployed Pages origin.
8. After changing script code, use **Deploy → Manage deployments → Edit** to
   publish a new version. Saving the editor alone does not update `/exec`.

Apps Script's `ContentService` redirects output to a Google-hosted content URL.
The template uses that service for cross-origin JSON responses and does not try
to add unsupported CORS headers. POST is sent without credentials and with a
simple text content type. Confirm this on the real deployment before enabling
recording; deployment access settings can turn a JSON response into a sign-in
page. Apps Script errors use HTTP 200 with `ok: false`, which the client retries.
This template reads the retained Sheet to find results and duplicates. Use D1
if that becomes slow or you approach Apps Script execution or Sheet limits.

## Cloudflare Worker and D1

Run these commands yourself from `server/cloudflare-worker/`, with Node and npm
available. The template has no project dependencies to install in this repo.

1. Sign in: `npx wrangler login`.
2. Create the database: `npx wrangler d1 create human-or-ai-events`.
   Copy the returned database ID into `wrangler.toml` at `database_id`.
3. Create its tables:
   `npx wrangler d1 execute human-or-ai-events --remote --file=schema.sql`.
4. Deploy: `npx wrangler deploy`. Note the deployed `https://…workers.dev` URL.
5. Set the quiz endpoint to `https://…workers.dev/events`.
6. Run the same short-round and private-window verification check described
   for Apps Script. Both `/events?result=XXXX-XXXX` and `/result/XXXX-XXXX`
   return a result. The former lets both backends share the same client config.
7. Check that the daily cron in `wrangler.toml` is enabled. It removes events
   received more than 365 days ago. Public lookups also hide expired records.

CORS permits `https://jaromirsvoboda.github.io`, including its `/ai-tells/`
path. Other browser origins are rejected. CORS is not authentication: scripts
outside a browser can still submit events. The code never reads IP headers or
writes request logs; Worker observability is disabled in the template. Keep
Cloudflare request logging and Logpush off if you want no separate request log.
The hosting platform still handles connection information to deliver requests.

## Enable or disable recording

Edit `quiz/config.js` and replace the empty string with the chosen public URL:

```js
if (typeof window.QUIZ_LOG_URL !== 'string') window.QUIZ_LOG_URL = 'https://YOUR_ENDPOINT';
```

Publish that file with the static site. Both languages and both verification
pages load it. Set it back to `''` to disable sending; the UI then states that
recording is not active. No secrets belong in this file or in a public browser
script. Names and preferences are shared across languages in local storage.
Scores and item familiarity keep their existing per-language storage.

The switch “Don't record my answers” / „Nezaznamenávat moje odpovědi“ is on the
start page and in About. It stops new activity recording and clears unsent
activity. It also cancels an in-flight fetch where possible; a request already
received by the server cannot be recalled. Switching it off starts recording
future events only. Clearing quiz history does not clear the browser ID or
server data, so it cannot erase evidence of earlier attempts.

## Lookups, deletion and retention

For a public lookup, open `quiz/verify.html#XXXX-XXXX` (or its Czech equivalent).
The response includes only the requested round's public fields and a count of
earlier retained recorded rounds. It does not return the browser ID or other
rounds' names and answers. Name changes made on the result screen apply to that
round, including after the result event has already arrived.

In Sheets, use **Data → Create a filter** on the header, then filter `name` or
`result_id`. A result's `round_run_id` and `session_id` connect its other rows.
Names are optional and can repeat. Use `raw_json` when a displayed field has a
spreadsheet escape prefix. To fulfil a deletion request, find the result row,
copy its browser ID, and remove every row for that browser (or only the agreed
round). Do not make the Sheet public or share raw event rows.

For D1, use the dashboard's SQL console or `wrangler d1 execute … --remote`.
For example, look up a result:

```sql
SELECT received_at, name, round_run_id, score, n
FROM events WHERE event = 'result_shown' AND result_id = 'ABCD-1234';
SELECT received_at, event, result_id, round_run_id
FROM events WHERE name = 'Ada';
```

Use bound parameters in any tooling you build for names. For a browser deletion,
look up its `session_id` privately from the result row, then delete matching rows
with `DELETE FROM events WHERE session_id = 'THE_LOOKED_UP_UUID';`. The templates
deliberately expose no public search by name or deletion endpoint.

Keep the daily 365-day cleanup enabled and check it after deployment. Expiration
uses server receipt time, not the player's clock. The prior-round count uses the
browser's event sequence and includes abandoned rounds as well as completed
ones, across both languages. It covers only events still retained by this
backend. Opt-out, a different browser, cleared site storage or a blocked request
can leave gaps. Up to 500 unsent events are retained per browser; the oldest are
dropped when that limit is reached. Local activity logs have the same bound.
Deleting local quiz history removes the local score history only.

## What verification establishes

A result ID retrieves the activity submitted for that round. Backends recompute
totals from answers and flag missing or contradictory events. The verification
page also compares recorded correctness with the available public item data.
It shows timings, excluded familiar items, opened comparisons and whether the
round ended early. Result IDs are random 40-bit codes for sharing; they are not
passwords. Anyone with an ID can see its round, so use a nickname if preferred.
A collision is rejected rather than overwriting another result.

The browser supplies its name, clock and events. A player can inspect the answer
key, modify a request or reset browser storage. This records a claim and its
visible attempt history; it does not certify identity or prevent cheating.
Dropped, blocked or still-queued events produce an incomplete-record notice.
A recorded round cannot be reconstructed when recording was disabled.

## Privacy copy to keep in sync

The Privacy / Soukromí sections are in `quiz/items.json` and
`quiz/cs/items.json`. They describe answers and timing, activity such as opened
comparisons, a random browser ID, optional names, result IDs, public result
lookups, the owner's Sheet or D1 database, a maximum 12-month retention period,
opt-out and deletion through the PauseAI CZ team. They distinguish the quiz's
IP-free event log from connection data handled by hosting providers. No cookies,
third-party trackers or ads are added. Both pages show an inactive-recording
note when the endpoint is empty. Keep those sections, the page footer and this
document accurate if the deployment or retention policy changes.

Do not enable recording until the deployment's anonymous POST/GET and daily
cleanup have been checked. These templates have not been deployed by this task.

## Verification in this worktree

Run `node tests/quiz-tracking.unit.cjs` for the browser-free checks, including
transport retries, storage failures, backend validation and route behaviour.
The Playwright scenarios are in `tests/quiz-tracking.spec.js`; run them with
the repository's existing Playwright setup. They were written but not run in
the delegate sandbox, which cannot listen on localhost or launch Chromium.
Rejected fetches are caught without application console logging. A browser can
still show its own network diagnostics for an unreachable deployment; JavaScript
cannot suppress those browser-generated messages.
