let inputEl = document.getElementById("input-el")
let ulEl = document.getElementById("ul-el")
let btn = document.getElementById("btn")
let wordArr = []

btn.addEventListener("click",function(){
    wordArr.push(inputEl.value)
    inputEl.value = ""
    disp()
})

function disp(){
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

