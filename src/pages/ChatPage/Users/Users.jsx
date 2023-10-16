import SingleUser from "./SingleUser";

const Users = ({ users }) => {
	console.log(users);
	return (
		<div className="flex justify-around">
			<div className="border border-black w-1/4 ps-4 pt-4 flex flex-col items-start">
				<h1 className="font-semibold text-3xl">Users</h1>
				{users?.map((user, index) => (
					<SingleUser key={index} user={user}></SingleUser>
				))}
			</div>
			<div className="w-3/5">
				<h2 className="card-title">New album is released!</h2>
				<p>Click the button to listen on Spotiwhy app.</p>
				<div className="card-actions justify-end">
					<button className="btn btn-primary">Listen</button>
				</div>
			</div>
		</div>
	);
};

export default Users;
