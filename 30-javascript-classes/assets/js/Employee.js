class Employee {
    constructor(empl){
        this.name = empl.name;
        this.position = empl.position;
        this.age = empl.age;
    }
}


// const empl1 = new Employee({
//     name: 'Bob', 
//     position: 'Manager', 
//     age: 30});
// 
// const empl2 = new Employee({name: 'John', position: 'High Manager', age: 35});


class EmpTable {
    constructor(empList){
        this.empList = empList;
    }
    getHtml(){
        let html = '';
        this.empList.forEach(element => {
            html += `
                <tr>
                    <td>${element.name}</td>
                    <td>${element.position}</td>
                    <td>${element.age}</td>
                </tr>
            `;
        });
        return html;
    }
    viewHtml(elementId){
        document.getElementById(elementId).innerHTML = this.getHtml();
    }
}
