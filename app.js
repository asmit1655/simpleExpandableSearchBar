const searchBtn=document.getElementById("search-button");
const searchInput=document.querySelector(".search-input");
console.log(searchBtn,searchInput);
searchBtn.addEventListener("click", ()=>{
    searchInput.classList.toggle("active-search");
    console.log("searchInput");
});
document.querySelector("main").addEventListener("click",()=>{
    searchInput.classList.remove("active-search");
});
