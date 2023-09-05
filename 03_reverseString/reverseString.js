const reverseString = function(string) {
    arr = []
    for(i = 0; i < string.length; i++)
        arr.unshift(string.charAt(i));
    return arr.join("")
};

// Do not edit below this line
module.exports = reverseString;
