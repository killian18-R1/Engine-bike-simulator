console.log("MotoSim A7");


// PARAMETRES


const bike={

mass:250,

maxTorque:112,

idleRPM:1200,

maxRPM:14000

};



const ratios={

1:2.6,

2:1.9,

3:1.5,

4:1.25,

5:1.1,

6:0.95

};



let gear="N";


let rpm=1200;


let speed=0;


let gas=false;


let brake=false;


let shifterUp=false;


let shifterDown=false;


let cutTimer=0;





// COMMANDES


gasBtn=document.getElementById("gas");


gasBtn.onpointerdown=()=>gas=true;

gasBtn.onpointerup=()=>gas=false;

gasBtn.onpointerleave=()=>gas=false;





brakeBtn=document.getElementById("brake");


brakeBtn.onpointerdown=()=>brake=true;

brakeBtn.onpointerup=()=>brake=false;

brakeBtn.onpointerleave=()=>brake=false;





// SHIFTERS


document.getElementById("shiftUp").onclick=function(){

shifterUp=!shifterUp;

this.innerHTML=
"SHIFTER UP "+
(shifterUp?"ON":"OFF");

};




document.getElementById("shiftDown").onclick=function(){

shifterDown=!shifterDown;

this.innerHTML=
"SHIFTER DOWN "+
(shifterDown?"ON":"OFF");

};





// RAPPORT +

document.getElementById("plus").onclick=function(){


if(gas && !shifterUp)
return;



if(gear==="N")

gear=1;


else if(gear<6)

gear++;



if(shifterUp){

cutTimer=5;

}



};



//
// RAPPORT -
//


document.getElementById("minus").onclick=function(){



if(gear==="N")
return;



if(gear>1)

gear--;


else

gear="N";



if(shifterDown){

rpm+=2500;

}


};







// PHYSIQUE


setInterval(()=>{



let torque=0;



if(gas && cutTimer<=0){


let powerFactor =
1-(rpm/14000)*0.4;


torque =
bike.maxTorque*powerFactor;


}




if(cutTimer>0){

cutTimer--;

}





// acceleration


if(gear!=="N"){


let force =
torque*ratios[gear];


speed +=
(force/bike.mass)*0.05;


}





// air


speed -=
speed*0.002;



// frein


if(brake)

speed-=1;




if(speed<0)

speed=0;





// RPM MECANIQUE


if(gear!=="N"){


rpm =
1200+
speed*
ratios[gear]*
35;


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



document.getElementById("status").innerHTML=

"STATUS OK | UP:"+
(shifterUp?"ON":"OFF")
+
" DOWN:"+
(shifterDown?"ON":"OFF");


}



update();
