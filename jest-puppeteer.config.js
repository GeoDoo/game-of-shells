const isNotHeadlessOnTests = process.env.NODE_ENV !== 'test'

module.exports = {
  launch: {
    headless: isNotHeadlessOnTests,
    slowMo: 500
  }
}