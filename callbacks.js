// asynchronius action functions (setTimeout())

function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));
  document.head.append(script);
}

loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js",
  (script) => {
    alert(`Cool, the script ${script.src} is loaded`);
    alert(_); // _ is a function declared in the loaded script
  },
);

loadScript("/my/script.js", function (script) {
  console.log(`cool the ${script.src} is loaded let load one more`);

  loadScript("my/script2.js", function (script) {
    console.log(`cool , the second script is loadede`);

    loadScript("/my/script3.js", function (script) {
      // ...continue after all scripts are loaded
    });
  });
});


loadScript('1.js' , step1);

function step1(error ,script1){
    if(error){
        handleError(error);
    }
    else{
        loadScript('2.js' , step2);
    }
}

function step2(error ,script){
    if(error){
        handleError(error);
    }
    else{
        loadScript('3.js', step3);
    }
}

function step3(error ,script){
    if(error){
        handleError(error);
    }
    else{
        
    }
}