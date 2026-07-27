console.log("MotoSim V0.1.0-a7.1");


// ======================
// PARAMETRES MOTO
// ======================


const bike={

mass:250,

maxTorque:125,

maxRPM:14000,

idleRPM:1200

};



// boîte corrigée

const ratios={

1:3.00,

2:2.05,

3:1.60,

4:1.35,

5:1.15,

6:1.00

};




let gear="N";

let rpm=1200;

let speed=0;


let gas=false;

let brake=false;


let shifterUp=false;

let shifterDown=false;


let shiftCut=0;





// ======================
// COMMANDES
// ======================


const gasBtn=document.getElementById("gas");


gasBtn.onpointerdown=()=>gas=true;

gasBtn.onpointerup=()=>gas=false;

gasBtn.onpointerleave=()=>gas=false;





const brakeBtn=document.getElementById("brake");


brakeBtn.onpointerdown=()=>brake=true;

brakeBtn.onpointerup=()=>brake=false;

brakeBtn.onpointerleave=()=>brake=false;






// ======================
// SHIFTERS
// ======================


const upBtn=document.getElementById("shiftUp");

const downBtn=document.getElementById("shiftDown");



upBtn.onclick=function(){

shifterUp=!shifterUp;

updateButtons();

};



downBtn.onclick=function(){

shifterDown=!shifterDown;

updateButtons();

};



function updateButtons(){


upBtn.innerHTML =
(shifterUp ? "🟢 SHIFTER UP ON" : "🔴 SHIFTER UP OFF");


downBtn.innerHTML =
(shifterDown ? "🟢 SHIFTER DOWN ON" : "🔴 SHIFTER DOWN OFF");



upBtn.className =
shifterUp ? "shifter-on" : "shifter-off";


downBtn.className =
shifterDown ? "shifter-on" : "shifter-off";


}





// ======================
// RAPPORT +
 // ======================


document.getElementById("plus").onclick=function(){


if(gas && !shifterUp)
return;



if(gear==="N")

gear=1;


else if(gear<6)

gear++;



if(shifterUp){

shiftCut=5;

}



};






// ======================
// RAPPORT -
 // ======================


document.getElementById("minus").onclick=function(){



if(gear==="N")
return;



if(gear>1)

gear--;

else

gear="N";



if(shifterDown){

rpm+=3500;

}



};






// ======================
// PHYSIQUE
// ======================


setInterval(()=>{



let torque=0;



if(gas && shiftCut===0){


let rpmFactor=rpm/bike.maxRPM;


torque =
bike.maxTorque *
(1-rpmFactor*0.45);


}




if(shiftCut>0){

shiftCut--;

}




// moteur

if(gear!=="N"){



let force =
torque *
ratios[gear];



speed +=
(force/bike.mass)*0.08;



}







// résistance

speed -= speed*0.0015;






if(brake){

speed-=2;

}





if(speed<0)

speed=0;






// RPM mécanique


if(gear!=="N"){


rpm =
1200 +
(speed *
ratios[gear] *
95);



}

else{


if(gas)

rpm+=250;

else

rpm-=150;


}







if(rpm>14000)

rpm=14000;


if(rpm<1200)

rpm=1200;





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
