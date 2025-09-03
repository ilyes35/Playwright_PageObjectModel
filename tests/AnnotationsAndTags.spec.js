import { test } from '@playwright/test';
test.skip('Test One', async ({ page }) => {

});

test('not yet ready', async ({ page }) => {
    //page.goto('https://google.com') 

    test.fail(); // Mark this test as expected to fail;      

});

test.fixme('Test to be fixed', async ({ page }) => {
    //page.goto('https://google.com') 
});

test('Test slow', async ({ page }) => {
    test.slow(); // Mark this test as slow

});

//Tags
test('Test Login page @smoke', async ({ page }) => {
    // Add login test steps here
});
    

