import { chromium } from "playwright";

(async () => {
  console.log("🚀 Test TikTok Scroll sur Chrome démarré...");

  // Lance Chrome installé sur ta machine
  const browser = await chromium.launch({
    headless: false,
    channel: "chrome", // ✅ utilise Chrome réel
  });

  // Crée un contexte neuf pour une session propre
  const context = await browser.newContext();
  await context.clearCookies();
  await context.clearPermissions();
  console.log("🧹 Cache et cookies vidés");

  const page = await context.newPage();

  // Va sur une vidéo TikTok
  await page.goto("https://www.tiktok.com/@cuisine__dz/video/7538444603163282710");

  // Accepte les cookies si nécessaire
  try {
    await page.getByRole("button", { name: /accepter/i }).click({ timeout: 5000 });
    console.log("✅ Cookies acceptés");
  } catch (e) {
    console.log("ℹ️ Pas de popup cookies.");
  }

  // Attends qu’une vidéo soit chargée
  await page.waitForSelector("video");

  console.log("▶️ Début du scroll automatique entre deux vidéos...");

  while (true) {
    // Descend vers la vidéo suivante
    await page.keyboard.press("ArrowDown");
    console.log("⬇️ Vidéo suivante");
    await page.waitForTimeout(5000); // regarde 5 secondes

    // Remonte vers la vidéo précédente
    await page.keyboard.press("ArrowUp");
    console.log("⬆️ Vidéo précédente");
    await page.waitForTimeout(5000); // regarde 5 secondes
  }

  // ❌ Ne ferme pas le navigateur pour laisser la session ouverte
  // await browser.close();
})();
