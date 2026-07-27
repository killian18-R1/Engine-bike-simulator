/*
====================================
MotoSim
Bike Loader
====================================
*/

async function loadBike(fileName){

    try{

        const response = await fetch("bikes/" + fileName);

        gameState.bike = await response.json();

        console.log("Moto chargée :", gameState.bike.name);

    }

    catch(error){

        console.error("Erreur de chargement :", error);

    }

}
