const circ = new Circle (50);
circ.show();

const circ2 = new Circle (60);
console.log(circ2.myRadius);

circ2.myRadius = '80';
console.log(circ2.myRadius);

console.log(circ2.myDiametr);

circ2.show();


circ2.squareCircle();

circ2.lineWidthCircle();
