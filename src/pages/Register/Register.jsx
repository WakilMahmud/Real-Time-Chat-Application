import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = async ({ email, firstName, lastName }) => {
		console.log(email, firstName, lastName);

		reset();
	};

	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col space-y-2 justify-center items-center  border  border-black rounded w-1/2 mx-auto my-32 h-80"
			>
				<input
					type="text"
					placeholder="Enter Email"
					className="input input-bordered input-info w-full max-w-xs mr-2"
					{...register("email", { required: true })}
				/>
				{errors.email && <span className="text-red-500">Email is required</span>}
				<input type="text" placeholder="First Name" className="input input-bordered input-info w-full max-w-xs mr-2" {...register("firstName")} />

				<input type="text" placeholder="Last Name" className="input input-bordered input-info w-full max-w-xs mr-2" {...register("lastName")} />

				<input type="submit" id="sendButton" className="btn btn-error w-full max-w-xs" />
				<div className="">
					<span className="text-sm">Already member?</span>
					<Link to="/login">
						<button className="btn btn-link text-sm">Login</button>
					</Link>
				</div>
			</form>
		</>
	);
};

export default Register;
