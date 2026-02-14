//1.

function name(arr) {
    let sum =0;
    let avg=0;
    let min=arr[0];
    for(let i=0 ; i<=14 ; i++){
        if(arr[i+1] < min)
        {
            min = arr[i+1];
        }
        sum += arr[i];
    }
    arr[15] = sum;
    arr[16]= Math.floor(sum/arr.length);
    arr[17] = min;
 
    return    console.log(sum,Math.floor(sum/arr.length),min ,arr);
}

name([3,2,4,5,6,4,5,7,3,2,3,4,7,1,2,0,0,0]);