// Length of the arms
var l1 = 240;
var l2 = 240;

// Angles of the arms
var theta1 = 0.0;
var theta2 = 0.0;
var x1;
var y1;
var x2;
var y2;
var MOTORSTEP = 0.25 * Math.PI / 180.0;
var addPi1;
var addPi2;

// Povars for the lines to display the arms
var px1 = 0;
var py1 = 0;
var px2;
var py2;
var px3;
var py3;

var command;
var laserEnabled = false;
var laserIntensity = 255;

var i = 0;

function setup() {
	createCanvas(1080, 1000);
    background(0);
    frameRate(120);
    command = loadStrings("p5/step.txt");

    // Shifts the origin to the bottom left
    scale(1, -1);
    translate(60, (60 + (l1+l2)/2) -height);

    // Draws an arc that represents the max cutting size
    noFill();
    stroke(255);
    strokeWeight(3);
    arc(l1 + l2, 0, 2 * (l1 + l2), 2 * (l1 +  l2), 0, PI);
    translate(l1 + l2, 0);  // Move the origin to the center of the arc

    // Draws the end of the "Table"
    strokeWeight(3);
    line(-width, 0, width, 0);
}

function draw() {
  
    //Math for angles
    switch (command[i]) {
        case "0x1":
            theta1 += MOTORSTEP;
            break;
        case "0x3":
            theta1 -= MOTORSTEP;
            break;
        case "0x4":
            theta2 += MOTORSTEP;
            break;
        case "0xC":
            theta2 -= MOTORSTEP;
            break;

        case "0x5":
            theta1 += MOTORSTEP;
            theta2 += MOTORSTEP;
            break;
        case "0x7":
            theta1 -= MOTORSTEP;
            theta2 += MOTORSTEP;
        case "0xD":
            theta1 += MOTORSTEP;
            theta2 -= MOTORSTEP;
        case "0xF":
            theta1 -= MOTORSTEP;
            theta2 -= MOTORSTEP;

        case "0xA":
            laserEnabled = true;
            break;
        case "0xB":
            laserEnabled = false;
            break;
        case "0xE":
            i++;
            if (i > command.size - 1) {
                remove();
			}
            
            laserIntensity = unhex(command[i].substring(2, command[i].length));
			break;
    }

    px2 = (int)(cos(theta1) * l1);
    py2 = (int)(sin(theta1) * l1);
    px3 = (int)(cos(theta2 + theta1) * l2) + px2;
    py3 = (int)(sin(theta2 + theta1) * l2) + py2;


    strokeWeight(2);
    if (laserEnabled) {
        stroke(0, 100, 50, laserIntensity);
    } else {
        stroke(100, 50, 0, 100);
    }

    point(px3, py3);


    i++;
    if (i > command.size-1) {
		i = 0;
    }
}
