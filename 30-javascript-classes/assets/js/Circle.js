class Circle {
    constructor (radius){
        this.radius = radius;
    }
    showCircle(){
        // let target = document.querySelector('#circle');
        // target.insertAdjacentHTML('beforeend', `
        // <div class="circle" style="width: ${this.radius*2}px;height:${this.radius*2}px;background-color:red;position: absolute; border-radius: 50%"></div>
        // `);

        document.getElementById('circle').innerHTML = 
        ` 
            <div class="circle" style="width: ${this.radius*2}px;height:${this.radius*2}px;background-color:red;position: absolute; border-radius: 50%"></div>
        `;
    }
    get getRadius() {
        return this.radius;
    } 
    set setRadius(myRadius) {
        this.radius = myRadius;
    }
    showGetRadius() {
        document.getElementById('radius').innerText = this.getRadius;
    }
    get getDiametr() {
        return this.radius*2;
    }
    showDiametr() {
        document.getElementById('diametr').innerText = this.getDiametr;
    }
    squareCircle() {
        // let square = 0;
        // return square = (Math.PI * Math.pow(this.radius,2)).toFixed(2);
        return (Math.PI * Math.pow(this.radius,2)).toFixed(2);
        // console.log(`Square Circle = ${square}`);
    }
    showSquareCircle() {
        // console.log(`See Square: ${s}`);
        document.getElementById('square_circle').innerText = this.squareCircle();
    }
    lineWidthCircle() {
        // let lineWidth = 0;
        // lineWidth = (2 * Math.PI * this.radius).toFixed(2);
        // console.log(`Line Width Circle = ${lineWidth}`);
        
        return (2 * Math.PI * this.radius).toFixed(2);
    }
    showLineWidthCircle() {
        // console.log(`See Line: ${l}`);
        document.getElementById('line_width_circle').innerText = this.lineWidthCircle();
    }
}