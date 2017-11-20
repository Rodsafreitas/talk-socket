var $loginPage = $('.login');
var $chatPage = $('.chat.page');
var $userName = $('.userName');
var $messageHistory = $('#messages_history');
var $messageInput = $('#messageInput');
var $window = $(window);
var $chatLogin = $('#chatlogin');
var $sendMessage = $('#send_message');
var $usersTotal = $('#users');
var nome_usuario;
$userName.focus();

var socket = io();

function update($text){
	$messageHistory.append($text);
}

