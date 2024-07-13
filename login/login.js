const signUp=document.getElementById("signUp");
const heading=document.getElementById("heading");
const signIn=document.getElementById("signIn");
const inputfield=document.getElementById("input-field");

signUp.onclick=function(){
heading.innerHTML="Sign Up";
inputfield.style.opacity="1";
inputfield.style.height="40px";
signIn.classList.remove("active");
signUp.classList.add("active");

};
signIn.onclick=function(){
heading.innerHTML="Sign In";
inputfield.style.height="0px";
inputfield.style.opacity="0";
signIn.classList.add("active");
signUp.classList.remove("active");

};
