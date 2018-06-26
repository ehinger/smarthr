window.onload=function(){

	var body = document.getElementsByTagName("BODY")[0];

	var background = document.querySelector(".background");

	var menuBar = document.querySelector(".menuBar");

	var sandwichIcon = document.querySelector(".sandwichIcon");

	var returnToTop = document.querySelector(".returnToTop");
	var navigationClose = document.querySelector(".navigationClose");
	var links = document.querySelector(".links");

	var touchstartY = 0;
	var touchendY = 0;

	var remainder = 0;

	var flipper = 0;

// Navigation ///////////////////////////////////////////////////////////////////////////////////

	sandwichIcon.addEventListener("click", function(){
		menuBar.classList.add('closeTransition');
		navigationClose.classList.add('menuTransition');
		body.style.overflow = 'hidden';
		returnToTop.style.display = "none";
		sandwichIcon.style.display = "none";
		links.classList.add('linksRemove');
		flipper = 1;
	}, false);

	navigationClose.addEventListener("click", function(){
		menuBar.classList.remove('closeTransition');
		navigationClose.classList.remove('menuTransition');
		body.style.overflow = 'visible';
		body.style.overflowX = 'hidden';
		returnToTop.style.display = "block";
		sandwichIcon.style.display = "block";
		links.classList.remove('linksRemove');
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
			sandwichIcon.style.background = '#ffffff';
			// handleGesure();
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