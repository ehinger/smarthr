window.onload=function(){

	var body = document.getElementsByTagName("BODY")[0];

	var background = document.querySelector(".background");

	var menuBar = document.querySelector(".menuBar");

	var returnToTop = document.querySelector(".returnToTop");
	var navigationClose = document.querySelector(".navigationClose");

	var touchstartY = 0;
	var touchendY = 0;

	var remainder = 0;

	var flipper = 0;

// Navigation ///////////////////////////////////////////////////////////////////////////////////

	menuBar.addEventListener("click", function(){
		menuBar.classList.add('closeTransition');
		navigationClose.classList.add('menuTransition');
		body.style.overflow = 'hidden';
		returnToTop.style.display = "none";
		flipper = 1;
	}, false);

	navigationClose.addEventListener("click", function(){
		menuBar.classList.remove('closeTransition');
		navigationClose.classList.remove('menuTransition');
		body.style.overflow = 'visible';
		returnToTop.style.display = "block";
		flipper = 0;
	}, false);

	returnToTop.addEventListener("click", function(){
		scroll(0,background.scrollTop);
	}, false);

	body.addEventListener('touchstart', function(event) {
		touchstartY = event.changedTouches[0].screenY;
	}, false);

	body.addEventListener('touchend', function(event) {
		touchendY = event.changedTouches[0].screenY;
		if (document.documentElement.scrollTop >= 250 && flipper == 0) {
			console.log(background.offsetTop);
				handleGesure();
}
		}, false); 

	function handleGesure() {
		if (touchendY < touchstartY) {
			remainder = touchstartY - touchendY;
			if (remainder >= 1) {
				menuBar.style.display = 'none';
				console.log("down");
			}
		}

		if (touchendY > touchstartY) {
			remainder = touchendY - touchstartY;
			if (remainder >= 1) {
				menuBar.style.display = 'block';
				console.log("up");
			}
		}
	}

/////////////////////////////////////////////////////////////////////////////////////////////////
}