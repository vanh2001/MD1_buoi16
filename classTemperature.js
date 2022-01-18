class Temperature {
    constructor(doC) {
        this.doC = doC;
    }
    getdoC(){
        return this.doC;
    }
    convertdoCtodoF(){
        let doF = 9/5 * this.doC + 32;
        return doF;
    }
    convertdoCtodoK(){
        let doK = this.doC + 273.15;
        return doK;
    }
}

//Khởi tạo đối tượng
let doC = new Temperature(25);

//Sử dụng phương thức của dối tượng
document.writeln("Nhiệt độ C là: " + doC.getdoC() + "<br>"
                +"Nhiệt độ F là: " + doC.convertdoCtodoF() + "<br>"
                + "Nhiệt độ Kelvin là: " + doC.convertdoCtodoK());
