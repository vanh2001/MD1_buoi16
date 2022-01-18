class newCircle{
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    getRadius() {
        return this.radius;
    }
    getArea() {
        let area = Math.PI * this.radius * this.radius;
        return area;
    }
}
let circle = new newCircle(4, "red");
let radius = circle.getRadius();
let area = circle.getArea();
alert("Radius: " + radius + " ; area: " + area );