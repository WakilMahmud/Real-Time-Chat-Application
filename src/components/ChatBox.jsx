/* eslint-disable no-undef */
import { HiOutlineUser, HiUser } from "react-icons/hi";
import { BiSend } from "react-icons/bi";
import { BACKEND_URL } from "../api/api";
import { useForm } from "react-hook-form";

const ChatBox = () => {
	const currentUserObj = JSON.parse(localStorage.getItem("User"));
	// console.log(currentUserObj);
	// const [loggedUser, setLoggedUser] = useState(currentUser.UserName);

	// const [chats, setChats] = useState([]);
	// const [currentMessage, setCurrentMessage] = useState("");

	const connection = new signalR.HubConnectionBuilder().withUrl(`${BACKEND_URL}/chatHub`).configureLogging(signalR.LogLevel.Information).build();

	const start = async () => {
		try {
			await connection.start();
			console.log("SignalR Connected.");
		} catch (err) {
			console.log(err);
			// setTimeout(start, 1000);
		}
	};

	const joinUser = async () => {
		// console.log(currentUserObj.UserName);
		const name = currentUserObj.UserName;

		if (name) {
			await joinChat(name);
		}
	};

	const joinChat = async (user) => {
		if (!user) return;
		try {
			const message = `${user} joined`;
			await connection.invoke("JoinChat", user, message);
		} catch (error) {
			console.log(error);
		}

		try {
			await receiveMessage();
		} catch (error) {
			console.log(error);
		}

		// try {
		// 	await connection.invoke("JoinChat", currentUserObj.UserName, currentMessage);
		// 	console.log(`${currentUser.UserName} has joined`);
		// } catch (err) {
		// 	console.error(err);
		// }
	};

	const receiveMessage = async () => {
		const currentUser = currentUserObj.UserName;
		if (!currentUser) return;
		// try {
		// 	await connection.on("ReceiveMessage", (user, message) => {
		// 		const messageClass = currentUser === user ? "send" : "received";
		// 		appendMessage(message, messageClass);
		// 		const alertSound = new Audio("chat-sound.mp3");
		// 		alertSound.play();
		// 	});
		// } catch (error) {
		// 	console.log(error);
		// }

		try {
			await connection.on("ReceiveMessage", (user, message) => {
				console.log(`${user} : ${message}`);
			});
		} catch (err) {
			console.error(err);
		}
	};

	const sendMessage = async (user, message) => {
		try {
			await connection.invoke("SendMessage", user, message);
		} catch (error) {
			console.log(error);
		}
	};

	// starting the app
	const startApp = async () => {
		await start();
		await joinUser();
	};

	startApp();

	// connection.onclose(async () => {
	// 	await start();
	// });

	//start the connection
	// start();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = async ({ message }) => {
		// setCurrentMessage(message);
		const currentUser = currentUserObj.UserName;
		if (!currentUser) return;

		if (message) {
			await sendMessage(currentUser, message);
			reset();
			try {
				await receiveMessage();
			} catch (error) {
				console.log(error.message);
			}
		}
	};

	return (
		<div className="w-full h-[calc(100vh-93px)] bg-gray-200 relative">
			<div className="chat chat-start">
				<div className="chat-image avatar">
					<div className="text-black text-2xl">
						<HiOutlineUser></HiOutlineUser>
					</div>
				</div>

				<div className="chat-bubble">You were the Chosen One!</div>
			</div>
			<div className="chat chat-end">
				<div className="chat-image avatar">
					<div className="text-black text-2xl">
						<HiUser></HiUser>
					</div>
				</div>

				<div className="chat-bubble">I hate you!</div>
			</div>

			<form onSubmit={handleSubmit(onSubmit)} className="flex justify-center absolute bottom-4 w-full">
				<input
					type="text"
					placeholder="Enter Message"
					className="input input-bordered input-info w-4/5 mr-2 text-black"
					{...register("message", { required: true })}
				/>
				{errors.message && <span className="text-red-500">Empty Message</span>}

				<button className="btn btn-info">
					<BiSend className="text-2xl">
						<input type="submit" id="sendButton" className="btn btn-error" />
					</BiSend>
				</button>
			</form>
		</div>
	);
};

export default ChatBox;
