const hbutton= document.getElementsByClassName("tbutton")[0]
const nab = document.getElementsByClassName("navb")[0]

hbutton.addEventListener("click", ()=>{
    nab.classList.toggle("active")
})