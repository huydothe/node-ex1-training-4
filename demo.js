function checkMax(arr){
    let max= arr[0];
    for(let value of arr){
        if(value>max){
            max=value;
        }
    }
    return max;
}

arr=[2, 5, 6, 456, 2, 76, 1000, 123, 888];
console.log(checkMax(arr))