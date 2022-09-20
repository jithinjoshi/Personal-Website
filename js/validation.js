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

const errorHint = document.getElementsByClassName('error-hint');

let isValidated = false;

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

    resetElement(nameInput);
    resetElement(emailInput);
    resetElement(mobileInput);
    resetElement(messageInput);

    

    if(!nameInput.value){
        invalidElement(nameInput);    
    }

    if(!isValidEmail(emailInput.value)){
        invalidElement(emailInput)
        
    }
    if(!isValidPhone(mobileInput.value)){
        invalidElement(mobileInput)   
    }

    if(!messageInput.value){
        invalidElement(messageInput);    
    }
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    isValidated = true;
    validateInput();
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

