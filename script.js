console.log("MotoSim V0.2.0-a2.1");



let rpm = 1200;

let speed = 0;

let gear = "N";


let gas = false;

let brake = false;


let shifterUp = false;

let shifterDown = false;



const maxRPM = 14000;




// GAZ


document.getElementById("gas").onpointerdown=()=>{

gas=true;

};


document.getElementById("gas").onpointerup=()=>{

gas=false;

};





// FREIN


document.getElementById("brake").onpointerdown=()=>{

brake=true;

};


document.getElementById("brake").onpointerup=()=>{

brake=false;

};




// RAPPORT +


document.getElementById("plus").onclick=()=>{


if(gear==="N")

gear=1;


else if(gear<6)

gear++;


};




// RAPPORT -


document.getElementById("minus").onclick=()=>{


if(gear==="N")

return;


if(gear>1)

gear--;


else

gear="N";


};





// SHIFTERS


const up=document.getElementById("shiftUp");

const down=document.getElementById("shiftDown");



up.onclick=()=>{


shifterUp=!shifterUp;


updateShiftButton(
up,
shifterUp,
"SHIFTER UP"
);


};



down.onclick=()=>{


shifterDown=!shifterDown;


updateShiftButton(
down,
shifterDown,
"SHIFTER DOWN"
);


};




function updateShiftButton(btn,state,text){


if(state){

btn.innerHTML="🟢 "+text+" ON";

btn.className="on";


}

else{


btn.innerHTML="🔴 "+text+" OFF";

btn.className="off";


}


}






// SIMULATION


setInterval(()=>{


if(gas){


rpm+=400;


}


else{


rpm-=250;


}




if(gear!=="N"){


if(gas)

speed+=0.5;


}



if(brake)

speed-=1;



if(speed<0)

speed=0;



if(rpm>maxRPM)

rpm=maxRPM;


if(rpm<1200)

rpm=1200;




update();


},50);







function update(){


document.getElementById("rpm").innerHTML=

Math.round(rpm);



document.getElementById("speed").innerHTML=

Math.round(speed);



document.getElementById("gear").innerHTML=

gear;



document.getElementById("status").innerHTML=

"STATUS OK";


}
