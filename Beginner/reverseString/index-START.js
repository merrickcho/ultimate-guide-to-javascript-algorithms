/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function reverseString(text) {
    // Code goes here

    //#Chaining in-built methods
    // return text.split('').reverse().join('')

    // //using the [...] spread operator
    // return [...text].reverse().join('')

    // //#Using the for-loop way
    // let res =''
    // for(let i = text.length-1;i>=0;i--){
    //     res+=text[i]
    // }
    // return res

    // //#Using for...of (each char will be added infront of the last res)
    // let res =''
    // for(let char of text){
    //     res = char + res
    // }
    // return res

    // //#The Recursive way
    // if(text ===''){
    //     return ''
    // }
    // else{
    //     return reverseString(text.substring(1))+text[0]
    // }

    //#Using reduce() method
    return [...text].reduce((p,c)=>c+p)
}



module.exports = reverseString