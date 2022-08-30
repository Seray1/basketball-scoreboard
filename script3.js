let homePlusOne = document.getElementById("homeplusone")
let homePlusTwo = document.getElementById("homeplustwo")
let homePlusThree = document.getElementById("homeplusthree")
let guestPlusOne = document.getElementById("guestplusone")
let guestPlusTwo = document.getElementById("guestplustwo")
let guestPlusThree = document.getElementById("guestplusthree")
let homeScoreElement = document.getElementById("home-score")
let guestScoreElement = document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0


function homepointOne(){
    homeScore += 1
    homeScoreElement.textContent = homeScore
    console.log("true")
}
function homepointTwo() {
    homeScore += 2
    homeScoreElement.textContent = homeScore
    console.log("second true")
}
function homepointThree() {
    homeScore += 3
    homeScoreElement.textContent = homeScore
    console.log("third true")
}

function guestpointOne(){
    guestScore += 1
    guestScoreElement.textContent = guestScore
    console.log("true g")
}
function guestpointTwo() {
    guestScore += 2
    guestScoreElement.textContent = guestScore
    console.log("second true g")
}
function guestpointThree() {
    guestScore += 3
    guestScoreElement.textContent = guestScore
    console.log("third true g")
}
function resetgame(){
    // if (guestScore & homeScore > 0) {
    //     guestScoreElement.textContent = 0
    //     homeScoreElement.textContent = 0
    //     console.log("resetted")
    // }
    // if ( guestScoreElement.textContent & homeScoreElement.textContent > 0) {
        guestScore = 0
        homeScore = 0
        guestScoreElement.textContent = 0
         homeScoreElement.textContent = 0
        console.log("worked")
    // }
    
}



// console.log(homePlusOne)
// console.log(homePlusTwo)
// console.log(homePlusThree)
// console.log(guestScoreElement)
// console.log(HomeScoreElement)
// console.log(guestPlusOne)
// console.log(guestPlusTwo)
// console.log(guestPlusThree)
