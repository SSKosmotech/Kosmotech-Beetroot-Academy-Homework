"use strict";var circ=new Circle(60);console.log("Get Radius before set: ".concat(circ.getRadius)),circ.setRadius="8",console.log("Get Radius after Set: ".concat(circ.getRadius)),console.log("Get Diametr: ".concat(circ.getDiametr)),circ.squareCircle(),circ.lineWidthCircle(),circ.showGetRadius(),circ.showDiametr(),circ.showSquareCircle(),circ.showLineWidthCircle(),circ.showCircle();var marker=new Marker("blue",100);console.log(marker),marker.showColor(),marker.showPercent();var txt="Думи мої, думи мої, Лихо мені з вами! Нащо стали на папері Сумними рядами?.. Чом вас вітер не розвіяв В степу, як пилину? Чом вас лихо не приспало, Як свою дитину?.. Бо вас лихо на світ на сміх породило, Поливали сльози... Чом не затопил";marker.getAndShow(txt),marker.showPercenAfter(),marker.showBarAfter(),document.getElementById("reCharged").addEventListener("click",function(){var e=new Recharge("blue",3);e.reCharged(),e.showPercenAfter(),e.showBarAfter()});var list=[new Employee({name:"Bob",position:"Manager",age:30}),new Employee({name:"John",position:"High Manager",age:35}),new Employee({name:"Ann",position:"Admin",age:28})],myTable=new EmpTable(list);myTable.viewHtml("emp_tbody");