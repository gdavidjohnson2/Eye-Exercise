var myX, myY, xyOn, myMouseX, myMouseY;
xyOn = true;
var clicked = false;
var balls = document.getElementsByClassName("ball");
var irises = document.getElementsByClassName("iris");
var lines = document.getElementsByClassName("line");
var pupils = document.getElementsByClassName("pupil");
var mouseX = 0;
var mouseY = 0;

document.onmousemove = () => {
  getXYPosition();
  mouseX = event.clientX;
  mouseY = event.clientY;
  //mouseTracker.style.left = mouseX;
  //mouseTracker.style.top = mouseY;
  mouseTracker.setAttribute('style', "left:"+ mouseX +" px; top: "+ mouseY +"px;")
  var x = (mouseX * 100) / window.innerWidth + "%";
  var y = (mouseY * 100) / window.innerHeight + "%";
  if (clicked !== true) {
    getLines(true); 
  for (let i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transfoorm = "translate(-" + x + ",-" + y + ")";

  }
}
};

var myX, myY, xyOn, myMouseX, myMouseY, windowCenterX, windowCenterY;
var mouseTracker = document.getElementById('mouseTracker');

xyOn = true;
document.onmouseup = getXYPosition;
function getXYPosition(e) {
windowCenterX = window.innerWidth / 2;
windowCenterY = window.innerHeight / 2;
myMouseX = (e || event).clientX;
myMouseY = (e || event).clientY;
for (i=0; i < balls.length; i++){
  getCenter(balls[i]); //futures adds the center px's to the balls array element
  getCenter(pupils[i]); //futures adds the center px's to the pupil array element
}
if (document.documentElement.scrollTop > 0) {
    myMouseY = myMouseY + document.documentElement.scrollTop;
}
if (xyOn) {
   /* console.log(
      "X is " + myMouseX + " Y is " + myMouseY + 
      "\nwindowCenterX: "+ windowCenterX + " windowCenterY:"+ windowCenterY + 
      "\ndifference length: "
     
    );
    console.log(mouseTracker.style);*/
}
}
function toggleXY() {
xyOn = !xyOn;
document.getElementById('xyLink').blur();
return false;
}   

function getCenter(div){
let rect = div.getBoundingClientRect()
div.centerX = rect.x + (rect.width / 2);
div.centerY = rect.y + (rect.height / 2);

}
function getLines(laser) {
let tx = parseInt(mouseTracker.style.left.replace("px",""));
let ty = parseInt(mouseTracker.style.top.replace("px",""));
if (lines.length > 0) {
  for (i=0; i< lines.length; i++){

    
    lines[i].remove();
  }

  let display = "none";
  if (laser === true){
    display = "block";
  }

  for (j=0; j < pupils.length; j++){
  linedraw(tx, ty , pupils[j].centerX, pupils[j].centerY, "red", 3, display);
  //console.log("line drawn for " + j + "\ncenterX:" + pupils[j].centerX + " centerY:" + pupils[j].centerY);
  }
}
}


function changeIris() { //futures

    if(distanceFromCenter > 180 && distanceFromCenter < 300){
        p = parseInt((distanceFromCenter / 299) * 50) + 200;
       }
     if(distanceFromCenter < 181){
           p = 250;
       }
     if(distanceFromCenter >= 300){
           p = 200;
       }

}

