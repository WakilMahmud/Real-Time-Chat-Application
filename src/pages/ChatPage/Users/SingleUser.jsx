import { BiRadioCircle } from "react-icons/bi";
const SingleUser = ({ user }) => {
	return (
		<div className="w-full lg:w-72">
			<button className="btn btn-block my-1 flex justify-start">
				<BiRadioCircle></BiRadioCircle>
				<p>{user.userName}</p>
			</button>
		</div>
	);
};

export default SingleUser;
