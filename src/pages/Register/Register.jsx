import { useForm } from "react-hook-form";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { BACKEND_URL } from "../../api/api";
import { LOGIN } from "../../routes/routePath";

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
		<div className="flex justify-center  items-center  bg-sky-200 h-[calc(100vh-92px)]">
			<form onSubmit={handleSubmit(onSubmit)} className="w-3/4 lg:w-2/5 space-y-1 lg:space-y-2">
				{errors.email && (
					<div className="flex items-center gap-1 text-xs lg:text-sm text-red-600 mb-1">
						<HiOutlineExclamationTriangle className="text-red-600"></HiOutlineExclamationTriangle>Email is required
					</div>
				)}
				<input
					type="email"
					placeholder="Enter Email"
					className="input input-bordered input-info w-full mr-2 "
					{...register("email", { required: true })}
				/>

				{errors.firstName && (
					<div className="flex items-center gap-1 text-xs lg:text-sm text-red-600 mb-1">
						<HiOutlineExclamationTriangle className="text-red-600"></HiOutlineExclamationTriangle>First Name is required
					</div>
				)}
				<input
					type="text"
					placeholder="First Name"
					className="input input-bordered input-info w-full  mr-2"
					{...register("firstName", { required: true })}
				/>

				{errors.lastName && (
					<div className="flex items-center gap-1 text-xs lg:text-sm text-red-600 mb-1">
						<HiOutlineExclamationTriangle className="text-red-600"></HiOutlineExclamationTriangle>Last Name is required
					</div>
				)}
				<input
					type="text"
					placeholder="Last Name"
					className="input input-bordered input-info w-full  mr-2"
					{...register("lastName", { required: true })}
				/>

				<input type="submit" className="btn btn-success hover:bg-green-300 w-full" value="Submit" />
				<div className="">
					<span className="text-sm">Already member?</span>
					<Link to={LOGIN}>
						<button className="btn btn-link text-sm">Login</button>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Register;
