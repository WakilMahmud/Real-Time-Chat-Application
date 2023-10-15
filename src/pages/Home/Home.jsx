/* eslint-disable no-undef */
import { useForm } from "react-hook-form";
import ChatBox from "../../components/ChatBox";
import { BACKEND_URL } from "../../api/api";

const Home = () => {
	// const connection = new signalR.HubConnectionBuilder().withUrl(`${BACKEND_URL}/chatHub`).configureLogging(signalR.LogLevel.Information).build();

	// const start = async () => {
	// 	try {
	// 		await connection.start();
	// 		console.log("SignalR Connected.");
	// 	} catch (err) {
	// 		console.log(err);
	// 		// setTimeout(start, 5000);
	// 	}
	// };

	// connection.onclose(async () => {
	// 	await start();
	// });

	// // Start the connection.
	// start();

	// const {
	// 	register,
	// 	handleSubmit,
	// 	reset,
	// 	formState: { errors },
	// } = useForm();

	// const onSubmit = async (data) => {
	// 	const usr = data.user;
	// 	const msg = data.message;
	// 	// console.log(usr);
	// 	// console.log(msg);

	// 	//if user is available, then user will join the chat (different from video)
	// 	try {
	// 		await connection.invoke("SendMessage", usr, msg);
	// 	} catch (err) {
	// 		console.error(err);
	// 	}

	// 	//notified message from server
	// 	await connection.on("ReceiveMessage", (user, message) => {
	// 		console.log(`${user} : ${message}`);
	// 	});

	// 	reset();
	// };

	return (
		<>
			{/* <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center bg-sky-200 h-56">
				<input
					type="text"
					id="userInput"
					placeholder="Enter Your Name"
					className="input input-bordered input-info w-full max-w-xs mr-2"
					{...register("user", { required: true })}
				/>
				{errors.user && <span className="text-red-500">This field is required</span>}
				<input
					type="text"
					id="messageInput"
					placeholder="Type Message"
					className="input input-bordered input-info w-full max-w-xs mr-2"
					{...register("message")}
				/>
				<input type="submit" id="sendButton" className="btn btn-error" />
			</form> */}

			<ChatBox></ChatBox>
		</>
	);
};

export default Home;
