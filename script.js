// random number generator

const pinBtn = document.getElementById("pinBtn");
pinBtn.addEventListener("click", function(){
    const newPin = Math.floor(Math.random() * (2000 - 1210)) + 1210;
    document.getElementById("pinInput").value = newPin;
    let fail = document.getElementById("fail");
    fail.style.display = " none";
    let success = document.getElementById("success");
    success.style.display = "none";    
});

document.getElementById("pinInput").value = "";

// calculator input value
function showValue(data) {
    let inputValue = document.getElementById("inputValue");
    switch (data) {

        case 'c': inputValue.value = "";
        break;

        case '<': inputValue.value = inputValue.value.substr(0, inputValue.value.length - 1);
        break;
    
        default: inputValue.value += data;
        break;
    }
    
}
document.getElementById("inputValue").value = "";


// random number & calculator data verify
const submitBtn = document.getElementById("calcBtn");
submitBtn.addEventListener("click", function(){
          let pinInput =  document.getElementById("pinInput").value;
          let inputValue = document.getElementById("inputValue").value;

          if (inputValue === pinInput && inputValue.length > 0 && pinInput.length > 0 ) {
            let success = document.getElementById("success");
                success.style.display = "block";
                document.getElementById("inputValue").value = "";
                document.getElementById("pinInput").value = "";
                        
          } else if (inputValue !== pinInput) {
                let fail = document.getElementById("fail");
                fail.style.display = " block";
                document.getElementById("inputValue").value = "";
                document.getElementById("pinInput").value = "";
                    
          } else { 
              let success = document.getElementById("success");
                    success.style.display = "none";
                    let fail = document.getElementById("fail");
                    fail.style.display = "none";
                    
                   
          }
                   
          
          
});


