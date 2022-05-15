const btn = document.querySelector(".bx")
const container = document.querySelector(".controls")
const penColor = document.querySelector("#pen-color");
const bgColor = document.querySelector("#bg-color");
const penSize = document.querySelector("#pen-size");
const labels = document.querySelectorAll("label");
const links = document.querySelectorAll("a");
const printBtn = document.querySelector(".print-btn");
const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
let drawing = false;

window.addEventListener("load", () => {

//toggle settings   
btn.addEventListener("click", () => {
    container.classList.toggle("active")
    labels.forEach((i) => {
        i.classList.toggle("active")
    });
    links.forEach((j) => {
        j.classList.toggle("active");
    });
    penColor.classList.toggle("active");
    bgColor.classList.toggle("active");
    penSize.classList.toggle("active")
})
//change the canvas background color
bgColor.addEventListener("change", () => {
    canvas.style.background = bgColor.value;
})
//drawing app
function startPositon(e) {
    drawing = true
    draw(e);
}
function stopPoisition() {
    drawing = false;
    ctx.beginPath();
}
function draw(e) {
    if(!drawing) return;
    ctx.lineWidth = penSize.value;
    ctx.strokeStyle = penColor.value;
    ctx.lineCap = "round";
    ctx.lineTo(e.clientX,e.clientY);
    ctx.stroke();
}
printBtn.addEventListener("click", () => {
    window.print();
})
//event listeners
window.addEventListener("mousedown", startPositon);
window.addEventListener("mouseup", stopPoisition);
window.addEventListener("mousemove", draw)
})
