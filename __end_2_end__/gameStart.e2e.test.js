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

  async shouldShellContainBall() {
    await this.page.waitForSelector('[testkey=shell-2]')
    const shellContents = await page.$eval('[testkey=shell-2]', e => e.innerHTML)
    return shellContents.includes('ball')
  }

  async hideBallInAShell() {
    await this.page.waitForSelector('[testkey=ball]')
  }

  async shuffleShells() {

  }
}

describe('Game play', () => {
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

  it('As a user I would like to see the shells shuffling', async () => {
    await game.hideBallInAShell()
    expect(await game.shouldShellContainBall()).toBe(true)
    await game.shuffleShells()
  })
})