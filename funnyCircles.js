function Circle(x,y,radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
}

//Vẽ đường tròn với kích thước cố định
function createCircle() {
    let ctx = document.getElementById('myCanvas').getContext('2d');
    let circle = new Circle(500, 500, 150);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2*Math.PI);
    ctx.fill();
}
// createCircle();

//Vẽ đường tròn với bán kính ngẫu nhiên
function createCircle2() {
    let ctx = document.getElementById('myCanvas').getContext('2d');
    let radius = Math.floor(Math.random() * 80);
    let circle = new Circle(500, 500, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2*Math.PI);
    ctx.fill();
}
// createCircle2();

//Vẽ đường tròn với bán kính và màu ngẫu nhiên
function getRandomHex() {
    return Math.floor(Math.random()* 255);
}
function getRandomColor() {
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green +")";
}
function createCircle3() {
    let ctx = document.getElementById('myCanvas').getContext('2d');
    let radius = Math.floor(Math.random()*80);
    let color = getRandomColor();
    let circle = new Circle(500, 500, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius,0,2*Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}
// createCircle3();

//Vẽ hình tròn với vị trí ngẫu nhiên
function getRandomHex() {
    return Math.floor(Math.random()* 255);
}
function getRandomColor() {
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green +")";
}
function createCircle4() {
    let ctx = document.getElementById('myCanvas').getContext('2d');
    let radius = Math.floor(Math.random() * 80);
    let color = getRandomColor();
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let circle = new Circle(x, y, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2*Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}
// createCircle4();

//Vẽ được 2 hình tròn
function getRandomHex() {
    return Math.floor(Math.random()* 255);
}
function getRandomColor() {
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green +")";
}
function createCircle5() {
    let ctx = document.getElementById('myCanvas').getContext('2d');
    let radius = Math.floor(Math.random() * 80);
    let color = getRandomColor();
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let circle = new Circle(x, y, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2*Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}
// createCircle5();
// createCircle5();

//Vẽ được nhiều đường tròn
function getRandomHex() {
    return Math.floor(Math.random()* 255);
}
function getRandomColor() {
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green +")";
}
function createCircle6() {
    let ctx = document.getElementById('myCanvas').getContext('2d');
    let radius = Math.floor(Math.random() * 80);
    let color = getRandomColor();
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let circle = new Circle(x, y, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2*Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

function createMultipleCircle() {
    for (let i = 0; i < 30; i++) {
        createCircle6();
    }
}
createMultipleCircle();
