let elHumbargerBtn = document.querySelector(".header__humbarger");
let elModalBtn = document.querySelector(".header__modal");
let elCloseBtn = document.querySelector(".close__btn");



elHumbargerBtn.addEventListener("click", function(){
    elModalBtn.classList.add("show");
    document.body.style = 'overflow:hidden'

})
elCloseBtn.addEventListener("click", function(){
    elModalBtn.classList.remove("show");
    document.body.style = 'overflow:auto'

})