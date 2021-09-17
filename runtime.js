const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}

console.time('test 10')
const tinyArray = getSizedArray(10);
console.timeEnd('test 10')
console.time('test 100')
const smallArray = getSizedArray(100);
console.timeEnd('test 100')
console.time('test 1000')
const mediumArray = getSizedArray(1000);
console.timeEnd('test 1000')
console.time('test 10000')
const largeArray = getSizedArray(10000);
console.timeEnd('test 10000')
console.time('test 100000')
const extraLargeArray = getSizedArray(100000);
console.timeEnd('test 100000')
// console.time('test 6')
// const extraextraLargeArray = getSizedArray(100000000);
// console.timeEnd('test 6')




// test 10: 0.148ms, 0.114ms
// test 100: 0.023ms, .02ms
// test 1000: 0.066ms, 0.058ms
// test 10000: 1.455ms, 1.465ms
// test 100000: 19.241ms, 5.709ms

// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);


function find_longest_word(str) {
    let words = str.split(' ');
    let maxLength = 0;
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }
    console.log(maxLength);
  }
//   I think the time complexity of this one would be O(n)
  
find_longest_word("I find coding to be hard, but fun");
