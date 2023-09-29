const palindromes = function (str) {
    let changedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "")
    return(changedStr.split("").reverse().join("") === changedStr)
}
// Do not edit below this line
module.exports = palindromes;
