import { TbHomeHeart } from "react-icons/tb";
import { GrSearch } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { RiMenu2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<header>
			<div className="flex flex-row justify-between items-center">
				<TbHomeHeart className="w-16 h-16 text-orange-200 cursor-pointer" />
				<div className="flex flex-row gap-10 2xl:gap-16 items-center">
					<nav>
						<ul className="hidden lg:flex flex-row items-center gap-5 xl:gap-10 font-semibold text-lg xl:text-xl 2xl:text-2xl 2xl:mr-10 text-orange-400 flex-grow">
							<Link
								to={"/"}
								className=" cursor-pointer hover:underline hover:text-pink-400 transition-all duration-300"
							>
								Home
							</Link>
							<Link
								to={"/products"}
								className=" cursor-pointer hover:underline hover:text-pink-400 transition-all duration-300"
							>
								Products
							</Link>
							<Link
								to={"/about"}
								className=" cursor-pointer hover:underline hover:text-pink-400 transition-all duration-300"
							>
								About
							</Link>
							<Link
								to={"/contact"}
								className=" cursor-pointer hover:underline hover:text-pink-400 transition-all duration-300"
							>
								Contact
							</Link>
						</ul>
					</nav>
					<div className="relative">
						<input
							type="text"
							className=" border-2 border-orange-200 outline-none rounded-full py-2 px-5 max-sm:hidden w-60 md:w-72 bg-peach-100 placeholder:text-orange-500 placeholder:font-medium "
							placeholder="Text here"
						/>
						<GrSearch className=" absolute right-3 bottom-2 w-7 h-7 text-orange-500 ml-10 max-sm:hidden cursor-pointer" />
					</div>
					<CgProfile className=" w-10 h-10 text-orange-500 max-lg:hidden cursor-pointer" />
					<RiMenu2Line className=" w-10 h-10 text-orange-500 lg:hidden cursor-pointer" />
				</div>
			</div>
		</header>
	);
};

export default Navbar;
