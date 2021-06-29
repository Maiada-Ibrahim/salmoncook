
'use strict';
let placesalot = [];

function Place( name,min,max,avrgcook){
this.name=name;
this.min=min;
   this.max=max,
    this.avrgcook=avrgcook;
   this.cooknum = [];
   this.custnum = 0;
   this.viwe =[];
   this.image = 'img/salmonpic.png';
  this.titlewebsie= 'Salamon Cookies';
  this.namelist= 'list of our working  on ' ;
    placesalot.push(this);

}


Place.prototype.getcustnum = function (min, max) {
    this.custnum = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(this.custnum)

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

            w = `${x} am : ${a} cookies`
            //console.log(w)
            this.viwe.push(w);

            x = x + 1;

        } else {
            w = `${m} pm : ${a} cookies`
            // console.log(w);
            this.viwe.push(w);
            m = m + 1;
        }

    }
    w = `total : ${total} cookies`
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

   Place.prototype.render2 = function () {

        let articleEl = document.createElement('article');
        divmain1.appendChild(articleEl);

        let h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.namelist + this.name;


        let ulEl = document.createElement('ul');
        for (let i = 0; i < this.viwe.length; i++) {
            let liEl = document.createElement('li');
            liEl.textContent = this.viwe[i];
            ulEl.appendChild(liEl);
        }
        articleEl.appendChild(ulEl);





    }
    let seattle = new Place('Seattle',23,65,6.3 );
    seattle.getcustnum(23,65);
    seattle.cooknumf();
    seattle.render2();
    seattle.render();
    let tokyo = new Place('Tokyo',23,65,6.3 );
    tokyo.getcustnum(23,65);
    tokyo.cooknumf();
    tokyo.render2();
    let tokyo = new Place('Tokyo',23,65,6.3 );
    tokyo.getcustnum(23,65);
    tokyo.cooknumf();
    tokyo.render2();
   




















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
    }


















    body{
        background-color:teal;
    }
    
    #logo img   {
   width: 30vh;
   
   
   }
   
   h1 {
       position: static;
       top: 12vh;
   }
   
   #part2 {
   display:block;
   
   text-align: center;
   }
   ul {
       list-style-type:circle;
         margin: 30px;
     }
     h2 {
         color: brown;
         font-family: 'Viaoda Libre', cursive;
         font-size: 5vh;
         text-align: center;
         margin:10vh;
   
             
         }
         table
         tr,
         
         td {
           border: 1px solid;
       border-color: white;
         }
         
     