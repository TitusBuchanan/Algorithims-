
const arrayOne = [1, 4, 5, 7, 3, 8, 1, 9];
const arrayTwo = [3, 7, 1, 12, 9, 5, 24, 16];

function diffArrayBasic(array1, array2) {
  // 1 - Create empty string to be returned
  let newArray = [];

  // 2 - Function that finds unique element in regards to the other array
  function uniqueElement(first, second) {
    // 3 - Loop through an array
    for (let element of first) {
      // 4. If a second array doesn't have element from a first
      if (second.indexOf(element) === -1) {
        // 5. Add unique element to the new array




        
        newArray.push(element);
      }
    }
  }
  // 6. Run function twice for both arrays
  uniqueElement(array1, array2);
  uniqueElement(array2, array1);
  // 7. Return final array
  return newArray;
}

console.time('Start Algo 1');
console.log(diffArrayBasic(arrayOne, arrayTwo));
console.timeEnd('Start Algo 1');