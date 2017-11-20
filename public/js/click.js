$('form').submit(function(){
  sendMessage();
  return false;
});

$chatLogin.click(() => {
	joinChat();
	
});

$sendMessage.click(function(event) {
	event.preventDefault();
	sendMessage();
});

$userName.keydown(function(event) {
	if(event.keyCode == 13)
		joinChat();
	
});