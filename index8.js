function larg(num){
    let max = num[0];
    for(let i=1; i<num.length; i++){
        if(num[i]>max){
            max = num[i]
        }

    }
    return max;
};

let num =[22, 65, 1, 39];
console.log(larg(num));