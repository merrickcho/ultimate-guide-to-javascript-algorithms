/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

//# Using iterative
// const vowels = ['a','e','i','o','u']
// function vowelsCounter(text) {
//     let count =0
//     for(let letter of text.toLowerCase()){
//         if(vowels.includes(letter)){
//             count++
//         }
//     }
//     return count
// }

//# Using Regex
function vowelsCounter(text) {
    let res = text.match(/[aeiou]/gi)
    if (res){
        return res.length
    }else{
        return 0
    }
}

module.exports = vowelsCounter;
