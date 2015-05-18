//console.log('Picasso JS!');


// Plain English instructions

// - Lightbox is closed
	// 1. when I click on any image in one of the sections

	$('section img').on('click', function(){
	// 2. select the image we just click and store some information

	// .attr() check current attributes or update to new ones
	var image = $(this).attr('src');

	console.log(image);

	// 3. update the image in the lightbox to the new src we just got from the current image
	$('.lightbox img').attr('src', image);

	// 4. fade the lightbox in
	 $('.lightbox').fadeIn(1500);

	 });

//  - Lightbox is open
	// 1. when clicking on the screen
	// 2. fade out of the lightbox

// click on the lightbox
$('.lightbox').on('click', function(){
	// select the lightbox and fade out
	$('.lightbox').fadeOut(1500);

});

// color change 

// 1. when a user scroll do
// document is a javascript keyword for referencing the whole page
$(document).on('scroll', function(){

	// 2. scrolling to a set point
	var distanceFromTheTop = $(document).scrollTop();

	console.log(distanceFromTheTop);
	// select our distance box and change the text
	$('.distance').text(distanceFromTheTop);
	// - look at how far in pixels go get a number
	// 45, 1400, 3000 px positions

		
		// - use offset top to calculate that distance with javascript
	// 3. get hold of the body and add a new css colour

	// if( distanceFromTheTop >= 45){

		// if distance from top is greater than 45 then this code will run
		// $('body').css('background-color', '#4B97FB');

		// $('body').addClass('blue');
	// } 

	// toggle the rose class on or off based on if distance from top is greater than 1200
	$('body').toggleClass('blue', distanceFromTheTop >= 45 );
	$('body').toggleClass('rose', distanceFromTheTop >= 1200 );
	$('body').toggleClass('cubism', distanceFromTheTop >= 3000 );

	
	// 4. get body and remove colour if scrolling back up the page
	// 5. same actions again for other parts of the page


});




$('nav a').on('click', function(){

	var section = $(this).attr('href');
	// section = #blue/#rose/#cubism/about.html

	//  calculate the distance to scroll to using the offest top of the section we want
	var posOfSection = $(section).offset().top;

	// Animate our page down to that position
	$('html, body').animate({
		scrollTop:posOfSection
	}, 600, function(){
		//  this happens after we have scrolled.
	}

	});
})








