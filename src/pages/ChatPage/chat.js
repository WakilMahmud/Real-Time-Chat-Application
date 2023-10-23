/* eslint-disable no-undef */

"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl(`https://localhost:44370/chatHub`).configureLogging(signalR.LogLevel.Information).build();

const currentUser = JSON.parse(localStorage.getItem("User"));

connection.on("ReceiveMessage", function (user, message) {
	console.log(user, message);
	var li = document.createElement("li");
	document.getElementById("messagesList").appendChild(li);
	li.innerHTML = `<div class="chat ${currentUser.UserName == user ? "chat-start" : "chat-end"}"}>
					<div class="chat-bubble ${currentUser.UserName == user ? "bg-blue-700" : "bg-green-700"}">${message}</div>
					</div>`;
});
