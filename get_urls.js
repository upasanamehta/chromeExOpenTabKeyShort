chrome.commands.onCommand.addListener(function(command) {
	if(command == 'open facebook'){
 	
 		chrome.tabs.query({title: "*Facebook*"}, function(tabs){
   if (tabs.length){
       console.log("found");
       chrome.windows.update(tabs[0].windowId , {focused : true } , function(){
       	chrome.tabs.update(tabs[0].id, {selected: true});
       });
       
   }
    else {
       var facebookURL = "https://www.facebook.com/";
       chrome.windows.getLastFocused({}, function(window){
        console.log(window.id);
        chrome.windows.update(window.id , {focused : true } , function(){
          chrome.tabs.create({ url: facebookURL });
        });

       });
       
   }
});
	}
	else if(command == 'open youtube'){

        chrome.tabs.query({title: "*YouTube*"}, function(tabs){
            if (tabs.length){
                console.log("found");
                chrome.windows.update(tabs[0].windowId , {focused : true } , function(){
                chrome.tabs.update(tabs[0].id, {selected: true});
            });
            }
            else {
                var youtubeURL = "https://www.youtube.com/";
                chrome.windows.getLastFocused({}, function(window){
        console.log(window.id);
        chrome.windows.update(window.id , {focused : true } , function(){
          chrome.tabs.create({ url: youtubeURL });
        });

       });
                
            }
        });

    }
		else if(command == 'open quora'){
				
 		chrome.tabs.query({title: "*Quora*"}, function(tabs){
   if (tabs.length){
       console.log("found");
       chrome.windows.update(tabs[0].windowId , {focused : true } , function(){
       chrome.tabs.update(tabs[0].id, {selected: true});
   });
   }
    else {
       var quoraURL = "https://www.quora.com/";
       chrome.windows.getLastFocused({}, function(window){
        console.log(window.id);
        chrome.windows.update(window.id , {focused : true } , function(){
          chrome.tabs.create({ url: quoraURL });
        });

       });
       
   }
});
} 

});

