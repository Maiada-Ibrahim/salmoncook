let place = {

    max: 1,
    min: 1,
    avrgcook: 1,
    cooknum: [],
    custnum: 0,
    viwe: [],
    image: 'img/salmonpic.png',
    titlewebsie: 'Salamon Cookies',
    namelist: 'list of our working  on ',


    getcustnum: function (min, max) {
        this.custnum = Math.floor(Math.random() * (max - min + 1) + min);

    },




    cooknumf: function () {
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


    },

    render: function () {
        let divEl = document.getElementById('logo');
        let he1 = document.createElement('h1');
        divEl.appendChild(he1);
        he1.textContent = this.titlewebsie;


        let imgEl = document.createElement('img');
        imgEl.setAttribute('src', this.image);
        divEl.appendChild(imgEl);
    },

    render2: function () {

        let articleEl = document.createElement('article');
        divmain1.appendChild(articleEl);

        let h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.namelist;


        let ulEl = document.createElement('ul');
        for (let i = 0; i < this.viwe.length; i++) {
            let liEl = document.createElement('li');
            liEl.textContent = this.viwe[i];
            ulEl.appendChild(liEl);
        }
        articleEl.appendChild(ulEl);





    },

}



// place.getcustnum(23, 65)
// //console.log(place.custnum)
// place.cooknumf()
// //console.log(place.cooknum)
// //console.log(place.viwe)
// place.render()










let pl = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima']
let maxp = [65, 24, 38, 38, 16]
let minp = [23, 3, 11, 20, 2]
let av =   [6.3, 1.2, 3.7, 2.3, 4.6]
place.render();
for (let i = 0; i < pl.length; i++) {
    place.namelist = 'list of our working  on  ' + pl[i]
    place.max = maxp[i]
    place.min = minp[i]
    place.avrgcook = av[i];
    place.getcustnum(minp[0], maxp[0])
    //console.log(place.custnum)
    place.cooknumf()
    //console.log(place.cooknum)
    //console.log(place.viwe)
    place.render2()
    place.viwe = []
    place.cooknum = []
    place.custnum = 0

}


