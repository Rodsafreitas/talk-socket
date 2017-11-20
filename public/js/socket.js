socket.on('new messages io', function(data){
  update(`<br /> ${data.username} : ${data.message}`);
});

socket.on('show users', function(data){
  update(`<br /> Novo integrante: ${data.username}`);
});


function sendMessage() {
  if($messageInput.val() != ""){
    socket.emit('new messages', {
      username: nome_usuario,
      messages: $messageInput.val()
  });
    reset();
  }
}

function joinChat(){
    nome_usuario = $userName.val();
    socket.emit('new user', nome_usuario);
    $loginPage.fadeOut();
    $chatPage.show();
    $userName.val("");
    reset();
}

function reset(){
    $messageInput.val("");
    $messageInput.focus();
}