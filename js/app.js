'use strict';

let objectarry = [];
let hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
let container = document.getElementById('divmain1');
let tableEl = document.createElement('table');
container.appendChild(tableEl);

function Place(name, min, max, avrgcook) {
    this.name = name;
    this.min = min;
    this.max = max,
    this.avrgcook = avrgcook;
    this.cooknum = [];
    this.custnum = 0;
    objectarry.push(this);

}


Place.prototype.getcustnum = function (min, max) {
    this.custnum = Math.floor(Math.random() * (max - min + 1) + min);

}


Place.prototype.cooknumf = function () {
    let m = 1;
    let total = 0;
    for (let i = 0; i < 14; i++) {

        this.getcustnum(this.min, this.max);
        let cooknumg = Math.floor(this.avrgcook * this.custnum);

        total = total + cooknumg
        this.cooknum.push(cooknumg);
    }
    this.total = total
}




function imagef() {
    let hdivE= document.getElementById('divheader')
    let myImage = new Image(100, 33);
    myImage.src = 'img/logo.png';
    hdivE.appendChild(myImage);
}
imagef();


Place.prototype.render = function () {
    let trEl2 = document.createElement('tr')
    tableEl.appendChild(trEl2)
    let tdE1 = document.createElement('td')
    tdE1.textContent = this.name
    trEl2.appendChild(tdE1)

    for (let i = 0; i < hour.length; i++) {
        let tdEl = document.createElement('td')
        tdEl.textContent = this.cooknum[i]
        trEl2.appendChild(tdEl)
    }
    let tdE2 = document.createElement('td')
    tdE2.textContent = this.total
    trEl2.appendChild(tdE2)
}


function createTableHeader() {
    let trEl1 = document.createElement('tr');
    tableEl.appendChild(trEl1);

    let thEl1 = document.createElement('th');
    thEl1.textContent = 'Name';
    trEl1.appendChild(thEl1);

    for (let i = 0; i < hour.length; i++) {
        let thEl = document.createElement('th');
        thEl.textContent = hour[i];
        trEl1.appendChild(thEl);
    }
    let thEl2 = document.createElement('th');
    thEl2.textContent = 'Total for day';
    trEl1.appendChild(thEl2);
}

createTableHeader();

function help() {

    for (let i = 0; i < objectarry.length; i++) {
        objectarry[i].getcustnum(objectarry[i][1], objectarry[i][2]);
        objectarry[i].cooknumf();
        objectarry[i].render();
    }

}
let Seattle = new Place('Seattle', 23, 65, 6.3);
let Tokyo = new Place('Tokyo', 3, 24, 1.2);
let Dubai = new Place('Dubai', 11, 38, 3.7);
let Paris = new Place('Paris', 20, 38, 2.3);
let Lima = new Place('Lima', 2, 16, 4.6);

help()



















function createFooter() {
    let tfoot = document.createElement('tfoot');
     tableEl.appendChild(tfoot)
    let rfootEl = document.createElement('tr');
    let tdEl = document.createElement('td');
    tdEl.textContent = 'Totals';
    rfootEl.appendChild(tdEl);
    tfoot.appendChild(rfootEl);
    tableEl.appendChild(tfoot);
    let megaTotal = 0;

    for (let h = 0; h < hour.length; h++) {
        let tdEl = document.createElement('td');
        let sum = 0;

        for (let s = 0; s < objectarry.length; s++) {

            sum = Number(sum + objectarry[s].cooknum[h])
        }
        megaTotal += sum;
        tdEl.textContent = sum;
        rfootEl.appendChild(tdEl);
       

    }
    let totalTdEl = document.createElement('td');
    totalTdEl.textContent = megaTotal;
    rfootEl.appendChild(totalTdEl);
  

}
createFooter();




let fEl = document.getElementById('myform');
myform.addEventListener('submit', addNewplace);

function addNewplace(event) {
    event.preventDefault();
    let name = event.target.placename.value;
    let min = event.target.min.value;
    let max = event.target.max.value;
    let average1 = event.target.avrage1.value;
    let b = new Place(name, min, max, average1);

    b.getcustnum(min, max);
    b.cooknumf();
    b.render();
    // let rowscount = tableEl.rows.length
    // for (let i = objectarry.length; i < rowscount; i++) {
    //     tableEl.deleteRow(i);     //لانه في صف للعنوان
    //     rowscount--
    // }
    tableEl.deleteTFoot();
    createFooter();



}


