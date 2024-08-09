// ### Question 1: Remove Duplicates from Sorted Array
// *Problem:*
// You are given a sorted array that may contain duplicate elements. Your task is to remove the duplicates in-place (without creating a new array) and return the length of the resulting array. The array should be compressed so that the unique elements are placed first.
// *Example:*
// typescript
// Input: [1, 1, 2, 2, 3, 4, 4, 5]
// Output: 5
// Explanation: The resulting array is [1, 2, 3, 4, 5] and its length is 5.
// *Note:*
// * Only return the length of the unique elements.
// * Duplicate elements should be ignored.
function removeDuplicates(arr) {
    var value = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[value]) {
            value++;
            arr[value] = arr[i];
        }
    }
    return value + 1;
}
// const newArray: number[] = [1,2,2,3,3,4,5,5]
// const myArray = removeDuplicates(newArray)
// console.log(myArray); // Output: 
// console.log(newArray.slice(0,myArray));
// ### Question 2: Move Zeroes
// *Problem:*
// You are given an array that contains some zero elements. Your task is to move all the zeroes to the end of the array, while keeping the relative order of the non-zero elements unchanged.
// *Example:*
// typescript
// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]
// *Note:*
// * You must modify the array in-place.
// * The relative order of the non-zero elements should remain the same.
function nonZero(num) {
    var index = 0;
    for (var i = 0; i < num.length; i++) {
        if (num[i] !== 0) {
            num[index] = num[i];
            index++;
        }
    }
    for (var j = index; j < num.length; j++) {
        num[j] = 0;
    }
}
var newValue = [0, 1, 0, 3, 12];
nonZero(newValue);
console.log(newValue);
// function moveZero(arr: number[]): void {
//     let index = 0;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] !== 0) {
//             arr[index] = arr[i]
//             index++
//         }
//     }
//     for(let k = index; k < arr.length; k++) {
//         arr[k] = 0;
//     }
// }
// let moveEnd = [0,1,0,3,12];
// moveZero(moveEnd)
// console.log(moveEnd);
