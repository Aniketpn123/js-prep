// promise is a platform where my songs will be given to subscribers , my songs miight late , but wont get croede for give song requiest to fans 

let promise = new Promise(function(resolve,reject){
    setTimeout(()=> resolve(console.log('done')
    ),1000);
});

console.log(promise);

promise = new Promise((reslove,reject)=>{
    setTimeout(()=> reject(new Error("woops!")),1000);
})

promise = new Promise(function(resolve,reject){
        resolve(console.log(123)
        );

        reject(new Error("..."));
        setTimeout(()=>{console.log('done');
        },1000);
})


//  then , catch        // fans to get subscribe song

/ promise.then(
    function(result){console.log('song')},
    function(error){console.log('song error')
    }
) 

