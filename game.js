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



function keydown(event) {
	var player = document.getElementById('player');

	if (event.keyCode == 37) {		
		player.className = 'character standLeft';
	}
	if (event.keyCode == 39) {
		player.className = 'character standRight';
	}
	if (event.keyCode == 38) {
		player.className = 'character standUp';
	}
	if (event.keyCode == 40) {
		player.className = 'character standDown';
	}	
}



function myLoadFunction() {

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

  document.addEventListener('keydown', keydown);
}

document.addEventListener('DOMContentLoaded', 
				myLoadFunction);


