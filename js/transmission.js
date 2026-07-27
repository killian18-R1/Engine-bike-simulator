/*
====================================
MotoSim
Transmission Module
Version 0.2.0-a4
====================================
*/


const transmission = {


    primary:1.681,

    finalDrive:2.647,


    wheelRadius:0.318,


    gears:[

        2.571,

        2.000,

        1.619,

        1.381,

        1.190,

        1.037

    ]


};





function getGearRatio(){


    let gear = gearbox.gear;



    if(gear===0)

        return 0;



    return transmission.gears[gear-1];

}





function calculateWheelRPM(engineRPM){



    let ratio = getGearRatio();



    if(ratio===0)

        return 0;



    let totalRatio =

    transmission.primary *

    ratio *

    transmission.finalDrive;



    return engineRPM / totalRatio;


}





function calculateSpeed(engineRPM){



    let wheelRPM =

    calculateWheelRPM(engineRPM);



    let wheelCircumference =

    2 *

    Math.PI *

    transmission.wheelRadius;



    let speedMS =

    (wheelRPM *

    wheelCircumference) / 60;



    return speedMS * 3.6;


}
