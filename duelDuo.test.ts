import { Builder, Capabilities, By } from 'selenium-webdriver';

require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(async () => {
  driver.get('http://localhost:4000/');
});

afterAll(async () => {
  driver.quit();
});

describe('Automated tests', () => {
  test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'));
    const displayed = await title.isDisplayed();
    expect(displayed).toBe(true);
  });

  test('Draw button displays the div with id choices', async () => {
    // click the draw button
    await driver.findElement(By.id('draw')).click();

    const choices = await driver.findElement(By.id('choices')).isDisplayed();
    expect(choices).toBeTruthy();
  });

  test('Add to Duo button displays the div with id player-duo', async () => {
    await driver.findElement(By.id('draw')).click();

    await driver.findElement(By.className('bot-btn')).click();

    const playerDuo = await driver
      .findElement(By.id('player-duo'))
      .isDisplayed();
    expect(playerDuo).toBeTruthy();
  });
});
