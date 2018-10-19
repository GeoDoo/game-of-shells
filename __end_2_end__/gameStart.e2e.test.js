import settings from '../src/config/settings.json'

class MinimumGamePlayTest {
  constructor(page) {
    this.page = page
  }

  async start() {
    await this.page.click('[testkey=start-game]')
  }

  async getNotificationMessage() {
    await this.page.waitForSelector('[testkey=notifications]')
    return await page.$eval('[testkey=notifications]', e => e.innerHTML)
  }
}

describe('Game start', () => {
  let game
  beforeAll(async () => {
    game = new MinimumGamePlayTest(page)
    await page.goto('http://localhost:3000', {"waitUntil" : "networkidle0"})
  })

  it('As a user I would like to be able to start the game', async () => {
    await game.start()
  })

  it('As a user I would like to be able to be notified that the game started', async () => {
    expect(await game.getNotificationMessage()).toBe(settings.messages.start)
  })
})