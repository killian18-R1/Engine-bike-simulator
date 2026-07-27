console.log("MotoSim démarrage");



let gear = "N";

let rpm = 1200;

let speed = 0;

let gas = false;

let brake = false;



const idleRPM = 1200;

const maxRPM = 14000;



const gearbox = {

1:0.35,

2:0.55,

3:0.75,

4:0.95,

5:1.15,

6:1.35

};





function updateDisplay(){


document.getElementById("rpm").innerHTML =
Math.round(rpm);


document.getElementById("speed").innerHTML =
Math.round(speed);


document.getElementById("gear").innerHTML =
gear;


}






// GAZ

let gasButton =
document.getElementById("gas");



gasButton.onpointerdown=function(){

gas=true;

};



gasButton.onpointerup=function(){

gas=false;

};



gasButton.onpointerleave=function(){

gas=false;

};







// FREIN


let brakeButton =
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






// PLUS


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



rpm=rpm-1000;


if(rpm<idleRPM){

rpm=idleRPM;

}


updateDisplay();


};







// MOINS


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



rpm=rpm-700;


if(rpm<idleRPM){

rpm=idleRPM;

}



updateDisplay();


};







// MOTEUR


setInterval(function(){



if(gas){


rpm +=300;


}

else{


rpm -=150;


}





if(rpm<idleRPM){

rpm=idleRPM;

}



if(rpm>maxRPM){

rpm=maxRPM;

}





if(gear!=="N"){



let target =
rpm * gearbox[gear] / 10;



if(speed<target){

speed+=1;

}

else{

speed-=0.2;

}


}

else{


speed=0;


}






if(brake){


speed-=3;


}




if(speed<0){

speed=0;

}




updateDisplay();



},50);







document.getElementById("status").innerHTML =
"STATUS : OK";


updateDisplay();
