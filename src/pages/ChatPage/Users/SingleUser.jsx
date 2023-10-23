const SingleUser = ({ user, setDirectUser }) => {
	const handleUser = (name) => {
		// console.log(name);
		setDirectUser(name);
	};
	return (
		<button className="border btn-block border-gray-300 flex justify-start px-4  focus:bg-blue-200 " onClick={() => handleUser(user?.userName)}>
			<p>{user?.userName}</p>
		</button>
	);
};

export default SingleUser;
