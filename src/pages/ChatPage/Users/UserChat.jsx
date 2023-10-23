import { useEffect } from "react";
import { HiTrash } from "react-icons/hi";
import Swal from "sweetalert2";
const UserChat = ({ directUser }) => {
	useEffect(() => {
		document.getElementById("messagesList").textContent = "";
	}, [directUser]);

	const handleClick = () => {
		Swal.fire({
			title: "Delete Chat?",
			text: "This cannot be undone. You will lose all chats with this user.",
			icon: "question",
			showCancelButton: true,
			confirmButtonColor: "#d33",
			cancelButtonColor: "#5a5a5a",
			confirmButtonText: "Yes, Delete",
			cancelButtonText: "Don't Delete",
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire("Deleted!", "Your file has been deleted.", "success");
			}
		});
	};

	return (
		<>
			{directUser && (
				<>
					<div className="border border-gray-300 p-2 flex justify-start items-center">
						{directUser && (
							<div className="w-full flex justify-between items-center">
								<p className="text-xl font-semibold">{directUser}</p>
								<button onClick={handleClick}>
									<HiTrash className="text-red-500"></HiTrash>
								</button>
							</div>
						)}
					</div>

					<div>
						<ul id="messagesList" className="px-4"></ul>
					</div>
				</>
			)}
		</>
	);
};

export default UserChat;
