
var signUp = document.querySelector('.nav__signup')
var signForm= document.querySelector('.signup');
var closeForm = document.querySelector('.signup__form__close');


signUp.addEventListener('click',function(){

signForm.style.display='block';

})

closeForm.addEventListener('click',function(){
    signForm.style.display="none";
})


// Sign In Form

var signIn = document.querySelector(".nav__signin");
var signinform=document.querySelector(".signIn");
var signInClose = document.querySelector(".signin__close")

signIn.addEventListener('click',function(){
    console.log('I have clicked!!');
    signinform.style.display = 'block';
})

signInClose.addEventListener('click',function(){
    signinform.style.display="none";
})





