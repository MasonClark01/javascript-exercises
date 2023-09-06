const sumAll = function(num1, num2) {
    let sumNums = 0
    if(typeof num1 === 'number' && typeof num2 === 'number' && num1 >= 0 && num2 >= 0){
        let min = 0
        let out = 0
        if(num1 > num2){
            min = num2
            for(let i = min; i <= num1; i++){
                out += i
            }
        }
        if(num2 > num1){
            min = num1
            for(let i = min; i <= num2; i++){
                out += i
            }
        }
        return out
    }
    else{
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
