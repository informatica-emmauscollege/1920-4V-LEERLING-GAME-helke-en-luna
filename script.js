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

var kogel1X = 600;    // x-positie van kogel
var kogel1Y = 180;    // y-positie van kogel
var kogel1Aanwezig = true;

var kogel2X = 400;
var kogel2Y = 320;
var kogel2Aanwezig = true;

var kogel3X = 1100;
var kogel3Y = 460;
var kogel3Aanwezig = true;

var kogel4X = 90;
var kogel4Y = 660;
var kogel4Aanwezig = true;

var eindeX = 1180;   // x-positie van einde
var eindeY = 600;   // y-positie van einde

var xStartBtn = 460; // x-positie startknop
var yStartBtn = 320; // y-positie startknop

var imgVuurmeisje;
var imgWaterjongen;

var xEindBtn = 460;
var yEindBtn = 320;





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
    text("Press ENTER to start",xStartBtn + 5,yStartBtn + 59);
    

    fill(250, 250, 37);
    textSize(80);

    // @ts-ignore
    text("Banana Peel", xStartBtn - 35, yStartBtn - 15); 

    //imgBananaPeal(50,600)

};

/*function preload() {
    imgBananapeal = loadImage('fotos/BananaPeal.png');
}*/
 
/**
 * Tekent het speelveld
 */
var tekenVeldAchter = function () {
    fill(229, 210, 247);
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
};


/**
 * Tekent het einde
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */

var tekenEinde = function(x, y) {
    fill(255, 150, 210);
    rect(eindeX, eindeY, 60, 80);
};


/**
 * Tekent de kogel of de bal
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenKogel = function(x, y) {
    fill(143, 219, 255);
     
    if (kogel1Aanwezig === true) {
      ellipse(600, 180, 20,20); //item1
    }
    if (kogel2Aanwezig === true) {
      ellipse(400, 320, 20,20); //item2
    }
    if (kogel3Aanwezig === true) {
     ellipse(1100, 460,20,20); //item3
    }
    if (kogel4Aanwezig === true) {
     ellipse(90, 660,20,20); //item4
    }
};


/**
 * Tekent de speler
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenSpeler1 = function(x, y) {
  fill("blue");
  ellipse(speler1X,speler1Y,50,50);
  /*image(imgVuurmeisje,80,150,60,80); */
};
/*
function preload() {
    imgVuurmeisje = loadImage('fotos/firegirl.png');
} */

var tekenSpeler2 = function(x, y) {
  fill("red");
  ellipse(speler2X,speler2Y,50,50);
 /* image(imgWaterjongen, 100, 150,50,50); */
};
/*
function preload() {
    imgWaterjongen = loadImage('fotos/waterboy.png');
}


/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */
var beweegEinde = function(x,y) {
    
};


/**
 * Updatet globale variabelen met positie van kogel of bal
 */

var beweegKogel = function() {
     if (speler1X > 575 && speler1X < 625 && speler1Y > 155 && speler1Y < 205) {

     }
}


/**
 * Kijkt wat de toetsen/muis etc zijn.
 * Updatet globale variabele spelerX en spelerY
 */
