let gear = "N";

let rpm = 1200;

let speed = 0;



// Passage supérieur

document.getElementById("plus").onclick = function(){


if(gear === "N"){

gear = 1;

}

else if(gear < 6){

gear++;

}


document.getElementById("gear").innerHTML = gear;


};




// Passage inférieur

document.getElementById("minus").onclick = function(){


if(gear === 1){

gear="N";

}

else if(gear > 1){

gear--;

}


document.getElementById("gear").innerHTML = gear;


};




// Gaz

document.getElementById("gas").onclick=function(){


rpm += 500;


if(rpm > 14000){

rpm = 14000;

}


document.getElementById("rpm").innerHTML=rpm;


};




// Frein

document.getElementById("brake").onclick=function(){


speed = 0;


document.getElementById("speed").innerHTML=speed;


};
