import { useForm } from "react-hook-form";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { BACKEND_URL } from "../../api/api";
import { LOGIN } from "../../routes/routePath";
import Register_Image from "../../assets/register.svg";
import Navbar from "../Shared/Navbar/Navbar";

const Register = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = async ({ email, firstName, lastName }) => {
		// console.log(email, firstName, lastName);

		const newUser = { Email: email, UserName: firstName + " " + lastName };
		// console.log(newUser);

		if (email) {
			fetch(`${BACKEND_URL}/api/Registration/registration`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newUser),
			})
				.then((res) => {
					if (!res.ok) {
						throw new Error("Network response was not ok");
					}

					return res.json();
				})
				.then((data) => {
					if (data.statusCode == 201) {
						Swal.fire({
							icon: "success",
							title: "User Registered Successfully",
							showConfirmButton: false,
							timer: 1500,
						});
						reset();
					} else {
						Swal.fire({
							icon: "error",
							title: "Expectation Failed",
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
			<Navbar>1. Register Page</Navbar>
			<div className="flex justify-center items-center bg-gray-200  h-[calc(100vh-92px)]">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col lg:flex-row justify-between  gap-14 w-full lg:w-3/5 bg-gray-50 rounded px-10 py-12"
				>
					<div className="flex flex-col w-full lg:w-1/2 space-y-4">
						<h1 className="text-2xl font-bold">Register</h1>
						<div className="space-y-2">
							<label htmlFor="email">Email</label>
							{errors.email && (
								<div className="flex items-center gap-1 text-xs lg:text-sm text-red-600 mb-1">
									<HiOutlineExclamationTriangle className="text-red-600"></HiOutlineExclamationTriangle>Email is required
								</div>
							)}
							<input
								type="email"
								id="email"
								placeholder="Enter your email address"
								className="input input-bordered input-info w-full mr-2 "
								{...register("email", { required: true })}
							/>
						</div>

						<div className="space-y-2">
							<label htmlFor="firstName">First Name</label>
							{errors.firstName && (
								<div className="flex items-center gap-1 text-xs lg:text-sm text-red-600 mb-1">
									<HiOutlineExclamationTriangle className="text-red-600"></HiOutlineExclamationTriangle>First Name is required
								</div>
							)}

							<input
								type="text"
								id="firstName"
								placeholder="Enter your first name"
								className="input input-bordered input-info w-full  mr-2"
								{...register("firstName", { required: true })}
							/>
						</div>

						<div className="space-y-2">
							<label htmlFor="lastName">Last Name</label>
							{errors.lastName && (
								<div className="flex items-center gap-1 text-xs lg:text-sm text-red-600 mb-1">
									<HiOutlineExclamationTriangle className="text-red-600"></HiOutlineExclamationTriangle>Last Name is required
								</div>
							)}
							<input
								type="text"
								id="lastName"
								placeholder="Enter your last name"
								className="input input-bordered input-info w-full  mr-2"
								{...register("lastName", { required: true })}
							/>
						</div>

						<input type="submit" className="btn-info hover:bg-blue-300 hover:cursor-pointer w-28 py-1 rounded" value="Sign Up" />
						<div className="">
							<span className="text-sm mr-1">Already a member?</span>
							<Link to={LOGIN}>
								<button className="btn-link text-sm">Login Here</button>
							</Link>
						</div>
					</div>

					<div className="w-full lg:w-1/2">
						<img src={Register_Image} alt="Login Image" className="h-full" />
					</div>
				</form>
			</div>
		</>
	);
};

export default Register;
