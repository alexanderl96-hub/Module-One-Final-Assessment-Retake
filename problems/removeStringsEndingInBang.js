/**
* Removes all strings ending in "!" from an array of strings.
* 
* @param {string[]} arr - The input array of strings
* @returns {string[]} - Returns the strings in arr that don't end with "!"
*
* ex: removeStringsEndingInBang(["Hello", "Hi!", "Greetings"])
* returns: ["Hello", "Greetings"]
*
* ex: removeStringsEndingInBang(["!", "", "a"])
* returns: ["", "a"]
*/

function removeStringsEndingInBang(arr) {
    let str = []
    for(let i = 0; i < arr.length; i++){
        //console.log(arr[i])
        if(!str[i] === (arr[i])){
            console.log(arr[i])
            str.push(str[i])
            console.log(str)
        }
    }
    return str[arr[i]]

}
removeStringsEndingInBang(["!", "", "a"])
module.exports = removeStringsEndingInBang
