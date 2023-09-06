const removeFromArray = function(arr, ...args) {
    let newArr = arr
    for(const arg of args){
        newArr = newArr.filter((ele)=> ele !== arg);
    }
    return newArr
};

// Do not edit below this line
module.exports = removeFromArray;
