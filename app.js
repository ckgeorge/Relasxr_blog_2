
	$(document).ready(function() {
    var hiddenInfo = $(".hidden-info");
    var readMoreTrigger = $(".rm");
		//hide div .hidden-info
		hiddenInfo.hide();

	  readMoreTrigger.on("click", function(event){

	  	// 
		//toggle the hidden div
	    // hiddenInfo.toggle();

	    var hiddenElem = $(event.target).parent().find('.hidden-info');
	    $(hiddenElem).toggle();

			//toggle text in .hidden-info to 'Read Less', 'Read More'
      	if ($(event.target).text() == "Read More") {
        	$(event.target).text("Read less");
    	} else {
    		$(event.target).text("Read More");
    	}
		
    });
  });