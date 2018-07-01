window.onload=function(){

	var body = document.getElementsByTagName("BODY")[0];

	var background = document.querySelector(".background");

	var menuBar = document.querySelector(".menuBar");

	var sandwichIcon = document.querySelector(".sandwichIcon");

	var returnToTop = document.querySelector(".returnToTop");
	var navigationClose = document.querySelector(".navigationClose");
	var links = document.querySelector(".links");

	var linkOne = document.querySelector(".linkOne");
	var linkTwo = document.querySelector(".linkTwo");
	var linkThree = document.querySelector(".linkThree");
	var linkFour = document.querySelector(".linkFour");

	var aboutScroll = document.querySelector(".aboutScroll");
	var WWDScroll = document.querySelector(".WWDScroll");
	var contactWrapper = document.querySelector(".contactWrapper");
	
	var introWrapper = document.querySelector(".introWrapper");

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
		closeNav();
	}, false);

	function closeNav() {
		menuBar.classList.remove('closeTransition');
		navigationClose.classList.remove('menuTransition');
		body.style.overflow = 'visible';
		body.style.overflowX = 'hidden';
		returnToTop.style.display = "block";
		sandwichIcon.style.display = "block";
		links.classList.remove('linksRemove');
		flipper = 0;
	}

	returnToTop.addEventListener("click", function(){
		window.scroll({ top: 0, left: 0, behavior: 'smooth' });
	}, false);

	linkOne.addEventListener("click", function(){
		aboutScroll.scrollIntoView({ behavior: 'smooth' });
		closeNav();
	}, false);

	linkTwo.addEventListener("click", function(){
		WWDScroll.scrollIntoView({ behavior: 'smooth' });
		closeNav();
	}, false);

	linkThree.addEventListener("click", function(){
		contactWrapper.scrollIntoView({ behavior: 'smooth' });
		closeNav();
	}, false);

	linkFour.addEventListener("click", function(){
		contactWrapper.scrollIntoView({ behavior: 'smooth' });
		closeNav();
	}, false);

	body.addEventListener('touchstart', function(event) {
		touchstartY = event.changedTouches[0].screenY;
	}, false);

window.onscroll = function() {introWrapperScrollCheck()};

function introWrapperScrollCheck() {
    if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750 && flipper == 0) {
			introWrapper.style.zIndex = '-10';
    } else {
			introWrapper.style.zIndex = '1';
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////
}