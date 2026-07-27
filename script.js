console.log("MotoSim V0.1.0-a6");


// =======================
// PARAMETRES MOTO
// =======================


const bike = {


mass:250,


maxTorque:112,


idleRPM:1200,


maxRPM:14000,


wheelRadius:0.31,


finalDrive:2.9


};



// rapports

const gearbox = {

1:2.6,

2:1.9,

3:1.5,

4:1.25,

5:1.1,

6:0.95

};




// =======================
// VARIABLES
// =======================


let gear="N";


let rpm=1200;


let speed=0;


let gas=false;


let brake=false;



// =======================
// COMMANDES
// =======================



let gasButton=document.getElementById("gas");


gasButton.onpointerdown=function(){

gas=true;

};


gasButton.onpointerup=function(){

gas=false;

};


gasButton.onpointerleave=function(){

gas=false;

};




let brakeButton=document.getElementById("brake");


brakeButton.onpointerdown=function(){

brake=true;

};


brakeButton.onpointerup=function(){

brake=false;

};


brakeButton.onpointerleave=function(){

brake=false;

};




// =======================
// RAPPORTS
// =======================


document.getElementById("plus").onclick=function(){


if(gas)return;


if(gear==="N")

gear=1;


else if(gear<6)

gear++;



rpm-=2000;


if(rpm<1200)

rpm=1200;


};



document.getElementById("minus").onclick=function(){


if(gas)return;


if(gear===1)

gear="N";


else if(gear>1)

gear--;



rpm-=1500;


if(rpm<1200)

rpm=1200;


};






// =======================
// PHYSIQUE
// =======================


setInterval(function(){



let acceleration=0;



// Couple moteur selon RPM

let torque=0;



if(gas){


let rpmFactor=rpm/bike.maxRPM;


torque=
bike.maxTorque *
(1-rpmFactor*0.5);



}




// Force moteur


if(gear!=="N"){


let force =
torque *
gearbox[gear] *
bike.finalDrive;



acceleration =
force / bike.mass / 3;



}





// résistance air


let airResistance =
0.00035 *
speed *
speed;




// frein


if(brake){

acceleration-=5;

}




// moteur


speed += acceleration;




// résistance


speed -= airResistance;




// vitesse négative interdite


if(speed<0)

speed=0;






// calcul RPM mécanique


if(gear!=="N"){


rpm =
1200 +
(speed /
(gearbox[gear]*2))
*100;



}

else{


if(gas)

rpm+=300;

else

rpm-=150;


}






// limites


if(rpm<1200)

rpm=1200;


if(rpm>14000)

rpm=14000;





update();


},50);






function update(){


document.getElementById("speed").innerHTML=
Math.round(speed);


document.getElementById("rpm").innerHTML=
Math.round(rpm);


document.getElementById("gear").innerHTML=
gear;


}



document.getElementById("status").innerHTML=
"STATUS : OK";


update();
