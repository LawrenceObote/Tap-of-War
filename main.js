//Use this to change the position of the box of data
var redBox = document.getElementById("tapOfWarData");
var vars = 45;

function moveRedBox(){
    console.log(redBox.style.left = 'calc(50% + ' + vars + '%)');
}

//redBox.style.left = 5 + "%";

//Math.random digits form 0 to 9
console.log(Math.floor(Math.random() * (10 - 0) + 0));

// document.onkeydown = logKey;
// console.log(document.onkeydown);

moveRedBox();

