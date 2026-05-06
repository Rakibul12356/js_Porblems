//একটা function লিখো যেটা একটা array থেকে duplicate number remove করবে।

// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]

// solution 1: using Set


// function removeDuplicates(arr){
// return [...new Set(arr)]
// }
// const ans = removeDuplicates([1, 2, 2, 3, 4, 4, 5])
// console.log(ans)


// solution 2: using loop
function removeDuplicates(array){
    let result = [];
    for (let i = 0; i <array.length; i++){
        if(!result.includes(array[i])){
            result.push(array[i])
        }
    }
    return result;
}
const ans2 = removeDuplicates([1, 2, 2, 3, 4, 4, 5])
console.log(ans2)

// solution 3: using filter and indexOf
// function removeDuplicates(arr){
//     return arr.filter((item, index) => arr.indexOf(item) === index)
// }
// const ans3 = removeDuplicates([1, 2, 2, 3, 4, 4, 5])
// console.log(ans3)