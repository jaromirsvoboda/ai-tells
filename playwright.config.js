const { defineConfig } = require('@playwright/test');

const port = Number(process.env.PORT || 4173);
const baseURL = `http://127.0.0.1:${port}`;
const viewports = [
  { width: 360, height: 740 },
  { width: 390, height: 844 },
  { width: 768, height: 1024 },
  { width: 1280, height: 800 },
  { width: 1440, height: 900 },
];

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  workers: 2,
  timeout: 120_000,
  expect: { timeout: 5_000 },
  retries: 0,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL,
    browserName: 'chromium',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: viewports.flatMap(viewport => ['light', 'dark'].map(colorScheme => ({
    name: `${viewport.width}x${viewport.height}-${colorScheme}`,
    use: { viewport, colorScheme },
  }))),
  webServer: {
    command: 'node tests/serve.js',
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 10_000,
  },
});
