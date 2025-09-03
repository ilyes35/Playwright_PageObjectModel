import { test, expect } from '@playwright/test';

// Première fois : crée un storageState.json après login
test('Login TikTok manuellement et sauvegarder la session', async ({ page }) => {
  await page.goto("https://www.tiktok.com/login");

  console.log("👉 Connecte-toi manuellement dans la fenêtre qui s'ouvre.");
  console.log("⚠️ Quand tu as fini, ferme la fenêtre ou arrête le test.");

  // Sauvegarde la session dans un fichier
  await page.context().storageState({ path: "tiktok-session.json" });
});
    