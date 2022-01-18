//vẽ đường thẳng
function veDuongThang() {
    let c = document.getElementById('myCanvas1');
    let ctx = c.getContext('2d');
    ctx.moveTo(0,0);
    ctx.lineTo(200, 100);
    ctx.stroke();
}
veDuongThang();

//vẽ đường tròn
function veDuongTron() {
    let c = document.getElementById('myCanvas2');
    let ctx = c.getContext('2d');
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2*Math.PI);
    ctx.stroke();
}
veDuongTron();

// //Vẽ chữ
function veChu1() {
    let c = document.getElementById('myCanvas3');
    let ctx = c.getContext('2d');
    ctx.font = "30px Arial";
    ctx.fillText("Hello Word",20,50);
}
veChu1();

function veChu2() {
    let c = document.getElementById('myCanvas4');
    let ctx = c.getContext('2d');
    ctx.font = "30px Arial";
    ctx.strokeText("Hello World", 20, 50);
}
veChu2();

// //Vẽ Gradient
function veGradient() {
    let c = document.getElementById('myCanvas5');
    let ctx = c.getContext('2d');
    //Create gradient
    let grd = ctx.createLinearGradient(0,0,200,0);
    grd.addColorStop(0,"red");
    grd.addColorStop(1, 'White');
    //Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(10, 10, 150, 80);
}
veGradient();

//Vẽ Gradient Tròn
function veGradientTron() {
    let c = document.getElementById('myCanvas6');
    let ctx = c.getContext('2d');
    //Create gradient
    var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "White");
    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(10,10,150,80);
}
veGradientTron();