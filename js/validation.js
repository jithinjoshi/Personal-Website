const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  
  const isValidPhone = (phone) => {
    const re = /^(\+91-|\+91|0)?\d{10}$/;
    return re.test(String(phone).toLowerCase());
  };

const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const mobileInput = document.getElementById('mobile');
const messageInput = document.getElementById('message');
const msgInput = document.getElementById('msg');

const errorHint = document.getElementsByClassName('error-hint');

let isValidated = false;

let isValid;





function resetElement(elm){
    elm.classList.remove('invalid');
    elm.nextElementSibling.classList.add("hidden");
}

function  invalidElement(elm){
    elm.classList.add('invalid');
    elm.nextElementSibling.classList.remove("hidden");

    

}


function validateInput(){
    if(!isValidated) return;

     isValid = true;

    resetElement(nameInput);
    resetElement(emailInput);
    resetElement(mobileInput);
    resetElement(messageInput);
    resetElement(msgInput)

    

    if(!nameInput.value || nameInput.value[0]===" "){
        invalidElement(nameInput);
        isValid = false;    
    }

    if(!isValidEmail(emailInput.value)){
        invalidElement(emailInput)
        isValid = false;
        
        
    }
    if(!isValidPhone(mobileInput.value)){
        invalidElement(mobileInput)
        isValid = false;   
    }

    if(!messageInput.value|| messageInput.value[0]===" "){
        invalidElement(messageInput);
        isValid = false;    
    }

    if(!msgInput.value || msgInput.value.length < 30 || msgInput.value[0]===" "){
        invalidElement(msgInput);
        isValid = false;
    }
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    isValidated = true;
    validateInput();

    if(isValid === true){
        alert("Form is submitted successfully..")
        form.reset();
    }
})

nameInput.addEventListener('input',function(){
    validateInput();
})

emailInput.addEventListener('input',function(){
    validateInput();
})

mobileInput.addEventListener('input',function(){
    validateInput();
})

messageInput.addEventListener('input',function(){
    validateInput();
})

msgInput.addEventListener('input',function(){
    validateInput();
})

