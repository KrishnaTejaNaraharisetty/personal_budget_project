// VisualTest.js

// Import Applitools SDK
// Import Applitools SDK
const { Eyes, Target } = require('@applitools/eyes-testcafe');


// Create an Eyes instance
const eyes = new Eyes();

// Set Applitools API key
eyes.setApiKey('OFs6s2SGUhtmc4iflDL67c88Ws8Tja5azQyZv104d5zCI110');

// Your TestCafe test
fixture('Visual Testing Example')
  .page('http://localhost:3001/login');

test('Check the entire page', async t => {
  // Open the eyes and start the visual test
  await eyes.open(t, 'Personal Budget', 'E2E test', { width: 800, height: 600 });

  // Check the entire page
  await eyes.check('Entire Page', Target.window());

  // Close the eyes to complete the visual test
  await eyes.close();
});
