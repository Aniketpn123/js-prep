// 1.  max no
    function max(no1,no2,no3){
        let max =0;
        if(no1 >no2 && no1 > no3){
            max = no1;
        }
        else if(no2 > no3){
            max =no2;
        }
        else{
            max = no3;
        }
        console.log("max no. ="+max);
        
    }

    max(23,89,633);

// 2. Area of circle

function area(r){
    let a= 3.14 * r * r;

    return console.log("area of circle ="+a);
    ;
}

area(5);

//3. display factor

function dispalyFactor(no){
     for(let i =1 ; i <= no/2 ; i++ ){

        if(no % i == 0){
            console.log(i); 
        }
     }
}

dispalyFactor(20);

// 4. prime or not

function ChkPrime(no){
    if ( no % 2 !== 0 && no % 3 !== 0){
        console.log("its prime");
        
    }
    else{
        console.log("not a prime");
        
    }
}
ChkPrime(11);

// 5. fibonacci series

function fibonacci(no){
    let a= 0;
    let b =1;
    while(a < no){
       let temp = a;
       b =a+b;
       a = b;
       b = temp;
       console.log(a);
       
    }
}

fibonacci(21);