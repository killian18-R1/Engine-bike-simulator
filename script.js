let gear = "N";

let rpm = 1200;

let speed = 0;

let gas = false;

let brake = false;


// Limites moteur

const idleRPM = 1200;

const maxRPM = 14000;



// Bouton gaz appuyé

document.getElementById("gas").onmousedown = function(){

    gas = true;

};


// Relâchement gaz

document.getElementById("gas").onmouseup = function(){

    gas = false;

};


// Compatibilité téléphone

document.getElementById("gas").ontouchstart = function(e){

    e.preventDefault();

    gas = true;

};


document.getElementById("gas").ontouchend = function(){

    gas = false;

};





// Passage vitesse +

document.getElementById("plus").onclick=function(){


    if(gear === "N"){

        gear = 1;

    }

    else if(gear < 6){

        gear++;

    }


    updateDisplay();

};




// Passage vitesse -

document.getElementById("minus").onclick=function(){


    if(gear === 1){

        gear="N";

    }

    else if(gear > 1){

        gear--;

    }


    updateDisplay();

};






// Frein

document.getElementById("brake").onmousedown=function(){

    brake=true;

};


document.getElementById("brake").onmouseup=function(){

    brake=false;

};



document.getElementById("brake").ontouchstart=function(){

    brake=true;

};


document.getElementById("brake").ontouchend=function(){

    brake=false;

};





// Boucle moteur

setInterval(function(){



// Gestion gaz

if(gas){


    rpm += 250;


}
else{


    rpm -= 150;


}



// Retour ralenti

if(rpm < idleRPM){

    rpm = idleRPM;

}



// Rupteur

if(rpm > maxRPM){

    rpm=maxRPM;

}





// Si une vitesse est engagée

if(gear !== "N"){


    let ratio = gear;


    speed = rpm / (80 * ratio);



}


// Neutre

else{


    speed = 0;


}





// Frein

if(brake){


    speed -= 5;


    if(speed < 0){

        speed = 0;

    }


}





updateDisplay();



},50);







function updateDisplay(){


document.getElementById("rpm").innerHTML=Math.round(rpm);


document.getElementById("speed").innerHTML=Math.round(speed);


document.getElementById("gear").innerHTML=gear;


}
