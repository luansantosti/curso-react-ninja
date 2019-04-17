
const map = (arr) => {
  const newArr = []

  const func = () => {
    if(arr.length === 0) {
      return false
    }
    newArr.push(arr[0])
    arr.slice(1)
    func()
  }

  func()

  return newArr
}

export default map