/*
====================================
MotoSim
Engine Module
Version 0.2.0-a2
====================================
*/


function updateEngine(deltaTime){


    if(!gameState.bike)
        return;



    const engine = gameState.engine;

    const data = gameState.bike.engine;



    // Gestion de la poignée

    if(gameState.controls.gas){

        engine.throttle += deltaTime * 3;

    }

    else{

        engine.throttle -= deltaTime * 5;

    }



    // Limites gaz

    if(engine.throttle > 1)
        engine.throttle = 1;


    if(engine.throttle < 0)
        engine.throttle = 0;




    /*
    ===============================
    Courbe moteur simplifiée
    ===============================
    */


    let rpmRatio =
    engine.rpm / data.redline;



    let torqueFactor =
    1 - Math.abs(rpmRatio - 0.55);



    if(torqueFactor < 0)
        torqueFactor = 0;




    let torque = 
    data.torque *
    torqueFactor *
    engine.throttle;



    engine.torque = torque;




    /*
    ===============================
    Evolution RPM
    ===============================
    */


    let rpmAcceleration =
    torque * 80;



    if(engine.throttle > 0){

        engine.rpm +=
        rpmAcceleration * deltaTime;

    }

    else{

        engine.rpm -=
        400 * deltaTime;

    }




    // Ralenti

    if(engine.rpm < data.idleRPM)

        engine.rpm = data.idleRPM;



    // Rupteur

    if(engine.rpm > data.limiter){

        engine.rpm = data.limiter;

    }



}
