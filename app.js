
	$(document).ready(function() {
    var hiddenInfo = $(".hidden-info");
    var readMoreTrigger = $(".rm");
		//hide div .hidden-info
		hiddenInfo.hide(); 
	  readMoreTrigger.on("click", function(){
		//toggle the hidden div
	    hiddenInfo.toggle();
			//toggle text in .hidden-info to 'Read Less', 'Read More'
      if (readMoreTrigger.text() == "Read More")
        readMoreTrigger.text("Read less");
				else readMoreTrigger.text("Read More");
    });
  });