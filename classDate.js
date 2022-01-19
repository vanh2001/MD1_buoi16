//Khai báo lớp Date
class myDate {
    constructor(day, month,year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    getDay() {
        return  this.day;
    }
    getMonth() {
        return this.month;
    }
    getYear() {
        return this.year;
    }
    setDay(newDay) {
        this.day = newDay;
    }
    setMonth(newMonth) {
        this.month = newMonth;
    }
    setYear(newYear) {
        this.year = newYear;
    }
    setDate(newDay, newMonth, newYear) {
        this.day = newDay;
        this.month = newMonth;
        this.year = newYear;
    }
    //toString: Trả về giá trị chuỗi dể mô tả đối tượng
    toString(){
        if (this.day<10){
            return "0" + this.day + "/" + this.month + "/" + this.year;
        }
        if (this.month<10){
            return this.day + "/" + "0" + this.month + "/" + this.year;
        }
        return this.day + "/" + this.month + "/" + this.year;
    }
}

//Khởi tạo đối tượng thuộc lớp Date (date):
let date = new myDate(17,9, 2001 );

//Truy cập phương thức của đối tượng thuộc lớp Date (date):
//<Tên đối tượng>.<tên phương thức>
let day = date.getDay();
let month = date.getMonth();
let year = date.getYear();
//Đưa ra thông tin của đối tượng đó
alert("Date: " + date.toString());

//Gán lại giá trị cho lớp Date
date.setDay(10);
date.setMonth(10);
date.setYear(2022);
alert("New Date: " + date.toString());
date.setDate(2,6,2004);