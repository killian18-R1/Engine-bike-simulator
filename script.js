let gear = "N";

let rpm = 1200;
let speed = 0;

let gas = false;
let brake = false;


// paramètres moteur

const idleRPM = 1200;
const maxRPM = 14000;


// rapports réalistes
const gearbox = {

    1: 0.35,
    2: 0.55,
    3: 0.75,
    4: 0.95,
    5: 1.15,
    6: 1.35

};



// =================
// GAZ
// =================

const gasButton = document.getElementById("gas");


gasButton.onmousedown = () => {
    gas = true;
};


gasButton.onmouseup = () => {
    gas = false;
};


gasButton.ontouchstart = (e)=>{

    e.preventDefault();

    gas=true;

};


gasButton.ontouchend = ()=>{

    gas=false;

};



// =================
// FREIN
// =================


const brakeButton = document.getElementById("brake");


brakeButton.onmousedown=()=>{

    brake=true;

};


brakeButton.onmouseup=()=>{

    brake=false;

};



brakeButton.ontouchstart=()=>{

    brake=true;

};


brakeButton.ontouchend=()=>{

    brake=false;

};




// =================
// RAPPORT +
// =================


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


    rpm -= 1500;


    if(rpm < idleRPM){

        rpm=idleRPM;

    }


    updateDisplay();

};




// =================
// RAPPORT -
// =================


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


    rpm -= 1000;


    if(rpm < idleRPM){

        rpm=idleRPM;

    }


    updateDisplay();

};





// =================
// MOTEUR
// =================


setInterval(()=>{


// montée régime

if(gas){


    rpm += 300;


}

else{


    rpm -= 150;


}




// ralenti

if(rpm < idleRPM){

    rpm = idleRPM;

}



// rupteur

if(rpm > maxRPM){

    rpm=maxRPM;

}





// calcul vitesse


if(gear !== "N"){


    let ratio = gearbox[gear];


    let targetSpeed = rpm * ratio / 10;


    if(speed < targetSpeed){

        speed += 1.5;

    }

    else{

        speed -=0.5;

    }



}
else{


    speed=0;


}





// frein

if(brake){

    speed -=3;

}



// frein moteur

if(!gas && !brake && gear!=="N"){

    speed -=0.05;

}



if(speed<0){

    speed=0;

}



updateDisplay();



},50);





function updateDisplay(){


document.getElementById("rpm").innerHTML=Math.round(rpm);


document.getElementById("speed").innerHTML=Math.round(speed);


document.getElementById("gear").innerHTML=gear;


}
