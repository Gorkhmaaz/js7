///Task 1
function sumPositiveNumbers(arr){
    let sum = 0
    for (let i = 0 ; i < arr.length; i = i + 1){
        if (arr[i] > 0){
            sum = sum + arr[i]
        }
    }
    return sum

}
let arr = [5,-2,6,7,-1,-5,9]
console.log(sumPositiveNumbers(arr))

////Task 2
function findNegativeNumbers(arr){
    let count = 0
    for (let i = 0 ; i < arr.length; i = i + 1){
        if(arr[i]< 0){
            count = count + 1
        }
    }
    return count
}
console.log(findNegativeNumbers(arr))

///Task 3
const numArray = [1,2,3,4,3,2,1]
const newArray2 = []
for (let i = 0; i < numArray.length; i = i + 1 ){
    if(!newArray2.includes(numArray[i])){
        newArray2.push(numArray[i])
    }
}
console.log(newArray2)

////Task 4
function sumEvenNumbers(array){
    let sum = 0
    for (let i = 0 ; i < array.length; i = i + 1){
        if(array[i] % 2 === 0){
            sum = sum + array[i]
        }
    }
    return sum;
}
let array = [2,5,7,10,11,3,6]
console.log(sumEvenNumbers(array))

///Task 5
function areNumbersIntegers(arrays){
    for(let i = 0; i < arrays.length; i = i + 1 ){
        if(!Number.isInteger(arrays[i])){
            return false
        }
    }
    return true
}
let arrays1 = [2,6,8,11,3,25]
console.log(areNumbersIntegers(arrays1))
let arrays2 = [8,3.5,7,1.1,2]
console.log(areNumbersIntegers(arrays2))

////Task 6
function findFirstNegativeNumbers(arr){
    for (let i = 0; i < arr.length; i = i + 1){
        if(arr[i] < 0){
            return i
        }
    }
    
}
let arrays3 = [1,5,-3,10,4,7]
console.log(findFirstNegativeNumbers(arrays3))


////Task 7
function upperCaseStrings(arr){
    let newArray = []
    for (let i = 0; i < arr.length; i = i + 1){
        if(typeof arr[i] === 'string'){
            newArray.push(arr[i].toUpperCase())
        } else{
            newArray.push(arr[i])
        }

    }
    return newArray
}
let arrays4 = ['hi', 5, 'name', 'dog', 3,'banana', 35]
console.log(upperCaseStrings(arrays4))

////Task 9
function containsNegativeNumbers(arr){
    for (let i = 0 ; i < arr.length ; i = i + 1){
        if(arr[i] < 0){
            return true
        }
    }
    return false
}
let arrays5 = [4,55,64,2,51,32]
console.log(containsNegativeNumbers(arrays5))
let arrays6 = [12,33,-1,36,45,2]
console.log(containsNegativeNumbers(arrays6))


////Task 10
function sumBeforeIndex(arr, index) { 
    let sum = 0;
    for (let i = 0; i <= index; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  let arrays7 = [1, 2, 3, 4, 5];
  console.log(sumBeforeIndex(arrays7, 2)); 
  

  ///Task 11
  function containOnlyNumbers(arr){
    for (let i = 0; i < arr.length; i = i + 1){
        if( typeof arr[i] !== 'number'){
            return false
        }
    }
    return true
  }
  let arrays8 = [1,55,3,5,2,4]
  console.log(containOnlyNumbers(arrays8))
  let arrays9 = ['hi', 5, 'cat', 44]
  console.log(containOnlyNumbers(arrays9))

 ///Task 12
  function getElementMoreThenTen(arr){
    let newArr = []
    for(let i = 0; i < arr.length; i = i + 1){
        if(arr[i] > 10){
            newArr.push(arr[i])
        }
    }
    return newArr
  }
  let arrays10 = [22,1,4,33,18,15,6]
  console.log(getElementMoreThenTen(arrays10))

///Task 13
function findLastIndex(arr,target){
    for(let i = arr.length - 1 ; i >= 0; i = i - 1){
        if(arr[i] === target){
            return i
        }
    }
    
}
let arrays11 = [4,5,2,7,1,4,2]
console.log(findLastIndex(arrays11,4))

//////Task 14
function containPositive(arr){
    for(let i = 0 ; i < arr.length; i = i + 1){
        if(arr[i] > 0){
            return true
        }
    }
    return false
}
let arrays12 = [-4,-1,-3,-2,-7]
console.log(containPositive(arrays12))
let arrays13 = [-4,-1,-3, 2, 7]
console.log(containPositive(arrays13))

///Task 15
function arrayToObject(arr){
    let object = {}
    for(let i = 0; i < arr.length; i = i + 1){
        object[i] = arr[i]
    }
    return object
}
let arrays14 = ['name', 'surname', 'class', 'total']
console.log(arrayToObject(arrays14))

//Task 16
function allElementAreTheSame(arr){
    for (let i = 0 ; i < arr.length; i = i + 1){
        if(arr[i] !== arr[0]){
            return false
        }
    }
    return true
}
let arrays15 = [2,2,1,2,2]
console.log(allElementAreTheSame(arrays15))
let arrays16 = [2,2,2,2,2]
console.log(allElementAreTheSame(arrays16))

////Task 17
function removeNumbers(arr) {
    let newAr = []
    for (let i = 0 ; i < arr.length; i= i + 1) {
      if (arr[i] % 3 === 0) {
        newAr.push(arr[i]) 
      }
    }
    return newAr
  }
  let arrays17 = [1, 3, 5, 6, 9, 10, 12, 15, 18];
  console.log(removeNumbers(arrays17))
  
  


