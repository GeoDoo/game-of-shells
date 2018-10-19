describe('Game title', () => {
  it('As a user I would like to see the name of the game', async () => {
    await page.goto('http://localhost:3000/')
    await page.waitForSelector('[test=game-title]')
  })
})