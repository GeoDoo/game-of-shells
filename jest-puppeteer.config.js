const shouldBeFalseForTests = process.env.NODE_ENV !== 'test'

module.exports = {
  launch: {
    headless: !shouldBeFalseForTests,
    slowMo: 500
  }
}