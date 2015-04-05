/*global console,jQuery*/
jQuery(document).ready(function ($) {
	"use strict";
	
	var $width = $(document).width(),
		$sidebar = $('#wrapper-sidebar'),
		$core	= $('#wrapper-corecontent');
			
	    
	if ($width > 992) {
		console.log('Window size is greater than mobile device. Setting sidebar menu opened on initial state.');

		$('#wrapper-sidebar').addClass('open');
		$('#wrapper-corecontent').addClass('open');
		$('#sidebar-toggle').toggleClass('active');
	}
    
    $('#sidebar-toggle').click(function () {
	    var $element = $(this);
		
		if (!$sidebar.hasClass('animate')) {
			$sidebar.addClass('animate');
		}
		if (!$core.hasClass('animate')) {
			$core.addClass('animate');
		}
		
		$(this).toggleClass('active');
        $('#wrapper-sidebar').toggleClass('open');
        $('#wrapper-corecontent').toggleClass('open');
    });
});