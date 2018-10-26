import shuffle from './shuffle'

describe('shuffle algorithm', () => {
  const bigEnoughNumberOfIterations = 1000

  it('should shuffle every time', () => {
    let numbers = [1, 2, 3]
    for (let i = 0; i < bigEnoughNumberOfIterations; i++) {
      const shuffled = shuffle(numbers)
      expect(shuffled).not.toEqual(numbers)
      numbers = shuffled
    }
  })

  it('should always swap only two items', () => {
    const numbers = [1, 2, 3]
    const shuffledOnce = shuffle(numbers)
    const unmoved = numbers.filter((item, index) => shuffledOnce[index] === item)
    expect(unmoved.length).toBe(1)
  })
})