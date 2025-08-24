var typed = new Typed('.text', {
  strings:['FrontendDeveloper' , "Youtuber" , "Webdeveloper"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
      let menu = document.querySelector('#menu-icon');
let nevbar = document.querySelector('.nevbar')

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  nevbar.classList.toggle('active');
}
window.onscroll = () => {
   menu.classList.remove('bx-x');
   nevbar.classList.remove('active');
}
let url='https://script.google.com/macros/s/AKfycbwYHabeNvglYYcZtkU71_EiRjh7vJJY8eNOqyeKTEEY7uokTg97rpxdD8A7IFqIKItt/exec'
let form=document.querySelector('#form');
form.addEventListener("Submit",(e)=>{
  let d=new FormData(form);
  fetch(url,{
    method:"POST",
    body:d
  }).then((res)=>res.text())
  .then((finalRes)=>console.log(finalRes))
  e.preventDefault();
})




