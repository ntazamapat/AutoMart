
var signUp = document.querySelector('.nav__signup')
var signForm= document.querySelector('.signup');
var closeForm = document.querySelector('.signup__form__close');

signUp.addEventListener('click',function(){

signForm.style.display='block';

})

closeForm.addEventListener('click',function(){
    signForm.style.display="none";
})

