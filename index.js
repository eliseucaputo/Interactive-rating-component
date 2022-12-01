let sectionRating = document.getElementById('section-rating')
let thank = document.querySelector('.thank')

let btnSubmit = document.getElementById('btn-submit')
let rateAgain = document.getElementById('btn-rate')

let numRating = document.getElementById('num-rating')
let rates = document.querySelectorAll('.btn-rating')

/*btnSubmit.addEventListener('click', () => {
    thank.classList.remove('hidden')
})*/

function submitData() {
    thank.classList.remove('hidden')
    sectionRating.style.display = 'none'
}

function backSection() {
    thank.classList.add('hidden')
    sectionRating.style.display = 'flex'
}

function selectNumber1() {
    if(true) {
        numRating.innerHTML = ' 1'
    }
}

function selectNumber2() {
    if(true) {
        numRating.innerHTML = ' 2'
    }
}

function selectNumber3() {
    if(true) {
        numRating.innerHTML = ' 3'
    }
}

function selectNumber4() {
    if(true) {
        numRating.innerHTML = ' 4'
    }
}

function selectNumber5() {
    if(true) {
        numRating.innerHTML = ' 5'
    }
}