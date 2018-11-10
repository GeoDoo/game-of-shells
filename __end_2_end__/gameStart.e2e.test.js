import model from '../src/config/model'
import settings from '../src/config/settings'

class GamePlayTest {
  constructor(page) {
    this.page = page
  }

  async start() {
    await this.page.click('[test=start-game]')
  }

  async getNotificationMessage() {
    await this.page.waitForSelector('[test=notifications]')
    return await page.$eval('[test=notifications]', e => e.innerHTML)
  }

  async shouldShellContainBall() {
    await this.page.waitForSelector('[test=shell-2]')
    const shellContents = await page.$eval('[test=shell-2]', e => e.innerHTML)
    return shellContents.includes('ball')
  }

  async hideBallInAShell() {
    await this.page.waitForSelector('[test=ball]')
  }

  async waitForShufflingToStart() {
    await this.page.waitFor(settings.ballPlacingDuration)
  }

  async shuffleShells() {
    await this.page.waitFor(settings.shufflingDuration)
  }
  
  async pickTheRightShell() {
    await this.page.click('[test=shell-2]')
  }

  async pickAWrongShell() {
    await this.page.click('[test=shell-1]')
  }
}

describe('Game play and win', () => {
  let game
  beforeAll(async () => {
    game = new GamePlayTest(page)
    await page.goto('http://localhost:3000', {"waitUntil" : "networkidle0"})
  })

  it('As a user I would like to be able to start the game', async () => {
    await game.start()
  })

  it('As a user I would like to be notified that the game started by placing the ball underneath a shell', async () => {
    expect(await game.getNotificationMessage()).toBe(model.placingBallMessage)
    await game.hideBallInAShell()
    expect(await game.shouldShellContainBall()).toBe(true)
    await game.waitForShufflingToStart()
  })
  
  it('As a user I would like to see the shells shuffling', async () => {
    expect(await game.getNotificationMessage()).toBe(model.shufflingMessage)
    await game.shuffleShells()
  }, settings.extendTestDuration(settings.shufflingAndBallPlacingDuration))

  it('As a user I would like to be notified that I can choose a shell', async () => {
    expect(await game.getNotificationMessage()).toBe(model.chooseShellMessage)
  })

  it('As a user I would like to be able to choose a shell', async () => {
    await game.pickTheRightShell()
  })
  
  it('As a user I would like to be notified that I won if I choose the right shell', async () => {
    expect(await game.getNotificationMessage()).toBe(model.winMessage)
  })
})

describe('Game play and lose', () => {
  let game
  beforeAll(async () => {
    game = new GamePlayTest(page)
    await page.goto('http://localhost:3000', {"waitUntil" : "networkidle0"})
  })

  it('As a user I would like to be able to start the game', async () => {
    await game.start()
  })

  it('As a user I would like to be notified that the game started by placing the ball underneath a shell', async () => {
    expect(await game.getNotificationMessage()).toBe(model.placingBallMessage)
    await game.hideBallInAShell()
    expect(await game.shouldShellContainBall()).toBe(true)
    await game.waitForShufflingToStart()
  })
  
  it('As a user I would like to see the shells shuffling', async () => {
    expect(await game.getNotificationMessage()).toBe(model.shufflingMessage)
    await game.shuffleShells()
  }, settings.extendTestDuration(settings.shufflingAndBallPlacingDuration))

  it('As a user I would like to be notified that I can choose a shell', async () => {
    expect(await game.getNotificationMessage()).toBe(model.chooseShellMessage)
  })

  it('As a user I would like to be able to choose a shell', async () => {
    await game.pickAWrongShell()
  })
  
  it('As a user I would like to be notified that I lost if I choose the wrong shells', async () => {
    expect(await game.getNotificationMessage()).toBe(model.loseMessage)
  })
})