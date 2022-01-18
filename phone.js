class Phone {
    constructor(draft, inbox, sent) {
        this.battery = 100;
        this.draft = draft;
        this.inbox = inbox;
        this.sent = sent;
    }

    checkStatus() {
        return this.battery > 0;
    }

    textMessage(text) {
        this.draft = text;
    }

    sendMessage(receivePhone) {
        //1. Chuyển thư nháp của điện thoại hiện tại vào hộp thư đến của điện thoại được nhận
        receivePhone.inbox.push(this.draft);
        //2. Chuyển thư nháp của điện thoại hiện tại vào thư đã gửi của dt hiện tại
        this.sent.push(this.draft);
        //3. Xóa thư nháp
        this.draft="";
        this.battery--;
        receivePhone.battery--;
    }
    showInbox(){
        return this.inbox;
    }
}

let vanh = new Phone("", [],[]);
let thanh = new Phone("", [], []);