function mouseMove(event) {

    if(distanceFromCenter > 180 && distanceFromCenter < 300){
       p = parseInt((distanceFromCenter / 299) * 50) + 200;
      }
    if(distanceFromCenter < 181){
          p = 250;
      }
    if(distanceFromCenter >= 300){
          p = 200;
      }
    var s = 100;
    var cx = window.innerWidth / 2;
    var cy = window.innerHeight / 2;
    var x = (event.clientX * 100) / window.innerWidth + "%";
    var y = (event.clientY * 100) / window.innerHeight + "%";
    var px = (event.clientX * s) / window.innerWidth + "%";
    var py = (event.clientY * s) / window.innerHeight + "%";
    
    
     
    for (let i = 0; i < balls.length; i++) {
      if (clicked !== true) {
      getDivCenter(document.getElementsByClassName("pupil")[i]);

      irises[i].style.width = p;

      pupils[i].style.left = x;
      pupils[i].style.top = py;
      pupils[i].transfoorm = "translate(-" + px + ",-" + py + ")";


        if (distanceFromCenter < 175 && pupils[i].offsetHeight > 20) {
          let pupilchange = pupils[i].offsetHeight - parseInt((pupils[i].offsetHeight * 10) / distanceFromCenter);
          pupils[i].style.height = pupilchange + "px";
          pupils[i].style.width = pupilchange + "px";
          pupils[i].offsetHeight = pupilchange;
          irises[i].style.background = "radial-gradient(closest-side, rgb(67, 1, 73), rgb(155, 5, 160),  rgb(67, 1, 73))";
      }
        if (distanceFromCenter > 175  && pupils[i].offsetHeight < 100) {
          let pupilchange = pupils[i].offsetHeight + parseInt((pupils[i].offsetHeight * 10) / distanceFromCenter);
          pupils[i].style.height = pupilchange + "px";
          pupils[i].style.width = pupilchange + "px";
          pupils[i].offsetHeight = pupilchange;
          irises[i].style.background = "radial-gradient(closest-side, rgb(67, 1, 73),rgb(67, 1, 73), rgb(155, 5, 160),  rgb(67, 1, 73))";
        }          
        if (distanceFromCenter > 275 && distanceFromCenter < 350 && pupils[i].offsetHeight > 100) {
          let pupilchange = pupils[i].offsetHeight - parseInt((pupils[i].offsetHeight * 10) / distanceFromCenter);
          pupils[i].style.height = pupilchange + "px";
          pupils[i].style.width = pupilchange + "px";
          pupils[i].offsetHeight = pupilchange;
          irises[i].style.background = "radial-gradient(closest-side, rgb(67, 1, 73),rgb(67, 1, 73), rgb(155, 5, 160),  rgb(67, 1, 73))";
        }
        if (distanceFromCenter > 350 && pupils[i].offsetHeight < 125) {
          let pupilchange = pupils[i].offsetHeight + parseInt((pupils[i].offsetHeight * 10) / distanceFromCenter);
          pupils[i].style.height = pupilchange + "px";
          pupils[i].style.width = pupilchange + "px";
          pupils[i].offsetHeight = pupilchange;
          irises[i].style.background = "radial-gradient(closest-side, rgb(67, 1, 73),rgb(67, 1, 73),rgb(67, 1, 73), rgb(155, 5, 160),  rgb(67, 1, 73))";
        }

      
      }
    }
}

function stopFollow() {
    clicked = !clicked;
    xyOn = !xyOn;
}

function getDivCenter(div) {
    var rect = div.getBoundingClientRect();
    divleft = parseInt(rect.left + ((rect.right - rect.left) / 2));
    divtop = parseInt(rect.top + ((rect.bottom - rect.top)/ 2));
    //console.log(rect.top, rect.right, rect.bottom, rect.left);
    document.getElementsByClassName('info')[0].innerHTML = "<p>rect.top: " + rect.top  + "  rect.left:"+ rect.left  + "</p>"+
    "<p>rect.bottom: " + rect.bottom  + "  rect.right:"+ rect.right  + "</p>" + 
    "<p>width: " + (rect.right - rect.left) + " height:" + (rect.bottom - rect.top) +  "</p>" + 
    "<p>ctr.left: "+ divleft + " ctr.top: " + divtop + "</p>" + 
    "<p>distance from center: " + distanceFromCenter + "</p>"; 

}

function getPupilCenter(div, event) {
    var x = (((event.clientX) * 100) / window.innerWidth) + "%";
    var y = ((event.clientY) * 100) / window.innerHeight + "%";
    var bx = (((event.clientX) * 100) / window.innerWidth) - 25.5  + "%";
    var by = ((event.clientY) * 100) / window.innerHeight + "%";
    var rect = div.getBoundingClientRect();
    var pdivleft = parseInt(rect.left + ((rect.right - rect.left) / 2));
    var pdivtop = parseInt(rect.top + ((rect.bottom - rect.top)/ 2));
    tracker2[0].style.top = pdivtop + "px";
    tracker2[0].style.left = pdivleft + "px";


}
function linedraw(x1, y1, x2, y2, color, thickness, display) {
    if (x2 < x1) {
        var tmp;
        tmp = x2 ; x2 = x1 ; x1 = tmp;
        tmp = y2 ; y2 = y1 ; y1 = tmp;
    }

    var lineLength = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    var m = (y2 - y1) / (x2 - x1);

    degree = Math.atan(m) * 180 / Math.PI;

    document.body.innerHTML += "<div class='line' style=" + 
    "'transform-origin: top left; "+ 
    "transform: rotate(" + degree + "deg); " + 
    "width: " + lineLength + "px; " + 
    "height: " + thickness + "px; " + 
    "background: "+ color +"; "+
    "position: absolute; "+
    "top: " + y1 + "px; " + 
    "left: " + x1 + "px; " + 
    "display: "+ display +";'></div>";

    recLength(lineLength);
    //adjustCurvature();
   
}

function recLength(lineLength) {
    distanceFromCenter = lineLength;

}

function adjustCurvature() { //futures
    //get tracker position and make oblong when the distance from center is greater than the eye dimensions
    // rotate the elipse perpendicular to the tracker location
    //console.log(distanceFromCenter);
    //console.log(degree);

    if(distanceFromCenter > 180 && distanceFromCenter < 300){
        let min = 179;
        let max = 299;
        let p = parseInt((distanceFromCenter / max) * 50) + 200;
        //console.log(p);
        //balls[0].style.width = p;
    }
    if(distanceFromCenter < 181){
       // balls[0].style.width = 250;
    }
    if(distanceFromCenter >= 300){
       // balls[0].style.width = 200;
    }
}

