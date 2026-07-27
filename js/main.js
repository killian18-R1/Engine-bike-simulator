/*
====================================
MotoSim
Main Loop
Version 0.2.0-a2
====================================
*/


async function startMotoSim(){


    console.clear();


    console.log("MotoSim V0.2.0-a2");


    await loadBike("yamaha_r1_2024.json");


    simulationLoop();


}





let lastTime = performance.now();



function simulationLoop(){


    let now = performance.now();


    let deltaTime =
    (now-lastTime)/1000;


    lastTime = now;



    updateEngine(deltaTime);



    requestAnimationFrame(simulationLoop);


}



startMotoSim();
