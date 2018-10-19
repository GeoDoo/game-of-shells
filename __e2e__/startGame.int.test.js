class MinimumGamePlayTest {
  constructor(page) {
    this.page = page
  }

  async start() {
    await this.page.click('[testkey=start-game]')
  }

  // async shuffle() {
  //   let disabled
  //   disabled = await this.page.$eval('[testkey=start-game]', element => element.disabled)
  //   await expect(disabled).toBe(true)  
  //   await this.page.waitFor(15000)
  //   disabled = await this.page.$eval('[testkey=start-game]', element => element.disabled)
  //   await expect(disabled).toBe(false)
  // }

  // async playerChoosesAShell() {
  //   await this.page.click('[testkey=shell-1]')
  // }
}

describe('Start of the game', () => {
  let game
  beforeAll(async () => {
    game = new MinimumGamePlayTest(page)
    await page.goto('http://localhost:3000', {"waitUntil" : "networkidle0"})
  })

  it('As a user I would like to be able to start the game', async () => {
    await game.start()
  })
})