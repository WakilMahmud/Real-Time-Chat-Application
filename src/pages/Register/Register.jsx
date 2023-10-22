// import { useForm } from "react-hook-form";
// import { HiOutlineExclamationTriangle } from "react-icons/hi2";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";
// import { BACKEND_URL } from "../../api/api";
// import { LOGIN } from "../../routes/routePath";

// const Register = () => {
// 	const {
// 		register,
// 		handleSubmit,
// 		reset,
// 		formState: { errors },
// 	} = useForm();

// 	const onSubmit = async ({ email, firstName, lastName }) => {
// 		// console.log(email, firstName, lastName);

// 		const newUser = { Email: email, UserName: firstName + " " + lastName };
// 		// console.log(newUser);

// 		if (email) {
// 			fetch(`${BACKEND_URL}/api/Registration/registration`, {
// 				method: "POST",
// 				headers: {
// 					"Content-Type": "application/json",
// 				},
// 				body: JSON.stringify(newUser),
// 			})
// 				.then((res) => {
// 					if (!res.ok) {
// 						throw new Error("Network response was not ok");
// 					}

// 					return res.json();
// 				})
// 				.then((data) => {
// 					if (data.statusCode == 201) {
// 						Swal.fire({
// 							icon: "success",
// 							title: "User Registered Successfully",
// 							showConfirmButton: false,
// 							timer: 1500,
// 						});
// 						reset();
// 					} else {
// 						Swal.fire({
// 							icon: "error",
// 							title: "Expectation Failed",
// 							showConfirmButton: false,
// 							timer: 1500,
// 						});
// 					}
// 				})
// 				.catch((err) => {
// 					Swal.fire({
// 						icon: "error",
// 						title: "Something went wrong",
// 						showConfirmButton: false,
// 						timer: 1500,
// 					});
// 					console.log("Error: ", err.message);
// 				});
// 		}
// 	};

// 	return (
// 		<div className="flex justify-center  items-center  bg-sky-200 h-[calc(100vh-92px)]">
// 			<form onSubmit={handleSubmit(onSubmit)} className="w-3/4 lg:w-2/5 space-y-1 lg:space-y-2">
// 				{errors.email && (
// 					<div className="flex items-center gap-1 text-xs lg:text-sm text-red-600 mb-1">
// 						<HiOutlineExclamationTriangle className="text-red-600"></HiOutlineExclamationTriangle>Email is required
// 					</div>
// 				)}
// 				<input
// 					type="email"
// 					placeholder="Enter Email"
// 					className="input input-bordered input-info w-full mr-2 "
// 					{...register("email", { required: true })}
// 				/>

// 				{errors.firstName && (
// 					<div className="flex items-center gap-1 text-xs lg:text-sm text-red-600 mb-1">
// 						<HiOutlineExclamationTriangle className="text-red-600"></HiOutlineExclamationTriangle>First Name is required
// 					</div>
// 				)}
// 				<input
// 					type="text"
// 					placeholder="First Name"
// 					className="input input-bordered input-info w-full  mr-2"
// 					{...register("firstName", { required: true })}
// 				/>

// 				{errors.lastName && (
// 					<div className="flex items-center gap-1 text-xs lg:text-sm text-red-600 mb-1">
// 						<HiOutlineExclamationTriangle className="text-red-600"></HiOutlineExclamationTriangle>Last Name is required
// 					</div>
// 				)}
// 				<input
// 					type="text"
// 					placeholder="Last Name"
// 					className="input input-bordered input-info w-full  mr-2"
// 					{...register("lastName", { required: true })}
// 				/>

// 				<input type="submit" className="btn btn-success hover:bg-green-300 w-full" value="Submit" />
// 				<div className="">
// 					<span className="text-sm">Already member?</span>
// 					<Link to={LOGIN}>
// 						<button className="btn btn-link text-sm">Login</button>
// 					</Link>
// 				</div>
// 			</form>
// 		</div>
// 	);
// };

// export default Register;
import { useForm } from "react-hook-form";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { BACKEND_URL } from "../../api/api";
import { LOGIN } from "../../routes/routePath";
import Register_Image from "../../assets/register.svg";

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
		<div className="flex justify-center items-center bg-gray-200  h-[calc(100vh-92px)]">
			<form onSubmit={handleSubmit(onSubmit)} className="w-3/5 bg-gray-50 rounded flex justify-between  gap-14 px-10 pt-12 pb-24">
				<div className="flex flex-col w-1/2 space-y-4">
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

					<input type="submit" className="btn-info hover:bg-green-300 w-28 py-1 rounded" value="Sign Up" />
					<div className="">
						<span className="text-sm mr-1">Already a member?</span>
						<Link to={LOGIN}>
							<button className="btn-link text-sm">Login Here</button>
						</Link>
					</div>
				</div>

				<div className="w-1/2">
					<img src={Register_Image} alt="Login Image" className="h-full" />
				</div>
			</form>
		</div>
	);
};

export default Register;

{
	/* <form onSubmit={handleSubmit(onSubmit)} className="w-3/5 bg-gray-50 rounded flex justify-between  gap-14 px-10 pt-12 pb-24">
	<div className="flex flex-col w-1/2 space-y-6">
		<h1 className="text-2xl font-bold">Login</h1>
		{errors.email && (
			<div className="flex items-center gap-1 text-sm text-red-600 mb-1">
				<HiOutlineExclamationTriangle className="text-red-600"></HiOutlineExclamationTriangle>Email is required
			</div>
		)}

		<div className="flex flex-col">
			<label htmlFor="Email" className="mb-2">
				Email
			</label>
			<input
				type="email"
				placeholder="Enter your email address"
				className="input input-bordered input-info w-full  mr-2"
				{...register("email", { required: true })}
			/>
		</div>
		<input type="submit" className="btn-info hover:bg-green-300 w-2/5 py-1 rounded" value="Login" />
		<div className="flex flex-col justify-start">
			<span className="text-sm">Not yet a member?</span>
			<Link to={REGISTER}>
				<button className="btn-link text-sm">Register Here</button>
			</Link>
		</div>
	</div>
	<div className="w-1/2">
		<img src={login} alt="Login Image" className="h-full" />
	</div>
</form>; */
}
