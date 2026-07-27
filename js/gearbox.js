/*
====================================
MotoSim
Gearbox Module
Version 0.2.0-a3
====================================
*/


let gearbox = {


    gear:0,


    maxGear:6,


    minGear:0,


    neutral:0


};




// Monter un rapport

function shiftUp(){


    if(gearbox.gear < gearbox.maxGear){


        gearbox.gear++;


        console.log(
        "Rapport : ",
        gearbox.gear
        );


    }


}




// Descendre un rapport

function shiftDown(){


    if(gearbox.gear > gearbox.minGear){


        gearbox.gear--;


        console.log(
        "Rapport : ",
        gearbox.gear
        );


    }


}




// Retour affichage

function getGearDisplay(){


    if(gearbox.gear===0)

        return "N";


    return gearbox.gear;


}
