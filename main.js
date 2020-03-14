//Use this to change the position of the box of data
// move it by 50px on every button push
let redBox = document.getElementById("tapOfWarData");
let p1Score = document.getElementById("p1Score");
let p2Score = document.getElementById("p2Score");
let countDown = document.getElementById("countDown");
var position = 0;
let arrayLeft = [83, 65, 87, 68];
let arrayRight = [73, 74, 75, 76];
let randomLeft = Math.floor(Math.random() * (4 - 0) + 0);
let randomRight = Math.floor(Math.random() * (4 - 0) + 0);
console.log(randomLeft);


// redBox.onkeydown = function moveRedBox () {
//     redBox.style.left = 'calc(600px + ' + vars + 'px';
// }

window.addEventListener('keydown', function moveRedBoxLeft(e) {
let randomLeft = Math.floor(Math.random() * (3 - 0) + 0);


if (randomLeft === 0){
    if(e.keyCode === 83){
        position -= 50;
        redBox.style.left = 'calc(600px + ' + position + 'px)';
    }
}
if (randomLeft === 1){
    if(e.keyCode === 65){
        position -= 50;
        redBox.style.left = 'calc(600px + ' + position + 'px)';
    }
} 
if (randomLeft === 2){
    if(e.keyCode === 87){
        position -= 50;
        redBox.style.left = 'calc(600px + ' + position + 'px)';
    }
} 
if (randomLeft === 3){
    if(e.keyCode === 68){
        position -= 50;
        redBox.style.left = 'calc(600px + ' + position + 'px)';
    }
}

    // if(e.keyCode === 75){
    //     position += 50;
    //     redBox.style.left = 'calc(600px + ' + position + 'px';
    // }
    else return;
});
function randomLetterRight(randomRight) {
    console.log(randomRight);
    if(randomRight === 0){
        return "I";
    }
    if(randomRight === 1){
        return "J";
    }
    if(randomRight === 2){
        return "K";
    }
    if(randomRight === 3){
        return "L";
    }
}


window.addEventListener('keydown', function moveRedBoxRight(e) {
    let randomRight = Math.floor(Math.random() * (3-0) + 0);
    document.getElementById("p2Key").innerHTML = randomLetterRight(randomRight);
    console.log(randomRight);
    


    if(randomRight === 0){
        if(e.keyCode === 73){
            position += 50;
            redBox.style.left = 'calc(600px + ' + position + 'px)';
        }
    }
    if(randomRight === 1){
        if(e.keyCode === 74){
            position += 50;
            redBox.style.left = 'calc(600px + ' + position + 'px)';
        }
    }
    if(randomRight === 2){
        if(e.keyCode === 75){
            position += 50;
            redBox.style.left = 'calc(600px + ' + position + 'px)';
        }
    }
    if(randomRight === 3){
        if(e.keyCode === 76){
            position += 50;
            redBox.style.left = 'calc(600px + ' + position + 'px)';
        }
    }

    else return;
});
// function moveRedBox(e){
//     if(e.keyCode === 65){
//         redBox.style.left = 'calc(600px - ' + vars + 'px';
//     }
//     if(e.keyCode === 75){
//         redBox.style.left = 'calc(600px + ' + vars + 'px';
//     }
//     else return;
// }



// document.onkeydown = moveRedBox;

// const log = document.getElementById('redBox');

// document.addEventListener('keypress', logKey);


//redBox.style.left = 5 + "%";

//Math.random digits form 0 to 9
 function random() {
    Math.floor(Math.random() * (10 - 0) + 0);
 };

// document.onkeydown = logKey;
// console.log(document.onkeydown);





