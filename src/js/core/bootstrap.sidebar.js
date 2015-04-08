/*global console, jQuery*/
jQuery(document).ready(function ($) {
	"use strict";
    $(document).on('click', '#sidebar-toggle', null, function () {
		var $sidebar	= $('#container-sidebar'),
			$content	= $('#wrapper-content'),
			$button		= $('#sidebar-toggle');

		$button.toggleClass('active');
        $sidebar.toggleClass('sidebar-closed');
        $content.toggleClass('sidebar-closed');
    });
});
