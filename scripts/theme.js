let darkMode 
darkMode = !!darkMode
darkMode = JSON.parse(localStorage.getItem("dark?"))
if(darkMode){
    document.querySelector("html").classList.toggle("dark-mode")
    document.querySelector(".icon-sun").classList.toggle("hide-icon")
    document.querySelector(".icon-moon").classList.toggle("hide-icon")
}


const themeBtn = document.querySelector(".mode-button")


themeBtn.onclick = ()=>{
    document.querySelector("html").classList.toggle("dark-mode")
    document.querySelector(".icon-sun").classList.toggle("hide-icon")
    document.querySelector(".icon-moon").classList.toggle("hide-icon")
    darkMode = !darkMode
    localStorage.setItem("dark?",darkMode)
}