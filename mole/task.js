
let holes = document.getElementsByClassName('hole')
let killed = document.getElementById("dead")
let missed = document.getElementById("lost")
for (el of holes) {
    el.addEventListener('click', function (event) {
        if (event.target.className == 'hole hole_has-mole') {
            killed.textContent = Number(killed.textContent) + 1
            event.target.className = "hole"
            if (Number(killed.textContent == 10)) {
                alert('WIN!')
                killed.textContent = 0
                missed.textContent = 0
            }
        }
        else {
            missed.textContent = Number(missed.textContent) + 1
            if (Number(missed.textContent == 5)) {
                alert('LOSE!')
                killed.textContent = 0
                missed.textContent = 0
            }
        }

    })
}

