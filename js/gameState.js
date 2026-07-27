/*
====================================
MotoSim
GameState
Version 0.2.0
====================================
*/

const gameState = {

    version: "0.2.0",

    bike: null,

    engine: {

        rpm: 1200,

        throttle: 0,

        running: true

    },

    gearbox: {

        gear: 0,

        clutch: 1,

        quickShifterUp: false,

        quickShifterDown: false

    },

    physics: {

        speed: 0,

        acceleration: 0,

        wheelRPM: 0

    },

    controls: {

        gas: false,

        brake: false,

        shiftUp: false,

        shiftDown: false

    }

};

console.log("GameState chargé");
