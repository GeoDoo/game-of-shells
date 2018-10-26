const getRandomIndex = () => Math.floor(Math.random() * 3)
const isEqual = (a, b) => a === b
const swap = (array, anIndex, anotherIndex) => {
  const newArray = [...array]
  let temporaryValue

  temporaryValue = newArray[anIndex]
  newArray[anIndex] = newArray[anotherIndex]
  newArray[anotherIndex] = temporaryValue

  return newArray
}

const shuffle = array => {
  let anIndex = getRandomIndex()
  let anotherIndex = getRandomIndex()

  while (isEqual(anIndex, anotherIndex)) {
    anIndex = getRandomIndex()
    anotherIndex = getRandomIndex()
  }

  return swap(array, anIndex, anotherIndex)
}

export default shuffle