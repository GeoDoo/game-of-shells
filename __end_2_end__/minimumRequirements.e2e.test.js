class MinimumRequirementsTest {
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
    try {
      await this.page.waitForSelector('[testkey=shell-1]')
      await this.page.waitForSelector('[testkey=shell-2]')
      await this.page.waitForSelector('[testkey=shell-3]')
    } catch(e) {
      console.log(e)
      return false
    }
    return true
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
}

describe('Game of shells requirements', () => {
  let game
  beforeAll(async () => {
    game = new MinimumRequirementsTest(page)
    await page.goto('http://localhost:3000', {"waitUntil" : "networkidle0"})
  })

  describe('As a user I would like to be able to have all the necessary components to play the game', () => {
    it('I will need a board', async () => {
      expect(await game.hasABoard()).toBe(true)
    })

    it('I will need a table', async () => {
      expect(await game.hasATable()).toBe(true)
    })

    it('I will need three shells', async () => {
      expect(await game.hasThreeShells()).toBe(true)
    }, 20000)

    it('I will need a ball', async () => {
      expect(await game.hasABall()).toBe(true)
    })

    it('and I will need some way to start the game', async () => {
      expect(await game.hasAWayToStart()).toBe(true)
    })
  })
})