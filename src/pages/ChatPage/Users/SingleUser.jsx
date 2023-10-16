import { BiRadioCircle } from "react-icons/bi";
const SingleUser = ({ user }) => {
	return (
		<button className="btn my-1">
			<BiRadioCircle></BiRadioCircle>
			{user.userName}
		</button>
	);
};

export default SingleUser;
