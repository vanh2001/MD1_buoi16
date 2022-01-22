class BagRice {
    constructor(can) {
        this.can = can;
    }

    //Phương thức
    //Xác định tham số của hàm
    //Cách triển khai của hàm
    doGao(soCan, baoGaoKhac){
        //Trừ số cân của bao gạo hiện tại
        this.can -= soCan;
        //Tăng cân của bao gạo khác
        baoGaoKhac.can += soCan;
    }
}

let baoGaoCuuDoi = new BagRice(1000);
let baoGaoCuaVa = new BagRice(0);
let baoGaoCuaYen = new BagRice(5);
let baoGaoCuaTan = new BagRice(10);
