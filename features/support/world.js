const { setWorldConstructor } = require('cucumber')
const { expect } = require('chai')
const puppeteer = require('puppeteer')

const HOME_PAGE = 'http://localhost:3000'

class Rps {
  constructor() {}

  async openHomePage() {
    this.browser = await puppeteer.launch({headless: false, slowmo: 100})
    this.page = await this.browser.newPage()
    await this.page.goto(HOME_PAGE)
  }
  async closeHomePage() {
      await this.browser.close()
  }
  async pageHasTextContent(expectedContent) {
    const pageContent = await this.page.content()
    const actualContent = pageContent.match(expectedContent)[0]

    expect(actualContent).to.be.eq(expectedContent)
  }
  async clickOnBtn() {
    const btnSelector = '.rock'
    await this.page.waitForSelector(btnSelector)
    await this.page.click(btnSelector)
  }
}

setWorldConstructor(Rps)