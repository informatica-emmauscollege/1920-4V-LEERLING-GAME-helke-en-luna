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
var speler1Y = 175; // y-positie van speler1

var speler2X = 400; // x-positie van speler2
var speler2Y = 175; // y-positie van speler2

var kogelX = 0;    // x-positie van kogel
var kogelY = 0;    // y-positie van kogel

var eindeX = 1000;   // x-positie van vijand
var eindeY = 0;   // y-positie van vijand

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
    rect(0,0, width, 40); //platformlvl0

    rect(20,200, width - 200 , 40); //platformlvl1

    rect(200,340, width, 40); // platformlvl2

    rect(20, 480, width - 590, 40); // platformlvl3
    rect(800, 480, 690, 40 ); // platformlvl3

    rect(0,680, width, 40); //platformlvl4

    rect(0,0,40, height); //zijkantLinks
    rect(1240, 0, 40, height); //zijkantRechts
}


/**
 * Tekent het einde
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenEinde = function(x, y) {
    rect(eindeX, eindeY, 60, 80);

};


/**
 * Tekent de kogel of de bal
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenKogel = function(x, y) {
    fill(143, 219, 255);
    ellipse(600, 180, 20,20); //item1

    ellipse(400, 320, 20,20); //item2

    ellipse(1100,460,20,20); //item3

    ellipse(90,660,20,20); //item4
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
var beweegEinde = function(x,y) {
    
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

 if (speler1Y > 175 && speler1Y < 255 && speler1X < 1125) {
     speler1Y = 175;
     if (keyIsPressed === true) { 
         if (keyCode === 38) // 38=up arrow
          speler1Y = 165;
      } 
 }

 if (speler1Y > 315 && speler1Y < 395 && speler1X > 175) {
     speler1Y = 315;
     if (keyIsPressed === true) { 
         if (keyCode === 38) // 38=up arrow
          speler1Y = 295;
 }

 if (speler1Y > 455 && speler1Y < 535) {
     speler1Y = 455;
     if (keyIsPressed === true) { 
         if (keyCode === 38) // 38=up arrow
          speler1Y = 435;
 }
  if (speler1Y > 685) {
     speler1Y = 685;
     if (keyIsPressed === true) { 
         if (keyCode === 38) // 38=up arrow
          speler1Y = 665;
 }
 }
 
 // speler blijft in het speelveld

  if (speler1X < 65) {
      speler1X = 65;
  }
  if (speler1X > 1215) {
      speler1X = 1215;
  }

 // speler bewegen met keys

 if (keyIsDown(37)) { // 37=left arrow
        speler1X = speler1X - 5;
      } 
 if (keyIsDown(39)) { // 39=right arrow 
          speler1X = speler1X + 5;
      } 
};

var beweegSpeler2 = function() {
 speler2Y = speler2Y + 5;

  if (speler2Y > 175 && speler2Y < 215 && speler2X < 1100) {
     speler2Y = 175;
     if (keyIsPressed === true) { 
         if (keyCode === 38) // 38=up arrow
          speler2Y = 165;
 }
 }

  if (speler2Y > 315 && speler2Y < 355 && speler2X > 175) {
     speler2Y = 315;
     if (keyIsPressed === true) { 
         if (keyCode === 38) // 38=up arrow
          speler2Y = 295;
 }
 }
 
 if (speler2Y > 455) {
     speler2Y = 455;
     if (keyIsPressed === true) { 
         if (keyCode === 38) // 38=up arrow
          speler2Y = 435;
 }

 if (speler2Y > 685) {
     speler2Y = 685;
     if (keyIsPressed === true) { 
         if (keyCode === 38) // 38=up arrow
          speler2Y = 665;
 }
 }

 }

 // speler blijft in het speelveld

 if (speler2X < 65) {
      speler2X = 65;
  }
  if (speler2X > 1215) {
      speler2X = 1215;
  }

 // speler bewegen met keys

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
var checkEindeGeraakt = function() {

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
      beweegEinde();
      beweegKogel();
      beweegSpeler1();
      beweegSpeler2();

       

      
      if (checkEindeGeraakt()) {
        // punten erbij
        // nieuwe vijand maken
      }
      
      if (checkSpelerGeraakt()) {
        // leven eraf of gezondheid verlagen
        // eventueel: nieuwe speler maken
      }
    tekenEinde(vijandX, vijandY);
      tekenKogel(kogelX, kogelY);
      tekenSpeler1(speler1X, speler1Y);
      tekenSpeler2(speler2X, speler2Y);

      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      }
      break;
  }
}
