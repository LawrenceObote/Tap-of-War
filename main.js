//Use this to change the position of the box of data
// move it by 50px on every button push
let redBox = document.getElementById("tapOfWarData");
let p1Score = document.getElementById("p1Score");
let p2Score = document.getElementById("p2Score");
let position = 0;
let arrayLeft = [65, 68, 87, 83];
let arrayRight = [73, 74, 75, 76];
let randomLeft = Math.floor(Math.random() * (4 - 0) + 0);
let randomRight = Math.floor(Math.random() * (4 - 0) + 0);
let player1Wins = 0;
let player2Wins = 0;
let valueLeft = arrayLeft[Math.floor(Math.random() * arrayLeft.length)];
document.getElementById("p1Key").innerHTML = randomLetterLeft(valueLeft);
let valueRight = arrayRight[Math.floor(Math.random() * arrayRight.length)];
document.getElementById("p2Key").innerHTML = randomLetterRight(valueRight);




document.addEventListener("keydown", event => {
    if(event.keyCode == valueLeft && position <= -350){
        player1Wins++;
        position = 0;
        document.getElementById("p1Score").innerHTML = "" + player1Wins;
        redBox.style.left = 'calc(600px + ' + position + 'px)';
        alert("Player 1 Wins!");
    }
    else if(event.keyCode == valueLeft) {
        position -= 50;
        redBox.style.left = 'calc(600px + ' + position + 'px)';
        valueLeft = arrayLeft[Math.floor(Math.random() * arrayLeft.length)];
        document.getElementById("p1Key").innerHTML = randomLetterLeft(valueLeft);
    }
});


document.addEventListener("keydown", event => {
    if(event.keyCode == valueRight && position >= 350){
        player2Wins++;
        position = 0;
        document.getElementById("p2Score").innerHTML = "" + player2Wins;
        redBox.style.left = 'calc(600px + ' + position + 'px)';
        alert("Player 2 Wins!");
    }
    else if(event.keyCode == valueRight) {
        position += 50;
        redBox.style.left = 'calc(600px + ' + position + 'px)';
        valueRight = arrayRight[Math.floor(Math.random() * arrayRight.length)];
        document.getElementById("p2Key").innerHTML = randomLetterRight(valueRight);
    }
});


function randomLetterLeft(valueLeft) {

    if(valueLeft === 65){
        return "A";
    }
    if(valueLeft === 68){
        return "D";
    }
    if(valueLeft === 83){
        return "S";
    }
    if(valueLeft === 87){
        return "W";
    }
}
function randomLetterRight(randomRight) {
    if(valueRight === 73){
        return "I";
    }
    if(valueRight === 74){
        return "J";
    }
    if(valueRight === 75){
        return "K";
    }
    if(valueRight === 76){
        return "L";
    }
}