var beweegSpeler1 = function() {
 speler1Y = speler1Y + 5;

 if (speler1Y > 175 && speler1Y < 255 && speler1X < 1125) {
     speler1Y = 175;
     if (keyIsPressed === true) { 
         if (keyCode === 38){ // 38=up arrow
          speler1Y = 145;
         }
      } 
 }

 if (speler1Y > 315 && speler1Y < 395 && speler1X > 175) {
     speler1Y = 315;
     if (keyIsPressed === true) { 
         if (keyCode === 38) { // 38=up arrow
          speler1Y = 285;
         }
 }
}

 if (speler1Y > 455 && speler1Y < 535 && speler1X < 735) { 
     speler1Y = 455;
     if (keyIsPressed === true) { 
         if (keyCode === 38) { // 38=up arrow
          speler1Y = 425;
         }
 }
}

if (speler1Y > 455 && speler1Y < 535 && speler1X > width - 300) {
     speler1Y = 455;
     if (keyIsPressed === true) { 
         if (keyCode === 38) { // 32=up arrow
          speler1Y = 425;
         }
 }
} 

  if (speler1Y > 655 && speler1Y < 735) {
     speler1Y = 655;
     if (keyIsPressed === true) { 
         if (keyCode === 38) { // 38=uparrow
          speler1Y = 625;
         }
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
         if (keyCode === 87) { // 87=w
          speler2Y = 145;
         }
 }
 }

  if (speler2Y > 315 && speler2Y < 355 && speler2X > 175) {
     speler2Y = 315;
     if (keyIsPressed === true) { 
         if (keyCode === 87) { // 87=w
          speler2Y = 275;
         }
 }
 }
 
 if (speler2Y > 455 && speler2Y < 535 && speler2X < 735) {
     speler2Y = 455;
     if (keyIsPressed === true) { 
         if (keyCode === 87) { // 87=w
          speler2Y = 425;
         }
 }
}

if (speler2Y > 455 && speler2Y < 535 && speler2X > width - 350) {
     speler2Y = 455;
     if (keyIsPressed === true) { 
         if (keyCode === 87) { // 87=w
          speler2Y = 425;
         }
 }
} 

  if (speler2Y > 655 && speler2Y < 735) {
     speler2Y = 655;
     if (keyIsPressed === true) { 
         if (keyCode === 87) { // 87=w
          speler2Y = 625;
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
};

/**
 * Zoekt uit of de vijand is geraakt
 * @returns {boolean} true als vijand is geraakt
 */
var checkEindeGeraakt = function() {
    if (speler1X > 1180 && speler1X < 1240 && speler1Y > 600 && speler1Y < 680 && speler2X > 1180 && speler2X < 1240 && speler2Y > 600 && speler2Y < 680) {
        spelStatus = GAMEOVER;
    }
  return false;
}; 


var checkKogelGeraakt = function() {
    if(speler1X > 575 && speler1X < 625 && speler1Y > 155 && speler1Y < 205 || speler2X > 575 && speler2X < 625 && speler2Y > 155 && speler2Y < 205){ //kogel1 geraakt
       console.log("kogel1 geraakt");
       kogel1Aanwezig = false;
    }
    if(speler1X > 375 && speler1X < 425 && speler1Y > 295 && speler1Y < 335 || speler2X > 375 && speler2X < 425 && speler2Y > 295 && speler2Y < 335){ //kogel2 geraakt
        console.log("kogel2 geraakt");
       kogel2Aanwezig = false;
    }
    if(speler1X > 1075 && speler1X < 1125 && speler1Y > 435 && speler1Y < 485 || speler2X > 1075 && speler2X < 1125 && speler2Y > 435 && speler2Y < 485){ //kogel3 geraakt
        console.log("kogel3 geraakt");
       kogel3Aanwezig = false;
    }
    if(speler1X > 65 && speler1X < 115 && speler1Y > 635 && speler1Y < 685 || speler2X > 65 && speler2X < 115 && speler2Y > 635 && speler2Y < 685){ //kogel4 geraakt
       console.log("kogel4 geraakt");
       kogel4Aanwezig = false;
    }
}; 

var tekenEindscherm = function() {

    background(0, 0, 0);

    fill(250, 250, 255);
    textSize(40);
    // @ts-ignore
    text("Reload page to start over",xStartBtn - 50,yStartBtn + 60);

    fill(250, 250, 37);
    textSize(80);

    // @ts-ignore
    text("You did it!", xEindBtn + 3, yEindBtn - 15); 

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
};


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  switch (spelStatus) {
    case STARTSCHERM: 
        tekenStartscherm();
        if (keyIsDown(13)) {// 13=enter
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
          spelStatus = GAMEOVER;
      }
      
      if(checkKogelGeraakt()){

      }

      if (checkSpelerGeraakt()) {
        // leven eraf of gezondheid verlagen
        // eventueel: nieuwe speler maken
      }
    tekenEinde(eindeX, eindeY); 
      tekenKogel(kogel1X, kogel1Y);
      tekenSpeler1(speler1X, speler1Y);
      tekenSpeler2(speler2X, speler2Y);

      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      }
      break;
    case GAMEOVER:
        tekenEindscherm();
        
      break;
  }
};
