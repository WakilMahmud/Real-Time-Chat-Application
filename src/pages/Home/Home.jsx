/* eslint-disable no-undef */
import { useForm } from "react-hook-form";
import ChatBox from "../../components/ChatBox";
import { BACKEND_URL } from "../../api/api";
import { BiSend } from "react-icons/bi";

const Home = () => {
	const connection = new signalR.HubConnectionBuilder().withUrl(`${BACKEND_URL}/chatHub`).configureLogging(signalR.LogLevel.Information).build();

	const start = async () => {
		try {
			await connection.start();
			console.log("SignalR Connected.");
		} catch (err) {
			console.log(err);
			// setTimeout(start, 5000);
		}
	};

	connection.onclose(async () => {
		await start();
	});

	// Start the connection.
	start();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = async ({ message }) => {
		console.log(message);

		// //if user is available, then user will join the chat (different from video)
		// try {
		// 	await connection.invoke("SendMessage", usr, msg);
		// } catch (err) {
		// 	console.error(err);
		// }

		// //notified message from server
		// await connection.on("ReceiveMessage", (user, message) => {
		// 	console.log(`${user} : ${message}`);
		// });

		reset();
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center bg-sky-200 h-56">
				<input
					type="text"
					id="userInput"
					placeholder="Message"
					className="input input-bordered input-info w-full max-w-xs mr-2"
					{...register("message", { required: true })}
				/>
				{errors.message && <span className="text-red-500">Empty Message</span>}

				<button className="btn btn-info">
					<BiSend className="text-2xl">
						<input type="submit" id="sendButton" className="btn btn-error" />
					</BiSend>
				</button>
			</form>

			<ChatBox></ChatBox>
		</>
	);
};

export default Home;
