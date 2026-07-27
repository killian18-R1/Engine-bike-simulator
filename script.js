/*
====================================
MotoSim
Main Script
Version 0.2.0-a4.1
====================================
*/


console.log("MotoSim V0.2.0-a4.1");



/*
==============================
ETAT SIMULATION
==============================
*/


let rpm = 1200;

let speed = 0;


let gas = false;

let brake = false;



let shifterUp = false;

let shifterDown = false;



const maxRPM = 14000;





/*
==============================
GAZ
==============================
*/


const gasButton =
document.getElementById("gas");



gasButton.onpointerdown = () => {

    gas = true;

};



gasButton.onpointerup = () => {

    gas = false;

};



gasButton.onpointerleave = () => {

    gas = false;

};





/*
==============================
FREIN
==============================
*/


const brakeButton =
document.getElementById("brake");



brakeButton.onpointerdown = () => {

    brake = true;

};



brakeButton.onpointerup = () => {

    brake = false;

};



brakeButton.onpointerleave = () => {

    brake = false;

};





/*
==============================
BOITE
==============================
*/


document.getElementById("plus").onclick = () => {

    shiftUp();

};




document.getElementById("minus").onclick = () => {

    shiftDown();

};





/*
==============================
SHIFTER UP
==============================
*/


const shiftUpButton =
document.getElementById("shiftUp");



shiftUpButton.onclick = () => {


    shifterUp = !shifterUp;


    updateShiftButton(
        shiftUpButton,
        shifterUp,
        "SHIFTER UP"
    );


};





/*
==============================
SHIFTER DOWN
==============================
*/


const shiftDownButton =
document.getElementById("shiftDown");



shiftDownButton.onclick = () => {


    shifterDown = !shifterDown;


    updateShiftButton(
        shiftDownButton,
        shifterDown,
        "SHIFTER DOWN"
    );


};





function updateShiftButton(button,state,text){


    if(state){


        button.innerHTML =
        "🟢 " + text + " ON";


        button.className="on";


    }

    else{


        button.innerHTML =
        "🔴 " + text + " OFF";


        button.className="off";


    }

}





/*
==============================
SIMULATION
==============================
*/


setInterval(()=>{


    /*
    ==========================
    Gestion RPM moteur
    ==========================
    */


    if(gas){


        rpm += 400;


    }

    else{


        rpm -= 250;


    }




    if(rpm > maxRPM)

        rpm = maxRPM;




    if(rpm < 1200)

        rpm = 1200;





    /*
    ==========================
    Transmission
    ==========================
    */


    speed = calculateSpeed(rpm);





    /*
    ==========================
    Frein
    ==========================
    */


    if(brake){


        speed -= 2;


    }



    if(speed < 0)

        speed = 0;





    update();



},50);








/*
==============================
AFFICHAGE
==============================
*/


function update(){



    document.getElementById("rpm").innerHTML =

    Math.round(rpm);




    document.getElementById("speed").innerHTML =

    Math.round(speed);




    document.getElementById("gear").innerHTML =

    getGearDisplay();




    document.getElementById("status").innerHTML =

    "STATUS OK";


}
