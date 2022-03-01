// Dropdown button
function myFunction() {
    document.getElementById ("myDropdown").classList.toggle("show");
}

// Slideshow Container
var highlightImg = document.querySelector("#highlight");

console.log(highlightImg);
function stonePunk() {
    highlightImg.src = "images /stonepunk.png";
    console.log(highlightImg.src);

}
function pixelNinja() {
    highlightImg.src = "images /pixel-ninjas-2.png";
    console.log(highlightImg.src);
}

var count= 0;
var countElement= document.querySelector("#count");

console.log(countElement);

function add1() {
    count++;
    countElement.innerText= " "+ count;
    console.log(count);
}