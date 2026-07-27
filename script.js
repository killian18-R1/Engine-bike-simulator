console.log("MotoSim V0.1.0-a7.2");


// ==========================
// PARAMETRES MOTO
// ==========================


const bike = {

mass:250,

maxTorque:112,

idleRPM:1200,

maxRPM:14000,

wheelRadius:0.34,

finalDrive:2.8

};



// Rapports boîte R1 simplifiés

const gearbox = {

1:2.6,

2:2.0,

3:1.6,

4:1.3,

5:1.1,

6:0.95

};




// ==========================
// VARIABLES
// ==========================


let gear="N";

let speed=0; // km/h

let rpm=1200;


let gas=false;

let brake=false;


let shifterUp=false;

let shifterDown=false;


let shiftDelay=0;





// ==========================
// COMMANDES
// ==========================


const gasBtn=document.getElementById("gas");

gasBtn.onpointerdown=()=>gas=true;

gasBtn.onpointerup=()=>gas=false;

gasBtn.onpointerleave=()=>gas=false;





const brakeBtn=document.getElementById("brake");

brakeBtn.onpointerdown=()=>brake=true;

brakeBtn.onpointerup=()=>brake=false;

brakeBtn.onpointerleave=()=>brake=false;





// ==========================
// SHIFTERS
// ==========================


const upBtn=document.getElementById("shiftUp");

const downBtn=document.getElementById("shiftDown");



upBtn.onclick=()=>{

shifterUp=!shifterUp;

updateButtons();

};



downBtn.onclick=()=>{

shifterDown=!shifterDown;

updateButtons();

};





function updateButtons(){


upBtn.innerHTML =
shifterUp ?
"🟢 SHIFTER UP ON" :
"🔴 SHIFTER UP OFF";


downBtn.innerHTML =
shifterDown ?
"🟢 SHIFTER DOWN ON" :
"🔴 SHIFTER DOWN OFF";



upBtn.className =
shifterUp ?
"shifter-on" :
"shifter-off";


downBtn.className =
shifterDown ?
"shifter-on" :
"shifter-off";


}






// ==========================
// BOITE
// ==========================



document.getElementById("plus").onclick=function(){


if(gear==="N"){

gear=1;

return;

}



if(gear>=6)

return;



if(gas && !shifterUp)

return;



// quickshift

if(shifterUp && gas){

shiftDelay=2;

}



gear++;



};







document.getElementById("minus").onclick=function(){


if(gear==="N")
return;



if(gear<=1){

gear="N";

return;

}


gear--;



// blipper

if(shifterDown){

rpm+=2500;

}



};








// ==========================
// PHYSIQUE
// ==========================



setInterval(()=>{



// vitesse roue


let wheelRPM =
(speed/3.6)
/
(2*Math.PI*bike.wheelRadius)
*
60;




// régime mécanique moteur


if(gear!=="N"){


rpm =
wheelRPM *
gearbox[gear] *
bike.finalDrive;



}
else{


if(gas)

rpm+=400;

else

rpm-=150;


}





// ralenti

if(rpm<bike.idleRPM)

rpm=bike.idleRPM;






// rupteur


if(rpm>bike.maxRPM){

rpm=bike.maxRPM;

}





// couple moteur


let torque=0;



if(gas && shiftDelay===0){



let rpmRatio =
rpm/bike.maxRPM;



// courbe simplifiée

torque =
bike.maxTorque *
(
1-
Math.abs(rpmRatio-0.65)
);



}






// accélération


if(gear!=="N"){



let wheelTorque =
torque *
gearbox[gear] *
bike.finalDrive;



let acceleration =
wheelTorque /
bike.mass;



speed +=
acceleration*0.15;



}






// coupure shifter


if(shiftDelay>0){

shiftDelay--;

}






// frein


if(brake){

speed-=4;

}




// résistance air


speed -=
speed*0.002;



if(speed<0)

speed=0;




update();



},50);








function update(){


document.getElementById("speed").innerHTML=
Math.round(speed);


document.getElementById("rpm").innerHTML=
Math.round(rpm);


document.getElementById("gear").innerHTML=
gear;


document.getElementById("status").innerHTML=

"STATUS OK | UP:"+
(shifterUp?"ON":"OFF")
+
" DOWN:"+
(shifterDown?"ON":"OFF");


}



updateButtons();

update();
