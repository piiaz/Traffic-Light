var nextColor = "red";
var counter = 30;
var start = false;
var yellowReverse = false;
var intervial;
var night = false;

function startTrafficLight() {
    if (start) {return}
    start = true;
    redOn();
    $("#counter").css("color", nextColor);
    $("#counter").css("text-shadow", "0 0 2px white, 0 0 20px " + nextColor, "0 0 40px " + nextColor)
    counter = 30;
    intervial = setInterval(trafficLightCycle, 1000);
}

function trafficLightCycle() {
    countDown();
    if (counter === 0) {
        switch (nextColor) {
            case "red":
                redOff();
                yellowOn();
                counter = 11;
                countDown();
                nextColor = "yellow";
                break;

            case "yellow":
                yellowOff();
                counter = 31;
                if(yellowReverse === true) {
                    nextColor = "red";
                    redOn();
                    yellowReverse = false;
                } else {
                    nextColor = "green";
                    greenOn();
                }
                countDown();
                break;

            case "green":
                greenOff();
                yellowOn();
                counter = 11;
                countDown();
                yellowReverse = true;
                nextColor = "yellow";
                break;

            default :
                redOn();
                yellowOff();
                greenOff();
                counter = 31;
                nextColor = "red"
        }
        $("#counter").css("color", nextColor);
        $("#counter").css("text-shadow", "0 0 2px white, 0 0 20px " + nextColor, "0 0 40px " + nextColor);
    }
}


function toggleTime() {
    if (!night){
        $("body").css("background", "linear-gradient(180deg, black, midnightblue)");
        night = true;
    } else {
        $("body").css("background", "linear-gradient(180deg, rgb(94, 148, 201), rgb(188, 188, 118)");
        night = false;
    }
}

setInterval(toggleTime, 70000);

// Counter
function countDown() {
        counter--;
        $("#counter").html(counter);
}

//Red Light 
function redOn() {
    $(".red").addClass("red-active");
}
function redOff() {
    $(".red").removeClass("red-active");
}

// Yellow Light
function yellowOn() {
    $(".yellow").addClass("yellow-active");
}
function yellowOff() {
    $(".yellow").removeClass("yellow-active");
}

// Green Light
function greenOn() {
    $(".green").addClass("green-active");
}
function greenOff() {
    $(".green").removeClass("green-active");
}

startTrafficLight();