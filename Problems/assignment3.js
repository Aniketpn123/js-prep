//1..............................
console.log('.......................');
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


//2.   
console.log('.......................');


let books ={'Java Programming':'Rs.350.50','Let Us C':'Rs.310.50'};

function price(name){
console.log(books[name]);
}

price('Java Programming');

// 3.  concat array ...........................
console.log('.......................');
let nums =[1,23,455,5,6];

function conCat(){
        console.log( nums.concat(nums));
        console.log([...nums,...nums]);
        let ans = new Array(2*nums.length);
        for(let i =0 ; i< ans.length; i++)
        {   ans[i] = nums[i % nums.length];

        }         
        console.log(ans);
            
}

conCat(nums)

// 4.  max in [][]
let arr = [[124,432,42],[25,52,5,25,25],[2452,525,5,5,2,5,2],[25,52524,5,25,25]];

function maxMatrix(arr){
    let max =0;
  for( let ar of arr){
    let sum = ar.reduce((a,b) => a+b , 0);
    max = Math.max(max ,sum);
  }
  return max;
    
};