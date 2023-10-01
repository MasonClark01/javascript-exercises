const fibonacci = function(num) {
    if(num < 0){
        return "OOPS"
    }
    let out = 1
    let next = 0
    for(let i = 2; i <= num; i++){
        let curNum = out + next
        next = out
        out = curNum   
    }
    return out
};

// Do not edit below this line
module.exports = fibonacci;
