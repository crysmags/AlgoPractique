//reverse an array of chars in place so it wont return anything

const reverseArray = function(arr) {
  let rightPointer = arr.length-1
  let leftPointer = 0

    while (leftPointer < rightPointer){
      let temp = arr[rightPointer]
      arr[rightPointer] = arr[leftPointer]
      arr[leftPointer] = temp
      leftPointer++
      rightPointer--
    }
}
let array = [1,2,3,4]
console.log(reverseArray(array))
console.log(array)
console.log('')

