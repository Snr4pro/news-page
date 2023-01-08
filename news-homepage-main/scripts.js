const bar = document.getElementById("bar");
const close = document.querySelector("#close");
const nav = document.getElementById("list");
const slide = document.querySelector(".menuslide");
const screen = document.querySelector(".cover");


if(bar){
function showSlide(){
        slide.classList.add('active');
        screen.style.display = 'block'
   }
}

if(close){
function hideSlide(){
        slide.classList.remove('active');
        screen.style.display = 'none'

   }
} 

