class MinimumGamePlayTest {
  constructor(page) {
    this.page = page
  }

  async start() {
    await this.page.click('[testkey=start-game]')
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
})