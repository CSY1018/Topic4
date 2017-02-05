var player;
var upPressed = false;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;
var interval = false;

function setHead0() {
  var element = document.getElementsByClassName('head')[0];
  element.style.backgroundImage = 'url(images/head0.png)';
}

function setHead1() {
  var element = document.getElementsByClassName('head')[0];
  element.style.backgroundImage = 'url(images/head1.png)';
}

function setHead2() {
  var element = document.getElementsByClassName('head')[0];
  element.style.backgroundImage = 'url(images/head2.png)';
}

function setHead3() {
  var element = document.getElementsByClassName('head')[0];
  element.style.backgroundImage = 'url(images/head3.png)';
}

function setHead4() {
  var element = document.getElementsByClassName('head')[0];
  element.style.backgroundImage = 'url(images/head4.png)';
}



function setBody0() {
  var element = document.getElementsByClassName('body')[0];
  element.style.backgroundImage = 'url(images/body0.png)';
}

function setBody1() {
  var element = document.getElementsByClassName('body')[0];
  element.style.backgroundImage = 'url(images/body1.png)';
}

function setBody2() {
  var element = document.getElementsByClassName('body')[0];
  element.style.backgroundImage = 'url(images/body2.png)';
}

function setBody3() {
  var element = document.getElementsByClassName('body')[0];
  element.style.backgroundImage = 'url(images/body3.png)';
}

function setBody4() {
  var element = document.getElementsByClassName('body')[0];
  element.style.backgroundImage = 'url(images/body4.png)';
}




function move() {
	var positionLeft = player.offsetLeft;
	var positionTop = player.offsetTop;
	if (downPressed) {
		player.style.top = positionTop+1 + 'px';
		player.className = 'character walkDown';
	}
	if (upPressed) {
		player.style.top = positionTop-1 + 'px';
		player.className = 'character walkUp';
	}
	if (leftPressed) {
		player.style.left = positionLeft-1 + 'px';
		player.className = 'character walkLeft';
	}
	if (rightPressed) {
		player.style.left = positionLeft+1 + 'px';
		player.className = 'character walkRight';
	}

}


function keydown(event) {
	if (event.keyCode == 37) {		
		leftPressed = true;
	}
	if (event.keyCode == 39) {
		rightPressed = true;
	}
	if (event.keyCode == 38) {
		upPressed = true;
	}
	if (event.keyCode == 40) {
		downPressed = true;
	}	
}

function keyup(event) {
	if (event.keyCode == 37) {		
		leftPressed = false;
		if (!leftPressed && !rightPressed && !upPressed && !downPressed) {
			player.className = 'character standLeft';
		}
	}
	if (event.keyCode == 39) {
		rightPressed = false;
		if (!leftPressed && !rightPressed && !upPressed && !downPressed) {
			player.className = 'character standRight';
		}
	}
	if (event.keyCode == 38) {
		upPressed = false;
		if (!leftPressed && !rightPressed && !upPressed && !downPressed) {
			player.className = 'character standUp';
		}
	}
	if (event.keyCode == 40) {
		downPressed = false;
		if (!leftPressed && !rightPressed && !upPressed && !downPressed) {
			player.className = 'character standDown';
		}
	}	
}

function sideBarHide() {
	var sidebar = document.getElementsByTagName('aside')[0];
	var positionLeft = parseInt(sidebar.style.marginLeft);
	sidebar.style.marginLeft = (positionLeft + 1) + 'px';
	if (positionLeft == 0) clearInterval(interval);
}

function sideClose() {
	var sidebar = document.getElementsByTagName('aside')[0];
	sidebar.style.marginLeft = '-240px';
	interval = setInterval(sideBarHide, 1);
}


function sideBarShow() {
	var sidebar = document.getElementsByTagName('aside')[0];
	var positionLeft = parseInt(sidebar.style.marginLeft);
	sidebar.style.marginLeft = (positionLeft - 1) + 'px';
	if (positionLeft == -240) clearInterval(interval);
}


function sideOpen() {
	var sidebar = document.getElementsByTagName('aside')[0];
	sidebar.style.marginLeft = '0px';
	interval = setInterval(sideBarShow, 1);
}

function myLoadFunction() {
  player = document.getElementById('player');

  var element = document.getElementById('head0');
  element.addEventListener('click', setHead0);

  var element = document.getElementById('head1');
  element.addEventListener('click', setHead1);
        
  var element = document.getElementById('head2');
  element.addEventListener('click', setHead2);

  var element = document.getElementById('head3');
  element.addEventListener('click', setHead3);

  var element = document.getElementById('head4');
  element.addEventListener('click', setHead4);


  var element = document.getElementById('body0');
  element.addEventListener('click', setBody0);

  var element = document.getElementById('body1');
  element.addEventListener('click', setBody1);
        
  var element = document.getElementById('body2');
  element.addEventListener('click', setBody2);

  var element = document.getElementById('body3');
  element.addEventListener('click', setBody3);

  var element = document.getElementById('body4');
  element.addEventListener('click', setBody4);

  timeout = setInterval(move, 10);
  document.addEventListener('keydown', keydown);
  document.addEventListener('keyup', keyup);

  var close = document.getElementById('closeside');
  close.addEventListener('click', sideClose);

  player.addEventListener('click', sideOpen);
}

document.addEventListener('DOMContentLoaded', 
				myLoadFunction);


