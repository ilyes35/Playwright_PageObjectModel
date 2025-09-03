import { test, expect } from '@playwright/test';

test('TikTok auto scroll avec cookies', async ({ page }) => {
  console.log("🚀 Test TikTok Scroll démarré...");

  // Ouvre la vidéo de départ
  await page.goto("https://www.tiktok.com/@cuisine__dz/video/7538444603163282710");

  // Gérer le pop-up cookies
  const acceptButton = page.getByRole('button', { name: /accepter/i });
  if (await acceptButton.isVisible()) {
    await acceptButton.click();
    console.log("✅ Cookies acceptés");
  } else {
    console.log("ℹ️ Aucun popup cookies détecté.");
  }

  // Attendre qu'une vidéo soit visible
  await page.waitForSelector("video");

  console.log("▶️ Début du scroll automatique...");

  // Boucle : scrolle sur 5 vidéos
  for (let i = 1; i <= 5; i++) {
    await page.keyboard.press("ArrowDown");
    console.log(`➡️ Vidéo suivante (${i})`);
    await page.waitForTimeout(5000); // délai entre deux vidéos
  }

  // Vérification simple : une vidéo est toujours visible
  const videoVisible = await page.locator("video").first().isVisible();
  expect(videoVisible).toBeTruthy();

  console.log("✅ Test terminé.");
});
