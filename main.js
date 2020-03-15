//Use this to change the position of the box of data
// move it by 50px on every button push
let redBox = document.getElementById("tapOfWarData");
let p1Score = document.getElementById("p1Score");
let p2Score = document.getElementById("p2Score");
let countDown = document.getElementById("countDown");
var position = 0;
let arrayLeft = [65, 68, 87, 83];
let arrayRight = [73, 74, 75, 76];
let randomLeft = Math.floor(Math.random() * (4 - 0) + 0);
let randomRight = Math.floor(Math.random() * (4 - 0) + 0);
let player1Wins = 0;
let player2Wins = 0;
let valueLeft = arrayLeft[Math.floor(Math.random() * arrayLeft.length)];
document.getElementById("p1key".innerHTML = valueLeft);
let valueRight = arrayRight[Math.floor(Math.random() * arrayRight.length)];




document.addEventListener("keydown", event => {
    if(event.keyCode == valueLeft) {
        position -= 50;
        redBox.style.left = 'calc(600px + ' + position + 'px)';
        valueLeft = arrayLeft[Math.floor(Math.random() * arrayLeft.length)];
        document.getElementById("p1Key").innerHTML = randomLetterLeft(valueLeft);
        
        

    }
});

document.addEventListener("keydown", event => {
    if(event.keyCode == valueRight) {
        position += 50;
        redBox.style.left = 'calc(600px + ' + position + 'px)';
        valueRight = arrayRight[Math.floor(Math.random() * arrayRight.length)];
        document.getElementById("p2Key").innerHTML = randomLetterRight(valueRight);
        
        

    }
});
// window.addEventListener('keydown', function moveRedBoxLeft(e) {
// let randomLeft = Math.floor(Math.random() * (3 - 0) + 0);
// document.getElementById("p1Key").innerHTML = randomLetterLeft(randomLeft);
// if (position == -350){
//     player1Wins++;
//     position = 0;
//     redBox.style.left = 'calc(600px + ' + position + 'px)';
//     let randomLeft = Math.floor(Math.random() * (3 - 0) + 0);
//     document.getElementById("p1Key").innerHTML = randomLetterLeft(randomLeft);
// }


// if (randomLeft === 0){
//     if(e.keyCode === 83){
//         position -= 50;
//         redBox.style.left = 'calc(600px + ' + position + 'px)';
//         let randomLeft = Math.floor(Math.random() * (3 - 0) + 0);
//         document.getElementById("p1Key").innerHTML = randomLetterLeft(randomLeft);
//     }
// }
// else if (randomLeft === 1){
//     if(e.keyCode === 65){
//         position -= 50;
//         redBox.style.left = 'calc(600px + ' + position + 'px)';
//         let randomLeft = Math.floor(Math.random() * (3 - 0) + 0);
//         document.getElementById("p1Key").innerHTML = randomLetterLeft(randomLeft);
//     }
// } 
// else if (randomLeft === 2){
//     if(e.keyCode === 87){
//         position -= 50;
//         redBox.style.left = 'calc(600px + ' + position + 'px)';
//         let randomLeft = Math.floor(Math.random() * (3 - 0) + 0);
//         document.getElementById("p1Key").innerHTML = randomLetterLeft(randomLeft);
//     }
// } 
// else if (randomLeft === 3){
//     if(e.keyCode === 68){
//         position -= 50;
//         redBox.style.left = 'calc(600px + ' + position + 'px)';
//         let randomLeft = Math.floor(Math.random() * (3 - 0) + 0);
//         document.getElementById("p1Key").innerHTML = randomLetterLeft(randomLeft);
//     }
// }

// else return;
// });

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




// window.addEventListener('keydown', function moveRedBoxRight(e) {
//     let randomRight = Math.floor(Math.random() * (4 - 0) + 0);
//     document.getElementById("p2Key").innerHTML = randomLetterRight(randomRight);
//     if (position == 350){
//         player2Wins++;
//         position = 0;
//         redBox.style.left = 'calc(600px + ' + position + 'px)';
//     }
//     if(randomRight === 0){
//         if(e.keyCode === 73){
//             position += 50;
//             redBox.style.left = 'calc(600px + ' + position + 'px)';
//         }
//     }
//     if(randomRight === 1){
//         if(e.keyCode === 74){
//             position += 50;
//             redBox.style.left = 'calc(600px + ' + position + 'px)';
//         }
//     }
//     if(randomRight === 2){
//         if(e.keyCode === 75){
//             position += 50;
//             redBox.style.left = 'calc(600px + ' + position + 'px)';
//         }
//     }
//     if(randomRight === 3){
//         if(e.keyCode === 76){
//             position += 50;
//             redBox.style.left = 'calc(600px + ' + position + 'px)';
//         }
//     }

//     else return;
// });

