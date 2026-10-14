import { defineConfig, devices } from "@playwright/test";

// Nur Chromium: Firefox/WebKit sind in dieser Sandbox-Umgebung nicht
// installierbar (siehe Projektdokumentation). Der Server dient den bereits
// gebauten dist/-Ordner aus (npm run build vor den Tests ausführen).
export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  reporter: "list",
  use: {
    baseURL: "http://localhost:4321",
  },
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        // Diese Sandbox liefert nur den regulären Chromium-Build vorinstalliert
        // (kein separates "headless shell"-Binary) – explizit darauf zeigen,
        // statt den von Playwright per Default erwarteten Pfad zu nutzen.
        launchOptions: { executablePath: "/opt/pw-browsers/chromium" },
      },
    },
  ],
  webServer: {
    command: "npm run preview -- --port 4321",
    url: "http://localhost:4321",
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
});
