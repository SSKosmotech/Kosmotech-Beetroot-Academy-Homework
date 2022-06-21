
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

// <<==========================2 Task==============================>>

const marker = new Marker('blue', 100);
console.log(marker);
marker.showColor();
marker.showPercent();
// marker.showBar();


marker.getAndShow("Думи мої, думи мої, Лихо мені з вами! Нащо стали на папері Сумними рядами?.. Чом вас вітер не розвіяв В степу, як пилину? Чом вас лихо не приспало, Як свою дитину?.. Бо вас лихо на світ на сміх породило, Поливали сльози... Чом не затопил");
// console.log;

marker.showPercenAfter();
marker.showBarAfter();


document.getElementById("reCharged").addEventListener('click',function (){
    const recharge_ink = new Recharge('blue', 3);
    recharge_ink.reCharged();
    recharge_ink.showPercenAfter();
    recharge_ink.showBarAfter();
    // marker.getAndShow();
    recharge_ink.setAmount = '100';
    recharge_ink.getAndShow();
    // console.log(`Yo: ${this.amountInk}`);
});


// const rechargedAmount = new Recharge('green', 80, 20);
// console.log(rechargedAmount.color);





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