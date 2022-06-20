
// <<==========================1 Task==============================>>

// const circ = new Circle (8);
// circ.show();

const circ = new Circle (60);
console.log(`Get Radius before set: ${circ.getRadius}`);

circ.setRadius = '8';

console.log(`Get Radius after Set: ${circ.getRadius}`);
console.log(`Get Diametr: ${circ.getDiametr}`);

circ.squareCircle();
circ.lineWidthCircle();


circ.showGetRadius();
circ.showDiametr();
circ.showSquareCircle();
circ.showLineWidthCircle();

circ.showCircle();






// // HW 2

// const kolo = new Circle();

// const diam = kolo.diametr; // так викликається getter

// kolo.showDiametr('d');


// //
// const kolo2 = {
//     radius: 10,
//     getDiametr(){
//         return this.radius * 2;
//     }
// }

// kolo2.getDiametr()//20
// kolo2.radius = 20;
// // kolo2.




// <<==========================3 Task==============================>>

const list = [
    new Employee({
        name: 'Bob', 
        position: 'Manager', 
        age: 30
    }),
    new Employee({
        name: 'John', 
        position: 'High Manager', 
        age: 35
    }),
    new Employee({
        name: 'Ann', 
        position: 'Admin', 
        age: 28
    })
];

const myTable = new EmpTable(list);

myTable.viewHtml('emp_tbody');