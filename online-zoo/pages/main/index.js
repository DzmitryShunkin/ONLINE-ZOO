// const hamb = document.querySelector("#hamb");
// const popup = document.querySelector("#po-pup");
// const menu=document.querySelector(".header_menu").cloneNode(1)

// hamb.addEventListener("click", hambHandler)
// function hambHandler(e){
//     e.preventDefault();
//     popup.classList.toggle("open");
//     renderPopup();
// }
// function renderPopup(){
//     popup.append(menu);
// }

const hamb = document.querySelector("#hamb");
const menu=document.querySelector(".header");

hamb.addEventListener("click", function(){
    menu.classList.toggle(".active")
});
