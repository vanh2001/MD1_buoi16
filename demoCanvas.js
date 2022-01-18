class Circle {
    constructor(x,y,radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
}
function createCircle() {
    let ctx = document.getElementById('myCanvas').getContext("2d");
    let hinhTron = new Circle(100, 100, 40);
    ctx.beginPath();
    ctx.arc(hinhTron.x,hinhTron.y, hinhTron.radius, 0, 2*Math.PI);
    ctx.fill();
}
createCircle();
