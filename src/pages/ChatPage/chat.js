/* eslint-disable no-undef */

"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl(`https://localhost:44370/chatHub`).configureLogging(signalR.LogLevel.Information).build();

connection.on("ReceiveMessage", function (user, message) {
	var li = document.createElement("li");
	document.getElementById("messagesList").appendChild(li);
	li.innerHTML = `<div class="chat chat-start">
				<div class="chat-image avatar">
					<div class="h-6">
						<img src="/person.svg" alt="Image" />
					</div>
				</div>
				<div class="chat-bubble"> <span class="text-green-300">${user} : </span> ${message}</div>
			</div>`;
});

// connection
// 	.start()
// 	.then(function () {
// 		console.log("SignalR Connected.");
// 	})
// 	.catch(function (err) {
// 		return console.error(err.toString());
// 	});
