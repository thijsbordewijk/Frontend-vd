// SWIPER JAVASCRIPT
console.log("howdy");

// swiper options
var options = {
  direction: 'horizontal', 
  loop: 'true', 
  speed: 500,
  cssMode: true, 

  // pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  },
};  

const swiper = new Swiper('.swiper-container', options);
// EIND SWIPER JAVASCRIPT

// filter & sort js - werkt niet?
var options = {
  valueNames: [ 'name' ]
};
var filmList = new List('list', options);

// EIGEN CODE //

// hoofd variabelen
var filmsLijst = document.querySelector("ul:first-of-type");
var favoSection = document.querySelector("section article");
var favoLijst = document.querySelector("section article ul");
var favoSectionButton = document.querySelector("section button:last-of-type")

// variabelen & functie per filmelement
var film1 = document.querySelector("main ul li:nth-child(1) article h3");
var filmButton1 = document.querySelector("main ul li:nth-child(1) button");

  filmButton1.addEventListener("click", function() {
    var clone1 = film1.cloneNode(true); 
    favoLijst.appendChild(clone1); 
  });

var film2 = document.querySelector("main ul li:nth-child(2) article h3");
var filmButton2 = document.querySelector("main ul li:nth-child(2) button");

  filmButton2.addEventListener("click", function() {
    var clone2 = film2.cloneNode(true); 
    favoLijst.appendChild(clone2); 
  });

var film3 = document.querySelector("main ul li:nth-child(3) article h3");
var filmButton3 = document.querySelector("main ul li:nth-child(3) button");

  filmButton3.addEventListener("click", function() {
    var clone3 = film3.cloneNode(true); 
    favoLijst.appendChild(clone3); 
  });

var film4 = document.querySelector("main ul li:nth-child(4) article h3");
var filmButton4 = document.querySelector("main ul li:nth-child(4) button");

  filmButton4.addEventListener("click", function() {
    var clone4 = film4.cloneNode(true); 
    favoLijst.appendChild(clone4); 
  });

var film5 = document.querySelector("main ul li:nth-child(5) article h3");
var filmButton5 = document.querySelector("main ul li:nth-child(5) button");

  filmButton5.addEventListener("click", function() {
    var clone5 = film5.cloneNode(true); 
    favoLijst.appendChild(clone5); 
  });

var film6 = document.querySelector("main ul li:nth-child(6) article h3");
var filmButton6 = document.querySelector("main ul li:nth-child(6) button");

  filmButton6.addEventListener("click", function() {
    var clone6 = film6.cloneNode(true); 
    favoLijst.appendChild(clone6); 
  });

// Functie openen favorieten
favoSection.classList.add("favoUnclicked");

// functies met toetsenbord functionaliteiten
document.onkeydown = (e) => {

var activeFilmName = document.querySelector(".swiper-slide-active article h3");
var activeClone = activeFilmName.cloneNode(true); 

  e = e || window.event;
  if (e.key === 'ArrowUp') {
    favoSection.classList.toggle("favoClicked");
  } else if (e.key === 'ArrowDown') {
        favoLijst.appendChild(activeClone); 
        console.log(activeFilmName.textContent);
    };
};

favoSectionButton.addEventListener("click", function() {
  favoSection.classList.toggle("favoClicked");
});

