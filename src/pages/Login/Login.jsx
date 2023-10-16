import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = async ({ email }) => {
		// console.log(email);
		if (email) {
			fetch("https://localhost:44370/api/Registration/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ Email: email }),
			})
				.then((res) => {
					if (!res.ok) {
						throw new Error("Network response was not ok");
					}

					return res.json();
				})
				.then((data) => {
					if (data.statusCode == 302) {
						// Swal.fire({
						// 	icon: "success",
						// 	title: "Valid User",
						// 	showConfirmButton: false,
						// 	timer: 1500,
						// });
						navigate("/chat");
						if (data.userName !== " ") localStorage.setItem("User", JSON.stringify({ Email: email, UserName: data.userName }));
						else localStorage.setItem("User", JSON.stringify({ Email: email, UserName: "Chat User" }));
						reset();
					} else {
						Swal.fire({
							icon: "error",
							title: "Unauthorized",
							showConfirmButton: false,
							timer: 1500,
						});
					}
				})
				.catch((err) => {
					Swal.fire({
						icon: "error",
						title: "Something went wrong",
						showConfirmButton: false,
						timer: 1500,
					});
					console.log("Error: ", err.message);
				});
		}
	};
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center bg-sky-200 h-56">
				<div className="flex flex-col w-2/5">
					<div className="flex">
						<input
							type="email"
							placeholder="Enter Email"
							className="input input-bordered input-info w-full  mr-2"
							{...register("email", { required: true })}
						/>
						{errors.email && <span className="text-sm text-red-500">Email is required</span>}
						<input type="submit" className="btn btn-error" value="Start Chat" />
					</div>

					<div className="">
						<span className="text-sm">Not a member?</span>
						<Link to="/register">
							<button className="btn btn-link text-sm">Register</button>
						</Link>
					</div>
				</div>
			</form>
		</>
	);
};

export default Login;
