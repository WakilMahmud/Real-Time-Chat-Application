import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useUser } from "../../provider/userProvider";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";
import { BACKEND_URL } from "../../api/api";
import { REGISTER, CHAT } from "../../routes/routePath";
import login from "../../assets/login.svg";
import Navbar from "../Shared/Navbar/Navbar";
const Login = () => {
	const { setUser } = useUser();

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
			fetch(`${BACKEND_URL}/api/Registration/login`, {
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
						navigate(`${CHAT}`);
						if (data.userName !== " ") localStorage.setItem("User", JSON.stringify({ Email: email, UserName: data.userName }));
						else localStorage.setItem("User", JSON.stringify({ Email: email, UserName: "Chat User" }));

						setUser(JSON.parse(localStorage.getItem("User")));

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
			<Navbar>2. Login Page</Navbar>
			<div className="flex justify-center items-center bg-gray-200  h-[calc(100vh-92px)]">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col lg:flex-row justify-between  gap-14 w-full lg:w-3/5 bg-gray-50 rounded  px-10 pt-12 pb-24"
				>
					<div className="flex flex-col w-full  lg:w-1/2 space-y-4">
						<h1 className="text-2xl font-bold">Login</h1>
						{errors.email && (
							<div className="flex items-center gap-1 text-sm text-red-600 mb-1">
								<HiOutlineExclamationTriangle className="text-red-600"></HiOutlineExclamationTriangle>Email is required
							</div>
						)}

						<div className="flex flex-col gap-2">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								id="email"
								placeholder="Enter your email address"
								className="input input-bordered input-info w-full  mr-2"
								{...register("email", { required: true })}
							/>
						</div>

						<input type="submit" className="btn-info hover:bg-blue-300 hover:cursor-pointer w-2/5 py-1 rounded" value="Login" />

						<div className="flex flex-col justify-start">
							<span className="text-sm">Not yet a member?</span>
							<Link to={REGISTER}>
								<button className="btn-link text-sm">Register Here</button>
							</Link>
						</div>
					</div>
					<div className="w-full lg:w-1/2">
						<img src={login} alt="Login Image" className="h-full" />
					</div>
				</form>
			</div>
		</>
	);
};

export default Login;
