import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = async ({ email }) => {
		console.log(email);
		reset();
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center bg-sky-200 h-56">
				<div className="flex flex-col">
					<div className="flex">
						<input
							type="text"
							placeholder="Enter Email"
							className="input input-bordered input-info w-full max-w-xs mr-2"
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
