function change(element) {
    console.log("Switched");
    console.log(element);
    element.src = "./images/assets/succulents-2.jpg"
}

function changeBack(element) {
    console.log("Switch back")
    element.src = "./images/assets/succulents-1.jpg"
}

function closeThis() {
    var acceptBtn = document.getElementById ("cookie-container")
    acceptBtn.style.visibility = "hidden";
}

// function showThis() {
//     var acceptBtn = document.getElementById ("cookie-container")
//     acceptBtn.style.visibility = "visible";
// }