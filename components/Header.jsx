import Image from "next/image";
import {
	HeartIcon,
	HomeIcon,
	MenuIcon,
	PaperAirplaneIcon,
	PlusCircleIcon,
	SearchIcon,
	UserGroupIcon,
} from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
const Header = () => {
	const { data: session, status } = useSession()
	return (
		<div className="shadow-sm border-b bg-white sticky top-0 z-50">
			{/* Left */}
			<div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
				<div className="relative w-24 hidden lg:inline-grid cursor-pointer">
					<Image
						src="https://links.papareact.com/ocw"
						layout="fill"
						objectFit="contain"
					/>
				</div>
				<div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
					<Image
						src="https://links.papareact.com/jjm"
						layout="fill"
						objectFit="contain"
					/>
				</div>
				{/* Middle */}
				<div className="max-w-sm">
					<div className="mt-1 relative p-3 rounded-md">
						<div className="absolute inset-y-0 flex items-center pointer-events-none">
							<SearchIcon className="h-5 w-5 text-gray-500 pl-1" />
						</div>
						<input
							type="text"
							placeholder="Search"
							className="bg-gray-50 block w-full pl-10 sm:text-sm 
						border-gray-300 focus:ring-black focus:border-black 
						rounded-md"
						/>
					</div>
				</div>

				{/* Right */}
				<div className="flex items-center justify-end space-x-4">
					<HomeIcon className="navBtn" />
					<MenuIcon className="h-6 md:hidden cursor-pointer" />
					{session ? (
					<><div className="relative navBtn">
							<PaperAirplaneIcon className="navBtn rotate-45" />
							<div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
								3
							</div>
						</div><PlusCircleIcon className="navBtn" /><UserGroupIcon className="navBtn" /><HeartIcon className="navBtn" /><img
								src={session?.user?.image}
								alt="Profile Pic"
								className="h-10 rounded-full cursor-pointer" /></>   
					) : null}

				</div>
			</div>
		</div>
	);
};

export default Header;
