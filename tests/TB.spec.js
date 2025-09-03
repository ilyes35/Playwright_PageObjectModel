import { test, expect } from '@playwright/test';

test('My Second Test', async ({ page }) => {
  await page.goto('https://tournoi.kowali.net/');

  //Handle pop-up
  const acceptButton = page.locator('button:has-text("accept all")');
    if (await acceptButton.isVisible()) {
        await acceptButton.click();
        console.log("Pop-up accepted");
    }
  // Remplit la barre de recherche
  await page.locator('textarea[name="q"]').fill('Playwright');
  await page.keyboard.press('Enter');

  // Attendre 2 secondes pour voir les résultats
  await page.waitForTimeout(2000);

  // Récupérer les titres des résultats
  const results = await page.locator('h3').allTextContents();

  // Vérifier qu'il y a bien au moins 1 résultat
  expect(results.length).toBeGreaterThan(0);
});
