import shuffle from './shuffle'

describe('shuffle algorithm', () => {
  it('should shuffle the array every time', () =>{
    const numbers = [1, 2, 3]

    const shuffledOnce = shuffle(numbers)
    expect(shuffledOnce).not.toEqual(numbers)
    const shuffledTwice = shuffle(shuffledOnce)
    expect(shuffledTwice).not.toEqual(shuffledOnce)
    const shuffledThrice = shuffle(shuffledTwice)
    expect(shuffledThrice).not.toEqual(shuffledTwice)
  })
})