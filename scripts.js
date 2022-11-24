let inputEl = document.getElementById("input-el")
let ulEl = document.getElementById("ul-el")
let btn = document.getElementById("btn")
let wordArr = []
const local = JSON.parse(localStorage.getItem("wordArr"))
const clrBtn = document.getElementById("clr-btn")

if (local){
    wordArr = local
    disp(wordArr)
}

btn.addEventListener("click",function(){
    wordArr.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("wordArr", JSON.stringify(wordArr))

    disp(wordArr)
})

function disp(wordArr){
    let notes = ""
    for(let i = 0; i < wordArr.length; i++){
        notes += `
        <li>
            ${wordArr[i]}
        </li>
    `    
    }
    ulEl.innerHTML = notes
}


clrBtn.addEventListener("click",function(){
    localStorage.clear()
    ulEl.innerHTML = ""
    location.reload()
})

