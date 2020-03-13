//Use this to change the position of the box of data
// move it by 50px on every button push
let redBox = document.getElementById("tapOfWarData");
let position = 0;
let arrayLeft = [83, 65, 87, 68];
let arrayRight = [74, 73, 75, 76];


// redBox.onkeydown = function moveRedBox () {
//     redBox.style.left = 'calc(600px + ' + vars + 'px';
// }
window.addEventListener('keydown', function moveRedBox(e) {
    if(e.keyCode === 65){
        position -= 50;
        redBox.style.left = 'calc(600px + ' + position + 'px';
        
    }
    if(e.keyCode === 75){
        position += 50;
        redBox.style.left = 'calc(600px + ' + position + 'px';
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



