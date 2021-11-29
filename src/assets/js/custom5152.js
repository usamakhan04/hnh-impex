// Rewritten version
// By @mathias, @cheeaun and @jdalton


(function(doc) {

var addEvent = 'addEventListener',
type = 'gesturestart',
qsa = 'querySelectorAll',
scales = [1, 1],
meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

function fix() {
meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
doc.removeEventListener(type, fix, true);
}

if ((meta = meta[meta.length - 1]) && addEvent in doc) {
fix();
scales = [.25, 1.6];
doc[addEvent](type, fix, true);
}

}(document));

(function($) {

    $.fn.splitWords = function(index) {
        /*
            If index is specified the sentence will split at that point
            (minus index counts from end). Otherwise sentence is split in two.
        */

        return this.each(function() {

            var el = $(this),
                i, first, words = el.text().split(/\s/);


            if (typeof index === 'number') {
                i = (index > 0) ? index : words.length + index;
            }
            else {
                i = Math.floor(words.length / 2);
            }

            first = words.splice(0, i);

            el.empty().
                append(makeWrapElem(1, first)).
                append(makeWrapElem(2, words));
        });
    };

    function makeWrapElem(i, wordList) {
  if (i != 1) {
         return $('<span class="wrap-' + i + '">' + wordList.join(' ') + ' </span>');
  } else {
   return $('<b>' + wordList.join(' ') + '</b> ');
  }
    }

}(jQuery));

jQuery(document).ready(function(){

jQuery("footer h3").splitWords(1);

// ---------------------------------------------------------
// Tabs
// ---------------------------------------------------------
jQuery(".tabs").each(function(){

		jQuery(this).find(".tab").hide();
		jQuery(this).find(".tab-menu li:first a").addClass("active").show();
		jQuery(this).find(".tab:first").show();

});

jQuery(".tabs").each(function(){

		jQuery(this).find(".tab-menu a").click(function() {

				jQuery(this).parent().parent().find("a").removeClass("active");
				jQuery(this).addClass("active");
				jQuery(this).parent().parent().parent().parent().find(".tab").hide();
				var activeTab = jQuery(this).attr("href");
				jQuery(activeTab).fadeIn();
				return false;

		});

});

jQuery('#top-search .search-trigger').click(function(){
	if (jQuery(this).next().hasClass('opened')) {
		jQuery(this).next().removeClass('opened').fadeOut('slow');
	} else {
		jQuery(this).next().addClass('opened').fadeIn('slow');
	}
})

// ---------------------------------------------------------
// Toggle
// ---------------------------------------------------------

jQuery(".toggle").each(function(){

		jQuery(this).find(".box").hide();

});

jQuery(".toggle").each(function(){

		jQuery(this).find(".trigger").click(function() {

				jQuery(this).toggleClass("active").next().stop(true, true).slideToggle("normal");

				return false;

		});

});




jQuery(".product_list_widget li").contents().filter(function(){ return this.nodeType != 1; }).wrap("<b/>").parent().parent().addClass('last_rate');

jQuery(".main-content-area .products li:nth-child(4n)").addClass("nomargin");

jQuery(".images .sub-pager a:first").addClass('cur')
// ---------------------------------------------------------
// Social Icons
// ---------------------------------------------------------




// ---------------------------------------------------------
// Back to Top
// ---------------------------------------------------------

// fade in #back-top
jQuery(function () {
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 100) {
			jQuery('#back-top').fadeIn();
		} else {
			jQuery('#back-top').fadeOut();
		}
	});

	// scroll body to 0px on click
	jQuery('#back-top a').click(function () {
		jQuery('body,html').stop(false, false).animate({
			scrollTop: 0
		}, 800);
		return false;
	});
});


});