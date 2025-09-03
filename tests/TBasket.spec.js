import { test, expect } from "@playwright/test";

test("Connexion Admin à Tournoi Kowali", async ({ page }) => {
  console.log("🚀 Test connexion Tournoi Kowali démarré...");

  await page.goto("https://tournoi.kowali.net/");

  // Remplit les champs de login
  await page.fill('input[name="username"]', "Admin");
  await page.fill('input[name="password"]', "Admin00");

  // Clique sur le bouton Connexion
  await page.click('button[type="submit"]');

  // Vérifie qu’on est bien connecté (adapte selon la page réelle)
  await expect(page).toHaveURL(/dashboard|home/);

  console.log("✅ Connexion réussie !");
});
