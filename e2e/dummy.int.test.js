import puppeteer from 'puppeteer'

describe('Bare-bones test with puppeteer', () => {
  let browser
  let page
  let originalTimeout

  beforeAll(async () => {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 9000000

    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      args: ['--start-fullscreen'],
      defaultViewport: null
    })

    page = await browser.newPage()
  })

  afterAll(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout
    browser.close()
  })

  it('should load google webpage', async () => {
    await page.goto('http://google.com/')
  })
})