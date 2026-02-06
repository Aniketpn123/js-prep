// 1. max in array

function maximum(arr){
    let max =0;
    for(let ar of arr){
        if(max < ar)
        {
            max = ar;
        }
    }
    console.log(max);
    
}

maximum([23,89,6,29,56,45,77,32]);

// 2. summation 

function summation(arr){
    let sum =0;
  for(let i =0 ; i < arr.length; i++){
    sum += arr[i];
  }
  console.log(sum);
  
}
summation([23,6,7,4,5,7]);

// 3. second largest no.

function max(arr){
    let max =0 ;
    let secmax=0;
    for( let i =0 ; i< arr.length ; i++){
        if(arr[i] > max){
            secmax = max;
            max = arr[i];
        }
        else if(arr[i] < max && arr[i] > secmax){
            secmax = arr[i];
        }
    }
         console.log(secmax);
}
max([12,34,556,77,88,66]);

// 4. amstrong no.

let chkarmstrong = (no)=>{
    let sum =0;
    let temp = no;
    let counter= no.toString().length;
       while(no > 0){
        let temp = no%10;
        sum += temp ** counter ;
        no =Math.floor( no/10);
        }

        if ( temp  === sum ){
            console.log("yes its armstrong");
        }
     
   
}

chkarmstrong(153);

// 5. check "word " in string

function checkString(msg){
    console.log(msg.includes("Marvellous"));
}

checkString("Pune Kothrud, MarvellousInfo")