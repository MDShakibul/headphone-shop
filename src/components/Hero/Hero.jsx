/* eslint-disable no-unused-vars */
import { easeInOut } from 'framer-motion';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Headphone1 from '../../assets/headphone.png';
import Headphone2 from '../../assets/headphone2.png';
import Headphone3 from '../../assets/headphone3.png';

const fadeUp = (delay) => {
	return {
		hidden: {
			opacity: 0,
			y: 100,
			scale: 0.5,
		},
		show: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				duration: 0.5,
				delay: delay,
				ease: easeInOut,
			},
		},
		exit: {
			opacity: 0,
			y: 50,
			scale: 0.5,
			transition: {
				duration: 0.2,
				ease: easeInOut,
			},
		},
        
	};
};

const headphoneData = [
	{
		id: 1,
		image: Headphone1,
		title: 'Headphones Wireless',
		subtitle:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos',
		price: '$100',
		model: 'Model Brown',
		bgColor: '#8b5958',
	},
	{
		id: 2,
		image: Headphone2,
		title: 'Headphones Wireless 2',
		subtitle:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos',
		price: '$100',
		model: 'Lime Green',
		bgColor: '#638153',
	},
	{
		id: 3,
		image: Headphone3,
		title: 'Headphones Wireless 3',
		subtitle:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos',
		price: '$100',
		model: 'Ocean Blue',
		bgColor: '#5d818c',
	},
];

const Hero = () => {
	const [activeData, setActiveData] = useState(headphoneData[0]);
	const handleActiveData = (data) => {
		setActiveData(data);
	};
	return (
		<>
			<section className="bg-brandDark text-white font-varela">
				<div className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
					{/* ------- Headphone Info ------- */}
					<div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]">
						<div className="space-y-5 text-center md:text-left">
							<h1 className="text-3xl lg:text-6xl font-bold font-varela">
								{activeData?.title}
							</h1>
							<p className="text-sm text-white leading-loose text-white/80">
								{activeData?.subtitle}
							</p>
							<button
								style={{ backgroundColor: activeData?.bgColor }}
								className="px-4 py-2 inline-block font-normal rounded-sm"
							>
								Buy and Listen
							</button>

							{/* ------- Headphone  Lists ------- */}
							<div className="flex justify-center items-center md:justify-start gap-4 !mt-24">
								<div className="w-20 h-[1px] bg-white"></div>
								<p className="uppercase text-sm">Top Headphones for you</p>
								<div className="w-20 h-[1px] bg-white"></div>
							</div>

							{/* ------- Headephone list switcher ------- */}
							<div className="grid grid-cols-3 gap-10">
								{headphoneData.map((item) => {
									return (
										<div
											key={item?.id}
											className="grid grid-cols-2 place-items-center cursor-pointer"
											onClick={() => handleActiveData(item)}
										>
											<div>
												<img
													src={item?.image}
													alt={item?.title}
													className="w-[200px]"
												/>
											</div>
											<div className="space-y-2">
												<p className="text-base font-bold">{item.price}</p>
												<p className="text-xs font-normal text-nowrap">
													{item.model}
												</p>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
					{/* ------- Hero Image ------- */}
					<div className="flex flex-col justify-end items-center">
						<img
							src={activeData?.image}
							alt={activeData?.title}
							className="w-[300px] md:w-[400px] xl:w-[550px]"
						/>
					</div>
					{/* ------- WhatsApp Icon ------- */}

					<div className="text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference">
						<a href="">
							<FaWhatsapp />
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
