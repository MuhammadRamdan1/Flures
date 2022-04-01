
/* ــــــــــــــــــــــــــــــــــــــ[Header]ــــــــــــــــــــــــــــــــــــــ */
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