import { FaCartShopping } from "react-icons/fa6";

const LeftHero = () => {
	return (
		<div className="flex flex-col gap-10 w-full lg:w-1/2">
			<h1 className=" text-pink-400 text-5xl sm:text-7xl font-bold font-sans">
				e-commerce Website
			</h1>
			<h3 className=" text-peach-200 text-4xl tracking-widest font-mono italic">
				Support Local Everything
			</h3>
			<p className=" text-lg pl-10 ml-2 border-l-4 border-pink-500 font-thin">
				Discover unbeatable deals on top brands at our online store! Shop now
				for exclusive offers, fast shipping, and a seamless shopping experience.
				Don't miss out!.{" "}
			</p>
			<div className="relative">
				<button className=" w-60 h-14 rounded-full bg-orange-400 text-white-300 cursor-pointer text-2xl font-medium hover:scale-105 transition-all duration-300 ease-in-out">
					Buy Now
				</button>
				<FaCartShopping className=" text-white-300 w-10 h-10 absolute bottom-1 left-3 " />
			</div>
		</div>
	);
};

export default LeftHero;
