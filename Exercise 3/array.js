
const sort = (arr) => {
  let n = arr.length;
  
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {

        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        console.log(arr)
      }
    }
  }
}

const reverse = (string) => {
  let arr    = string.split('');
  let result = ''
  for (let i = arr.length - 1; i >= 0; i--) {
    result += arr[i]
  }
  console.log(result)
  return result
}

function onlyUnique(value, index, array) {
  return array.indexOf(value) === index;
}

const getAndTimes = (arr) => {
  if (arr.length < 3) {
    console.log("total angka kurang dari 3")
    return 1;
  }

  arr.sort(function(a, b){return a-b}).reverse();
  var unique = arr.filter(onlyUnique).slice(0, 3);
  console.log(unique)
  return unique.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
}

// let age = [30, 32, 24, 19, 17, 81];
// console.log("Unsorted Array:", age);
// sort(age)
// console.log("Sorted Array:", age);


// let name = "teguh"
// reverse(name)

let num = [10, 20, 6, 4, 3, 1, 2, 2];
console.log(getAndTimes(num));