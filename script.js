/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";

/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */




/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const STARTSCHERM = 0;
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = STARTSCHERM;

var speler1X = 200; // x-positie van speler1
var speler1Y = 200; // y-positie van speler1

var speler2X = 400; // x-positie van speler2
var speler2Y = 400; // y-positie van speler2

var kogelX = 0;    // x-positie van kogel
var kogelY = 0;    // y-positie van kogel

var vijandX = 0;   // x-positie van vijand
var vijandY = 0;   // y-positie van vijand

var xStartBtn = 460 // x-positie startknop
var yStartBtn = 320 // y-positie startknop

var score = 0; // aantal behaalde punten





/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */

/**
 * Tekent het startscherm
 */
var tekenStartscherm = function () {


    background(0,0,0);
    

    fill(250, 180, 60);
    rect(xStartBtn,yStartBtn, 390,100);
    
    fill(250, 250, 255);
    textSize(40);
    // @ts-ignore
    text("Press SPACE to start",xStartBtn + 5,yStartBtn + 59);
    

    fill(250, 250, 37);
    textSize(80);

    // @ts-ignore
    text("Banana Peel", xStartBtn - 35, yStartBtn - 15); 

};
 
/**
 * Tekent het speelveld
 */
var tekenVeldAchter = function () {
    fill(130, 106, 78);
    rect(20, 20, width - 2 * 20, height - 2 * 20);

};

var tekenVeldVoor = function () {
    fill(0,0,0);
    rect(20,200, width - 100 , 40); //platform1
    rect(20,300, width - 300, 40); // platform2
    rect(70, 400, width - 400, 40); // platform3
}


/**
 * Tekent de vijand
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenVijand = function(x, y) {
    

};


/**
 * Tekent de kogel of de bal
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenKogel = function(x, y) {


};


/**
 * Tekent de speler
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenSpeler1 = function(x, y) {
  fill("white");
  ellipse(x, y, 50, 50);
};

var tekenSpeler2 = function(x, y) {
  fill("red");
  ellipse(x, y, 50, 50);
};


/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */
var beweegVijand = function() {
    
};


/**
 * Updatet globale variabelen met positie van kogel of bal
 */
var beweegKogel = function() {

};


/**
 * Kijkt wat de toetsen/muis etc zijn.
 * Updatet globale variabele spelerX en spelerY
 */
var beweegSpeler1 = function() {
 speler1Y = speler1Y + 5;

 if (speler1Y > 200) {
     speler1Y = 200;
 }


 if (keyIsDown(37)) { // 37=left arrow
        speler1X = speler1X - 5;
      } 
 if (keyIsDown(39)) { // 39=right arrow 
          speler1X = speler1X + 5;
      } 
 if (keyIsPressed === true) { 
         if (keyCode === 38) // 38=up arrow
          speler1Y = speler1Y - 10;
      } 
};

var beweegSpeler2 = function() {
 speler2Y = speler2Y + 5;

 if (speler2Y > 200) {
     speler2Y = 200;
 }


 if (keyIsDown(65)) { // 65=a
        speler2X = speler2X - 5;
      } 
 if (keyIsDown(68)) { // 68=d
          speler2X = speler2X + 5;
      }
 if (keyIsPressed === true) { 
         if (keyCode === 87) // 87=w
          speler2Y = speler2Y - 10;
      } 
};

/**
 * Zoekt uit of de vijand is geraakt
 * @returns {boolean} true als vijand is geraakt
 */
var checkVijandGeraakt = function() {

  return false;
};


/**
 * Zoekt uit of de speler is geraakt
 * bijvoorbeeld door botsing met vijand
 * @returns {boolean} true als speler is geraakt
 */
var checkSpelerGeraakt = function() {
    
  return false;
};


/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function() {
    
  return false;
};


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background(0,0,0);
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  switch (spelStatus) {
    case STARTSCHERM:
        tekenStartscherm();
        if (keyIsDown(32)) {// 32=spatie
           spelStatus = SPELEN;
        }
        break;
    case SPELEN:
        tekenVeldAchter();
        tekenVeldVoor();
      beweegVijand();
      beweegKogel();
      beweegSpeler1();
      beweegSpeler2();

       

      
      if (checkVijandGeraakt()) {
        // punten erbij
        // nieuwe vijand maken
      }
      
      if (checkSpelerGeraakt()) {
        // leven eraf of gezondheid verlagen
        // eventueel: nieuwe speler maken
      }
    tekenVijand(vijandX, vijandY);
      tekenKogel(kogelX, kogelY);
      tekenSpeler1(speler1X, speler1Y);
      tekenSpeler2(speler2X, speler2Y);

      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      }
      break;
  }
}
