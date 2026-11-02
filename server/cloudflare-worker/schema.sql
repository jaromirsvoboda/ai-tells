CREATE TABLE IF NOT EXISTS events (
  received_at TEXT NOT NULL,
  event_id TEXT PRIMARY KEY,
  event TEXT NOT NULL,
  ts TEXT NOT NULL,
  seq INTEGER NOT NULL,
  session_id TEXT NOT NULL,
  round_run_id TEXT,
  lang TEXT NOT NULL,
  page_version TEXT NOT NULL,
  name TEXT NOT NULL,
  round_id TEXT, round_title TEXT, item_ids TEXT, size INTEGER,
  item_id TEXT, position INTEGER, context TEXT, answer TEXT, correct INTEGER, ms INTEGER, known INTEGER,
  set_id TEXT, early INTEGER, answered INTEGER, scored INTEGER, right INTEGER,
  result_id TEXT, score INTEGER, n INTEGER, opted_out INTEGER,
  raw_json TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS round_events ON events(session_id, round_run_id);
CREATE INDEX IF NOT EXISTS browser_rounds ON events(session_id, event, seq);
CREATE UNIQUE INDEX IF NOT EXISTS result_ids ON events(result_id) WHERE event = 'result_shown';
CREATE INDEX IF NOT EXISTS player_names ON events(name);
CREATE INDEX IF NOT EXISTS retention ON events(received_at);
