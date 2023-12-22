const age = document.querySelector('#danceDanceRevolution').value
document.querySelector('h1').addEventListener('click', run)
const paragraph = document.querySelector('p')

//Create a conditonal that checks their age
function run () {
    if (age < 16) {
        paragraph.innerHTML = "You cannot drive"
    } else if (age < 18) {
        paragraph.innerText = "You can't hate from outside the club, because you can't even get in"
    } else if (age < 21) {
        paragraph.innerText = "You cannot drink"
    } else if (age < 25) {
        paragraph.innerText = "You cannot rent cars affordably"
    } else if (age < 30) {
        paragraph.innerText = "You cannot rent fancy cars affordably"
    } else {
        paragraph.innerText = "There is nothing left for you to look forward to"
    }
}


//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
