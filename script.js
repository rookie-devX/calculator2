let textDisp = document.getElementById("display2"); //1st input box
let show = document.getElementById("display1"); //2nd input box
let point = document.getElementById("point");
let zero = document.getElementById("zero");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let equalto = document.getElementById("equalto");

let expression = "";
let result;
let p = 0;
let n = 0;
let m = 0;
let d = 0;
let dp = 0;

// last element delete function 
function deleteLast() {
    console.log("delete");
    let text = expression.slice(0, expression.length - 1);
    expression = text;
    textDisp.value = text;
}


// numbers button
zero.addEventListener("click", function () {
    textDisp.value += "0";
    expression += 0;

    p = 0;
    n = 0;
    m = 0;
    d = 0;
    dp = 0;

});
one.addEventListener("click", function () {
    textDisp.value += "1";
    expression += 1;
    p = 0;
    n = 0;
    m = 0;
    d = 0;
    dp = 0;

});
two.addEventListener("click",
    function () {
        textDisp.value += "2";
        expression += 2;
        p = 0;
        n = 0;
        m = 0;
        d = 0;
        dp = 0;

    }
);
three.addEventListener("click", function () {
    textDisp.value += "3";
    expression += 3;
    p = 0;
    n = 0;
    m = 0;
    d = 0;
    dp = 0;

});
four.addEventListener("click", function () {
    textDisp.value += "4";
    expression += 4;
    p = 0;
    n = 0;
    m = 0;
    d = 0;
    dp = 0;

});
five.addEventListener("click", function () {
    textDisp.value += "5";
    expression += 5;
    p = 0;
    n = 0;
    m = 0;
    d = 0;
    dp = 0;

});
six.addEventListener("click", function () {
    textDisp.value += "6";
    expression += 6;
    p = 0;
    n = 0;
    m = 0;
    d = 0;
    dp = 0;

});
seven.addEventListener("click", function () {
    textDisp.value += "7";
    expression += 7;
    p = 0;
    n = 0;
    m = 0;
    d = 0;
    dp = 0;
});
eight.addEventListener("click", function () {
    textDisp.value += "8";
    expression += 8;
    p = 0;
    n = 0;
    m = 0;
    d = 0;
    dp = 0;

});
nine.addEventListener("click", function () {
    textDisp.value += "9";
    expression += 9;
    p = 0;
    n = 0;
    m = 0;
    d = 0;
    dp = 0;

});

//operators

point.addEventListener("click", function () {
    if (dp == 0) {
        textDisp.value += ".";
        expression += ".";
    } dp = 1;

});
document.getElementById("plus").addEventListener("click", function () {
    if (p == 0) {
        textDisp.value += "+";
        expression = expression + "+";
    } p = 1;

});
document.getElementById("minus").addEventListener("click", function () {
    if (n == 0) {
        textDisp.value += "-";
        expression = expression + "-";
    } n = 1;

});
document.getElementById("multi").addEventListener("click", function () {
    if (m == 0) {
        textDisp.value += "*";
        expression = expression + "*";
    } m = 1;

});
document.getElementById("divide").addEventListener("click", function () {
    if (d == 0) {
        textDisp.value += "/";
        expression = expression + "/";
    } d = 1;

});

//all clear button
document.getElementById("allclear").addEventListener("click", function () {
    textDisp.value = "";
    show.value = "";
    expression = "";
    p = 0;
    m = 0;
    n = 0;
    d = 0;
    dp = 0;
});
// delete button
document.getElementById("delete").addEventListener("click", deleteLast);



//result calculation
equalto.addEventListener("click", function () {
    //console.log("expression " + typeof(expression) + " value = "+expression);

    result = eval(expression);
    //show.value = result + " type 0f : "+typeof(result);
    textDisp.value = result;
    show.value = expression;
    expression = result;
});

//change background color
const color1 = 'rgba(9, 42, 255, 0.311)';
const color2 = '#0b091f';
const colorw = 'white';


const toggleButton = document.getElementById("floatingButton");
const bodyColor = document.getElementById('bodyColor');
const textelement = document.getElementById('typing-text');

let currentColor = color1;


function changeColor() {
    if (currentColor === color1) {
        bodyColor.style.backgroundColor = color2;
        textelement.style.color = colorw;
        currentColor = color2;
    }
    else {
        bodyColor.style.backgroundColor = color1;
        textelement.style.color = color2;
        currentColor = color1;
    }
}


toggleButton.addEventListener('click', changeColor);

//calculator text animation control
let isAnimationOn = true;
function pausetext(){
    if(isAnimationOn == true){
        document.querySelector('.typing-text').style.animation = 'none';
        document.querySelector('.typing-text').style.overflow = 'visible';
        document.querySelector('.typing-text').style.width = '10ch';
    }
    else{
        document.querySelector('.typing-text').style.overflow = 'hidden';
        document.querySelector('.typing-text').style.animation = 'typing 2s steps(12)infinite alternate-reverse';
        
    }
   isAnimationOn = !isAnimationOn;

}
document.getElementById('typing-text').addEventListener('click',pausetext);