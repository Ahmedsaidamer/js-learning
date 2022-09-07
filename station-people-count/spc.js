let county = document.getElementById('count')
let entery = document.getElementById('enter')
let save = document.getElementById('save')
let saveel = document.getElementById('save-el')
let count = 0

function enter() {
    count += 1
    county.textContent = count

}

function savebtn() {
    let b = count + '+'
    saveel.innerText += b
    count = 0
}