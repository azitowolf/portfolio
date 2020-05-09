
;(function(window) {

	'use strict';

	var support = { transitions: Modernizr.csstransitions },
	// transition end event name
		transEndEventNames = { 'WebkitTransition': 'webkitTransitionEnd', 'MozTransition': 'transitionend', 'OTransition': 'oTransitionEnd', 'msTransition': 'MSTransitionEnd', 'transition': 'transitionend' },
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		onEndTransition = function( el, callback ) {
			var onEndCallbackFn = function( ev ) {
				if( support.transitions ) {
					if( ev.target != this ) return;
					this.removeEventListener( transEndEventName, onEndCallbackFn );
				}
				if( callback && typeof callback === 'function' ) { callback.call(this); }
			};
			if( support.transitions ) {
				el.addEventListener( transEndEventName, onEndCallbackFn );
			}
			else {
				onEndCallbackFn();
			}
		}


	// event binding
	function initEvents() {

		function getRandomIcon(){
			var numberOfIcons = document.links.length;
			var allIcons = document.links;
		  var randomNumber = Math.floor(Math.random() * numberOfIcons);
			var randomIcon = allIcons[randomNumber];
		  return randomIcon;
		}

		function changeRandomIconColor(){
			var icon = getRandomIcon();
		  var randomColor = Math.floor(Math.random()*155 + 100) + "," + Math.floor(Math.random()*155 + 100) + "," + Math.floor(Math.random()* 155 + 100);
		  icon.style.color = "rgb("+ randomColor + ")"
		}

		var windowInterval = setInterval(changeRandomIconColor ,1000);
	}

	initEvents();

})(window);
