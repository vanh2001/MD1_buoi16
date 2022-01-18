//Khai báo lớp:
//C1: Function:
let rectangle = function (height,width) {
    //thuộc tính
    this.height = height;
    this.width = width;

    //hành vi
    //1. Tính diện tích:
    this.getS = function () {
        return this.width * this.height;
    }
    //2. Tính chu vi:
    this.getP = function () {
        return (this.width + this.height) * 2;
    }
}

//C2: Dùng từ khóa class:
class rectangle2 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    getS() {
        return this.width * this.height;
    }

    getP() {
        return (this.width + this.height) *2;
    }
    draw(){
        let ctx = document.getElementById('myCanvas').getContext('2d');
        ctx.fillStyle = "#710505";
        ctx.fillRect(0,0, this.width, this.height);
    }
}


//Tạo đối tượng
let dtCuaVa = new rectangle(7,5);
let dkCuaVa = new rectangle2(60,30);
dkCuaVa.draw();


//Sử dụng phương thức của đối tượng
//<Tên đối tượng>.<tên của phương thức()>
console.log(dtCuaVa.getP());
console.log(dkCuaVa.getS());