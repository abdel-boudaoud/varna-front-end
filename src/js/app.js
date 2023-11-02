let n = document.querySelector(".question")


n.addEventListener("click", (e)=>{
    let ff = document.querySelector(".answer")
    n.classList.add("active")
    ff.classList.remove("hidden")
})