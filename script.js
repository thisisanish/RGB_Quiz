var colors = generateRandomColors(6)
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset")
var easyButton = document.querySelector("#easyBtn")
var hardButton = document.querySelector("#hardBtn")

resetButton.addEventListener("click",function(){
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
    h1.style.backgroundColor = "#232323"
})

console.log(h1)
colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    //addind initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //event handler
    squares[i].addEventListener("click",function(){
        
        var clickedColor = this.style.backgroundColor;

        if(clickedColor === pickedColor){
            changeColor(clickedColor)
            
            message.textContent=("correct")
            console.log(clickedColor,h1)
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = ("Play Again!")
        }
        else{
            this.style.background="#232323"
            message.textContent = ("try Again!!")
        }
    }) 
}


function changeColor(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = color;
    }
}

function pickColor(){
    random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function generateRandomColors(num){
    var array = []
    for(var i = 0; i < num; i++){
        array.push(randomColor())
    }
    return array;
}

function randomColor(){
    var red = Math.floor(Math.random() * 256)
    var green = Math.floor(Math.random() * 256)
    var blue = Math.floor(Math.random() * 256)
    return "rgb(" + red + ", " + green + ", " + blue + ")";
    
}