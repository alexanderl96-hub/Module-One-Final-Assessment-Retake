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
        console.log(arr[i])
        let end = arr[i][arr[i].length - 1]
        if(end  !== "!"){
            console.log(arr[i])
            str.push(arr[i])
            console.log(str)
        }
    }
   return str

}
removeStringsEndingInBang(["!", "", "a"])
module.exports = removeStringsEndingInBang
