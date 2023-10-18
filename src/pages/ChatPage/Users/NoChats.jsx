import { HiOutlineCursorClick } from "react-icons/hi";

const NoChats = () => {
	return (
		<div className="w-full h-[calc(100vh-93px)] bg-gray-200">
			<div className="flex flex-col justify-center items-center h-full">
				<HiOutlineCursorClick className="text-9xl text-purple-600"></HiOutlineCursorClick>
				<h1 className="text-3xl lg:text-5xl font-bold">No Users Selected</h1>
			</div>
		</div>
	);
};

export default NoChats;
