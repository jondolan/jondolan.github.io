var up = true;
var moving = false;
var first = true;
var ANIMATION_SPEED = 5;
var DELAY = 10;
var RETRY_DELAY = 500;
function moveDown(element, bottom)
{
	if (up == true) {
        if (first == true) {
            var el = document.getElementById('mouse_over');
            el.parentNode.removeChild(el);
            first = false;
        }
		moving = true;
		if (bottom == undefined) {
			if (element.style.bottom == '')
				bottom = -10;
			else
				bottom = parseInt(element.style.bottom);
		}
		else if (bottom <= -310) {
			document.getElementById('about').style.display = 'block';
			up = false;
			moving = false;
			return;
		}
		element.style.bottom = bottom + 'px';
		setTimeout(function(){ moveDown(element,bottom-ANIMATION_SPEED)}, DELAY);
	}
	else if (moving == true)
		setTimeout(function(){ moveDown(element)}, RETRY_DELAY);
}
function moveUp(element, bottom)
{
	if (up == false)
	{
		moving = true;
		document.getElementById('about').style.display = 'none';
		if (parseInt(bottom) == 0 || bottom == undefined)
			bottom = -310;
		else if (bottom >= -10)
		{
			element.style.bottom = -10 + 'px';
			up = true;
			moving = false;
			return;
		}
		element.style.bottom = bottom + 'px';
		setTimeout(function(){ moveUp(element, bottom+ANIMATION_SPEED)}, DELAY);
	}
	else if (moving == true)
		setTimeout(function(){ moveUp(element, 0)}, RETRY_DELAY);
}
// TOUCH-EVENTS SINGLE-FINGER SWIPE-SENSING JAVASCRIPT
// Courtesy of PADILICIOUS.COM and MACOSXAUTOMATION.COM
var triggerElementID = null;
var fingerCount = 0;
var startX = 0;
var startY = 0;
var curX = 0;
var curY = 0;
var deltaX = 0;
var deltaY = 0;
var horzDiff = 0;
var vertDiff = 0;
var minLength = 72;
var swipeLength = 0;
var swipeAngle = null;
var swipeDirection = null;
function touchStart(event,passedName) {
	event.preventDefault();
	fingerCount = event.touches.length;
	if ( fingerCount == 1 ) {
		startX = event.touches[0].pageX;
		startY = event.touches[0].pageY;
		triggerElementID = passedName;
	} else {
		touchCancel(event);
	}
}
function touchMove(event) {
	event.preventDefault();
	if ( event.touches.length == 1 ) {
		curX = event.touches[0].pageX;
		curY = event.touches[0].pageY;
	} else {
		touchCancel(event);
	}
}
function touchEnd(event) {
	event.preventDefault();
	if ( fingerCount == 1 && curX != 0 ) {
		swipeLength = Math.round(Math.sqrt(Math.pow(curX - startX,2) + Math.pow(curY - startY,2)));
		if ( swipeLength >= minLength ) {
			caluculateAngle();
			determineSwipeDirection();
			processingRoutine();
			touchCancel(event); // reset the variables
		} else {
			touchCancel(event);
		}	
	} else {
		touchCancel(event);
	}
}
function touchCancel(event) {
	// reset the variables back to default values
	fingerCount = 0;
	startX = 0;
	startY = 0;
	curX = 0;
	curY = 0;
	deltaX = 0;
	deltaY = 0;
	horzDiff = 0;
	vertDiff = 0;
	swipeLength = 0;
	swipeAngle = null;
	swipeDirection = null;
	triggerElementID = null;
}

function caluculateAngle() {
	var X = startX-curX;
	var Y = curY-startY;
	var Z = Math.round(Math.sqrt(Math.pow(X,2)+Math.pow(Y,2))); //the distance - rounded - in pixels
	var r = Math.atan2(Y,X); //angle in radians (Cartesian system)
	swipeAngle = Math.round(r*180/Math.PI); //angle in degrees
	if ( swipeAngle < 0 ) { swipeAngle =  360 - Math.abs(swipeAngle); }
}
function determineSwipeDirection() {
	if ( (swipeAngle <= 45) && (swipeAngle >= 0) ) {
		swipeDirection = 'left';
	} else if ( (swipeAngle <= 360) && (swipeAngle >= 315) ) {
		swipeDirection = 'left';
	} else if ( (swipeAngle >= 135) && (swipeAngle <= 225) ) {
		swipeDirection = 'right';
	} else if ( (swipeAngle > 45) && (swipeAngle < 135) ) {
		swipeDirection = 'down';
	} else {
		swipeDirection = 'up';
	}
}
function processingRoutine() {
    var swipedElement = document.getElementById(triggerElementID);
    if ( swipeDirection == 'up' ) {
        moveUp(document.getElementById('image'));
    } else if ( swipeDirection == 'down' ) {
        moveDown(document.getElementById('image'));
    }
}