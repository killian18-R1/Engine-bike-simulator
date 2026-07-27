console.log("MotoSim V0.1.0-a5 chargé");



let gear = "N";

let rpm = 1200;

let speed = 0;


let gas = false;

let brake = false;


let limiter = false;



const idleRPM = 1200;

const maxRPM = 14000;



// vitesse maximale par rapport

const maxSpeed = {

1:90,

2:130,

3:170,

4:220,

5:260,

6:300

};





// ======================
// COMMANDES GAZ
// ======================


const gasButton = document.getElementById("gas");



gasButton.onpointerdown=function(){

gas=true;

};



gasButton.onpointerup=function(){

gas=false;

};



gasButton.onpointerleave=function(){

gas=false;

};






// ======================
// FREIN
// ======================


const brakeButton =
document.getElementById("brake");



brakeButton.onpointerdown=function(){

brake=true;

};



brakeButton.onpointerup=function(){

brake=false;

};



brakeButton.onpointerleave=function(){

brake=false;

};






// ======================
// RAPPORT +
 // ======================


document.getElementById("plus").onclick=function(){


if(gas){

return;

}



if(gear==="N"){

gear=1;

}

else if(gear<6){

gear++;

}



rpm -= 2500;



if(rpm<idleRPM){

rpm=idleRPM;

}



updateDisplay();


};







// ======================
// RAPPORT -
 // ======================


document.getElementById("minus").onclick=function(){


if(gas){

return;

}



if(gear===1){

gear="N";

}

else if(gear>1){

gear--;

}



rpm-=1500;



if(rpm<idleRPM){

rpm=idleRPM;

}



updateDisplay();


};







// ======================
// MOTEUR
// ======================


setInterval(function(){



// accélération moteur


if(gas && !limiter){


rpm += 350;


}



// décélération


if(!gas){


rpm -=180;


}





// ralenti


if(rpm < idleRPM){

rpm = idleRPM;

}






// rupteur


if(rpm >= maxRPM){


rpm=maxRPM;


limiter=true;


}





if(rpm < 13000){

limiter=false;

}








// vitesse


if(gear !== "N"){



let targetSpeed =
(rpm / maxRPM) * maxSpeed[gear];




if(speed < targetSpeed){

speed +=0.8;

}

else if(speed > targetSpeed){

speed -=0.3;

}



}

else{


speed=0;


}







// frein


if(brake){


speed-=3;


}




if(speed<0){

speed=0;

}




updateDisplay();



},50);







function updateDisplay(){


document.getElementById("rpm").innerHTML =
Math.round(rpm);



document.getElementById("speed").innerHTML =
Math.round(speed);



document.getElementById("gear").innerHTML =
gear;


}




document.getElementById("status").innerHTML =
"STATUS : OK";


updateDisplay();
