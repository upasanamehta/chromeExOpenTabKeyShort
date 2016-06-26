chrome.commands.onCommand.addListener(function(command) {
 if(command == 'open facebook'){
 	//alert("open facebook");
	var facebookURL = "https://www.facebook.com/";
  chrome.tabs.create({ url: facebookURL });
}
else if(command == 'open youtube'){
	//alert("open youtube");
	var youtubeURL = "https://www.youtube.com/";
  chrome.tabs.create({ url: youtubeURL });
}
else if(command == 'open quora'){
	//alert("open quora");
	var quoraURL = "https://www.quora.com/";
  chrome.tabs.create({ url: quoraURL });
} 
});

  