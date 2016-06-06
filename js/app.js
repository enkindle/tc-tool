$(document).foundation();
$('#screenShot').on('click', function(){
	//alert('clicked');
	captureScreenshot();
});

$('#picker').on('click', function(){
	//alert('clicked');
	initPicker();
});

function captureScreenshot(){
	html2canvas(document.body, {
	  onrendered: function(canvas) {
	    document.body.appendChild(canvas);
	  }
	});
}

function initPicker(){
	// Aero.picker.init({
 //        onStart : function(){
 //        },
 //        callback: function(path){
 //        }
 //    });
 //    Aero.picker.setEvents();
 	$(function() {
		var originalBGplaypen = $("#tester").css("background-color"),
		    x, y, xy, bgWebKit, bgMoz, 
		    lightColor = "rgba(0,255,255,1)",
		    gradientSize = 125;
		console.log(originalBGplaypen);
		// Basic Demo
		$('#tester').mousemove(function(e) {

			x  = e.pageX - this.offsetLeft;
			y  = e.pageY - this.offsetTop;
			xy = x + " " + y;
			
			bgWebKit = "-webkit-gradient(radial, " + xy + ", 0, " + xy + ", " + gradientSize + ", from(" + lightColor + "), to(rgba(255,255,255,0.0))), " + originalBGplaypen;
			bgMoz    = "-moz-radial-gradient(" + x + "px " + y + "px 45deg, circle, " + lightColor + " 0%, " + originalBGplaypen + " " + gradientSize + "px)";

			console.log(bgWebKit);
			console.log(bgMoz);
								
			$(this)
				.css({ background: bgWebKit, zIndex: 999 })
				.css({ background: bgMoz, zIndex: 999});
			
		}).mouseleave(function() {			
			$(this).css({ background: originalBGplaypen });
		});
				
	});
}
