/*wirte a function that takes in a sorted array and return a balanced binary serarch tree */

//BST takes in a value and returns a BST with the value as the val prop and a left and right 
//node set to null

class BST {
  constructor(val){
    this.val = val
    this.right = null
    this.left = null
  }
}

let firstArr = [1,2,3,5]

const constructBST = function (arr) {
  if (!arr.length) return null
  let middle = Math.floor(arr.length/2)
  let left = arr.slice(0,middle)
  let right = arr.slice(middle+1)

  const newBST = new BST(arr[middle])

  newBST.left = constructBST(left)
  newBST.right = constructBST(right)

  return newBST
}

console.log(constructBST(firstArr))