const cookie = document.getElementById("cookie")
let counter = document.getElementById("clicker__counter")
cookie.onclick = function () {
    counter.textContent = Number(counter.textContent) + 1
}