class GameOfShellsTest {
  constructor(page) {
    this.page = page
  }

  async hasABoard() {
    try {
      await this.page.waitForSelector('[testkey=board]')
    } catch(e) {
      console.log(e)
      return false
    }
    return true
  }

  async hasATable() {
    try {
      await this.page.waitForSelector('[testkey=table]')
    } catch(e) {
      console.log(e)
      return false
    }
    return true
  }

  async hasThreeShells() {
    let numOfShells
    try {
      await this.page.waitForSelector('[testkey=shell]')
      numOfShells = await this.page.$$eval('[testkey=shell]', shells => shells.length)
    } catch(e) {
      console.log(e)
      return false
    }
    return numOfShells === 3
  }

  async hasABall() {
    try {
      await this.page.waitForSelector('[testkey=ball]')
    } catch(e) {
      console.log(e)
      return false
    }
    return true
  }

  async hasAWayToStart() {
    try {
      await this.page.waitForSelector('[testkey=start-game]')
    } catch(e) {
      console.log(e)
      return false
    }
    return true
  }

  async start() {
    await this.page.click('[testkey=start-game]')
  }

  async shuffle() {
    let disabled
    disabled = await this.page.$eval('[testkey=start-game]', element => element.disabled)
    await expect(disabled).toBe(true)  
    await this.page.waitFor(15000)
    disabled = await this.page.$eval('[testkey=start-game]', element => element.disabled)
    await expect(disabled).toBe(false)
  }

  async playerChoosesAShell() {
    await this.page.click('[testkey=shell]')
  }
}

describe('Game of shells minimum functionality', () => {
  let game
  beforeAll(async () => {
    game = new GameOfShellsTest(page)
    await page.goto('http://localhost:3000', {"waitUntil" : "networkidle0"})
  })

  describe('As a user I would like to be able to play the game in a very basic way', () => {
    it('I will need a board', async () => {
      expect(await game.hasABoard()).toBe(true)
    })

    it('I will need a table', async () => {
      expect(await game.hasATable()).toBe(true)
    })

    it('I will need theee shells', async () => {
      expect(await game.hasThreeShells()).toBe(true)
    }, 20000)

    it('I will need a ball', async () => {
      expect(await game.hasABall()).toBe(true)
    })

    it('and I will need some way to start the game', async () => {
      expect(await game.hasAWayToStart()).toBe(true)
    })
  
    it('So, I start the game and watch the shuffling and finally I make my choice of shell', async () => {
      await game.start()
      await game.shuffle()
      await game.playerChoosesAShell()
    }, 20000)
  })
})