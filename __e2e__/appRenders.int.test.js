describe('Application', () => {
  it('As a user I can start the application', async () => {
    await page.goto('http://localhost:3000/')
  })
})