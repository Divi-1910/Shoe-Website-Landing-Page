import React from "react";
import Button from "../Components/Button";
import {shoe8} from "../assets/images";

const SuperQuality = () => {
	return (
		<section
			id="about-us"
			className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
			<div className="flex flex-1 flex-col">
				<h2 className="font-palanquin text-4xl capitalize  font-bold lg:max-w-lg">
					We Provide you
					<span className="text-coral-red"> Super </span>
					<span className="text-coral-red"> Quality </span>
					Shoes
					<br />
				</h2>
				<p className="mt-4 lg:max-w-lg info-text">
					Ensuring Premium Comfort And Style , Our Meticulously Crafted Footwear
					Is Designed To Elevate Your Experience , Providing You With Unmatched
					Quality , Innovation And A Touch Of Elegance
				</p>

				<p className="mt-6 lg:max-w-lg info-text">
					Our Dedication to detail and excellence ensures your satisfaction
				</p>

				<div className="mt-11">
					<Button label="View Details" />
				</div>
			</div>

			<div className="flex-1 flex justify-center items-center">
				<img
					src={shoe8}
					alt="product detail"
					width={570}
					height={522}
					className="object-contain"
				/>
			</div>
		</section>
	);
};

export default SuperQuality;
