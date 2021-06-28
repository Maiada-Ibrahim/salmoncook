
'use strict';
let placesalot = [];
let where = [];

function Place(name, min, max, avrgcook) {
    this.name = name;
    this.min = min;
    this.max = max,
        this.avrgcook = avrgcook;
    this.cooknum = [];
    this.custnum = 0;
    this.viwe = [];
    this.image = 'img/salmonpic.png';
    this.titlewebsie = 'Salamon Cookies';
    this.namelist = 'list of our working  on ';
    placesalot.push(this.viwe);
    where.push(this);

}


Place.prototype.getcustnum = function (min, max) {
    this.custnum = Math.floor(Math.random() * (max - min + 1) + min);


}


Place.prototype.cooknumf = function () {
    let x = 6; // first 6 a hour
    let m = 1;
    let total = 0;
    let w = '';  // string to have the contant of 6 hour
    for (let i = 0; i < 14; i++) {

        this.getcustnum(this.min, this.max);
        let a = this.avrgcook * this.custnum;
        a = Math.floor(a);
        total = total + a
        this.cooknum.push(a);


        if (i <= 6) {

            w = ` ${a} `
            //console.log(w)
            this.viwe.push(w);

            x = x + 1;

        } else {
            w = ` ${a} `
            // console.log(w);
            this.viwe.push(w);
            m = m + 1;
        }

    }
    w = ` ${total} `
    this.viwe.push(w);


}




Place.prototype.render = function () {
    let divEl = document.getElementById('logo');
    let he1 = document.createElement('h1');
    divEl.appendChild(he1);
    he1.textContent = this.titlewebsie;


    let imgEl = document.createElement('img');
    imgEl.setAttribute('src', this.image);
    divEl.appendChild(imgEl);
}


let container = document.getElementById('divmain1');
let tableEl = document.createElement('table');
container.appendChild(tableEl);

function createTableHeader() {
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);

    let thEl1 = document.createElement('th');
    thEl1.textContent = 'Name';
    trEl.appendChild(thEl1);

    let thEl2 = document.createElement('th');
    thEl2.textContent = '6am';
    trEl.appendChild(thEl2);

    let thEl3 = document.createElement('th');
    thEl3.textContent = '7am';
    trEl.appendChild(thEl3);

    let thEl4 = document.createElement('th');
    thEl4.textContent = '8am';
    trEl.appendChild(thEl4);

    let thEl5 = document.createElement('th');
    thEl5.textContent = '9am';
    trEl.appendChild(thEl5);

    let thEl6 = document.createElement('th');
    thEl6.textContent = '10am';
    trEl.appendChild(thEl6);

    let thEl7 = document.createElement('th');
    thEl7.textContent = '11am';
    trEl.appendChild(thEl7);

    let thEl8 = document.createElement('th');
    thEl8.textContent = '12am';
    trEl.appendChild(thEl8);

    let thEl9 = document.createElement('th');
    thEl9.textContent = '1pm';
    trEl.appendChild(thEl9);

    let thEl10 = document.createElement('th');
    thEl10.textContent = '2pm';
    trEl.appendChild(thEl10);

    let thEl11 = document.createElement('th');
    thEl11.textContent = '3pm';
    trEl.appendChild(thEl11);

    let thEl12 = document.createElement('th');
    thEl12.textContent = '4pm';
    trEl.appendChild(thEl12);

    let thEl13 = document.createElement('th');
    thEl13.textContent = '5pm';
    trEl.appendChild(thEl13);

    let thEl14 = document.createElement('th');
    thEl14.textContent = '6pm';
    trEl.appendChild(thEl14);

    let thEl15 = document.createElement('th');
    thEl15.textContent = '7pm';
    trEl.appendChild(thEl15);

    let thEl16 = document.createElement('th');
    thEl16.textContent = '    tot-day';
    trEl.appendChild(thEl16);
}
createTableHeader();


let seattle = new Place('Seattle', 23, 65, 6.3);
seattle.getcustnum(23, 65);
seattle.cooknumf();
seattle.render();

let tokyo = new Place('Tokyo', 3, 24, 1.2);
tokyo.getcustnum(3, 24);
tokyo.cooknumf();



let Dubai = new Place('Dubai', 11, 38, 3.7);
Dubai.getcustnum(11, 38);
Dubai.cooknumf();


let Paris = new Place('Paris', 20, 38, 2.3);
Paris.getcustnum(20, 38);
Paris.cooknumf();

let Lima = new Place('Lima', 2, 16, 4.6);
Lima.getcustnum(2, 16);
Lima.cooknumf();














for (let i = 0; i < placesalot.length; i++) {

    let trEl = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.textContent = where[i].name;

    let td2 = document.createElement('td');
    td2.textContent = placesalot[i][0];

    let td3 = document.createElement('td');
    td3.textContent = placesalot[i][1];

    let td4 = document.createElement('td');
    td4.textContent = placesalot[i][2];

    let td5 = document.createElement('td');
    td5.textContent = placesalot[i][3];

    let td6 = document.createElement('td');
    td6.textContent = placesalot[i][4];

    let td7 = document.createElement('td');
    td7.textContent = placesalot[i][5];

    let td8 = document.createElement('td');
    td8.textContent = placesalot[i][6];

    let td9 = document.createElement('td');
    td9.textContent = placesalot[i][7];

    let td10 = document.createElement('td');
    td10.textContent = placesalot[i][8];

    let td11 = document.createElement('td');
    td11.textContent = placesalot[i][9];

    let td12 = document.createElement('td');
    td12.textContent = placesalot[i][10];

    let td13 = document.createElement('td');
    td13.textContent = placesalot[i][11];

    let td14 = document.createElement('td');
    td14.textContent = placesalot[i][12];

    let td15 = document.createElement('td');
    td15.textContent = placesalot[i][13];

    let td16 = document.createElement('td');
    td16.textContent = placesalot[i][14];

    let td17 = document.createElement('td');
    td17.textContent = placesalot[i][15];








    trEl.appendChild(td1);
    trEl.appendChild(td2);
    trEl.appendChild(td3);
    trEl.appendChild(td4);
    trEl.appendChild(td5);
    trEl.appendChild(td5);
    trEl.appendChild(td6);
    trEl.appendChild(td7);
    trEl.appendChild(td8);
    trEl.appendChild(td9);
    trEl.appendChild(td10);
    trEl.appendChild(td11);
    trEl.appendChild(td12);
    trEl.appendChild(td13);
    trEl.appendChild(td14);
    trEl.appendChild(td15);
    trEl.appendChild(td16);



    tableEl.appendChild(trEl);
}





let d = []
let m=0;
let totperhour = function () {
    
    for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 5; j++) {
             m = where[j].placesalot[i]
            d.push(m)
        }

    }




}
console.log(placesalot[0])
let trEl = document.createElement('tr');
    let td18 = document.createElement('td');
    td18.textContent = 'total';
    trEl.appendChild(td18);

    let td19 = document.createElement('td');
    td19.textContent =  d[0];
    trEl.appendChild(td19);

    tableEl.appendChild(trEl);
