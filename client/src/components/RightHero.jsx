import Sofa from "/sofa.svg";

const RightHero = () => {
	return (
		<div className=" flex flex-col xl:flex-row max-xl:gap-10 max-xl:items-center xl:justify-around items-center w-full relative">
			<img
				src={Sofa}
				alt="Sofa"
				className=" lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] 2xl:w-[600px] 2xl:h-[600px] rounded-full"
			/>
			<span className=" w-32 500:w-40 h-14 flex justify-center items-center rounded-full text-lg 500:text-xl shadow-black bg-white-300 font-semibold text-orange-500 shadow-inner hover:cursor-pointer hover:translate-y-5 transition-all duration-500 ease-in-out absolute right-1 500:top-3 500:right-5 sm:right-10 sm:top-10 md:right-28 lg:right-10 lg:top-4 xl:right-40 xl:top-24 2xl:right-56 2xl:top-16">
				Minimalistic
			</span>
			<span className=" w-32 500:w-40 h-14 flex justify-center items-center rounded-full text-lg 500:text-xl shadow-black bg-white-300 font-semibold text-orange-500 shadow-inner hover:cursor-pointer hover:translate-y-5 transition-all duration-500 ease-in-out absolute top-64 left-1 500:top-80 md:left-24 md:top-96 lg:top-80 lg:left-5 xl:top-[420px] xl:left-1">
				Super Cozy !
			</span>
			<div className="flex flex-row max-xl:justify-around xl:flex-col lg:gap-5 xl:justify-center">
				<img
					src={Sofa}
					alt="Sofa"
					className=" rounded-full w-1/4 h-1/4 lg:w-24 lg:h-24 2xl:w-32 2xl:h-32 cursor-pointer"
				/>
				<img
					src={Sofa}
					alt="Sofa"
					className=" rounded-full w-1/4 h-1/4 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32 cursor-pointer"
				/>
				<img
					src={Sofa}
					alt="Sofa"
					className=" rounded-full w-1/4 h-1/4 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32 cursor-pointer"
				/>
			</div>
		</div>
	);
};

export default RightHero;
