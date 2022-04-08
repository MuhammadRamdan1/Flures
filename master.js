
/* ــــــــــــــــــــــــــــــــــــــ[Header]ــــــــــــــــــــــــــــــــــــــ */
const menuBtn = document.querySelector(".menuBtn")
const menuC = document.querySelector(".menuContent")

menuBtn.addEventListener('click', function(){
    menuC.classList.toggle("menuToggle")
})

const searchBox = document.getElementById("sbb");

const contentBody1 = document.querySelector(".one")

let searchB = document.querySelector(".searchBox");
searchB.addEventListener('click',function(){
    searchBox.classList.add("searchBoxx");
})
contentBody1.addEventListener('click',function (){
    searchBox.classList.remove("searchBoxx");
})
/* ــــــــــــــــــــــــــــــــــــــ[Conetnt]ــــــــــــــــــــــــــــــــــــــ */



/* ــــــــــــــــــــــــــــــــــــــ[Footer]ــــــــــــــــــــــــــــــــــــــ */
// const footer = document.querySelector(".semifooter");
//     setTimeout( window.onload = function animation(){
//         // footer.style.delay = '1s'
//             footer.style.top = '0px'
//         }
//     , 2000);

const footer = document.querySelector(".semifooter");

window.onload = function(){
    setTimeout(function(){
        footer.style.top = '0px'
    }, 1000);
};

// const footer = document.querySelector(".semifooter");
// // window.onload =setTimeout(animation, 1000);
// window.onload = function animation(){
//     // footer.style.delay = '1s'
//     footer.style.top = '0px'
// }
// footer.addEventListener('load',function(){
//     footer.style.top = '0px'
// })