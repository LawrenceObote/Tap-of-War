//Use this to change the position of the box of data
// move it by 50px on every button push
var redBox = document.getElementById("tapOfWarData");
var vars = 300;

// redBox.onkeydown = function moveRedBox () {
//     redBox.style.left = 'calc(600px + ' + vars + 'px';
// }

function moveRedBox(e){
    if(e.keyCode = 65){
        redBox.style.left = 'calc(600px + ' + vars + 'px';
    }
    if(e.keyCode = 75){
        redBox.style.left = 'calc(600px - ' + vars + 'px';
    }
}



document.onkeydown = moveRedBox;

const log = document.getElementById('redBox');

document.addEventListener('keypress', logKey);


//redBox.style.left = 5 + "%";

//Math.random digits form 0 to 9
// console.log(Math.floor(Math.random() * (10 - 0) + 0));

// document.onkeydown = logKey;
// console.log(document.onkeydown);



