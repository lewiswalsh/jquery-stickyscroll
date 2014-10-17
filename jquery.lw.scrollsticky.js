/*****************************************
	Element must have a width set.
*****************************************/

(function($){ // anonymous function to wrap around your function to avoid conflict
    $.fn.extend({ // Attach this new method to jQuery

        //This is where you write your plugin's name
        scrollSticky: function(options){

			// Defaults values for options
			var defaults = {
				verticalPadding: 0
			};

			var options = $.extend(defaults, options); // Overwrite defaults with passed options

            if(options.verticalPadding < 0){
                options.verticalPadding = 0;
            }

            // Iterate over the current set of matched elements
            return this.each(function(){

				var obj        = $(this); // obj is the element the plugin is applied to
				var elementTop = obj.offset().top;

                // Bind our code to the scroll event
				$(window).bind('scroll', function(){
					if($(window).scrollTop() > elementTop){
                        obj.css({
                            position : 'fixed',
                            top      : options.verticalPadding
                        });
					} else {
                        obj.css({
                            position : '',
                            top      : ''
                        });
					}
				});

            });
        }

    });
})(jQuery);
// Pass jQuery to the function,
// So that we will able to use any valid Javascript variable name
// to replace "$" SIGN.
