/* Declare variables below to save the different sections (divs) of your story*/
let title=document.querySelector(".title");
let storyopening=document.querySelector(".story-opening");
let buttons=document.querySelector(".buttons");
let option_one_screen=document.querySelector(".option-one-screen");
let option_two_screen=document.querySelector(".option-two-screen");
let option_one_end=document.querySelector(".option-one-end");
let option_two_end=document.querySelector(".option-two-end");
let option_one_button=document.querySelector(".option-one");
let option_two_button=document.querySelector(".option-two");
option_one_button.onclick=function(){
storyopening.style.display = "none";
  option_one_screen.style.display = "block"
};
option_two_button.onclick=function(){
storyopening.style.display = "none";
  option_two_screen.style.display = "block"
option_one_screen.style.display = "none"

};


INSERT_VARIABLE.onclick=function(){

};
