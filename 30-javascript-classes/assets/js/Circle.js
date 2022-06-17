class Circle {
    constructor (radius){
        this.radius = radius;
    }
    show(){
        let target = document.querySelector('#circle');
        target.insertAdjacentHTML('beforeend', `
            <div class="circle" style="width: ${this.radius*2}px;height:${this.radius*2}px;background-color:red;position: absolute; border-radius: 50%"></div>
        `);
    }
    get myRadius() {
        return this.radius;
    } 
    set myRadius(myRadius) {
        this.radius = myRadius;
    }
    get myDiametr() {
        return this.radius*2;
    } 
    squareCircle() {
        let square = 0;
        square = Math.PI * Math.pow(this.radius,2);
        console.log(`Square Circle = ${square}`);
    }
    lineWidthCircle() {
        let lineWidth = 0;
        lineWidth = 2 * Math.PI * this.radius;
        console.log(`Line Width Circle = ${lineWidth}`);
    }
    
}