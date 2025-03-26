import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
const UserHome = () => {
	const [pickupLocation, setPickupLocation] = useState("");
	const [destination, setDestination] = useState("");
	const [openPanel, setOpenPanel] = useState(false);
	const panelRef = useRef(null);
	const arrowRef = useRef(null);
	const submitHandler = (e) => {
		e.preventDefault();
	};
	useGSAP(
		function () {
			if (openPanel) {
				gsap.to(panelRef.current, {
					height: "70%",
				});
				gsap.to(arrowRef.current, {
					opacity: 1,
				});
			} else {
				gsap.to(panelRef.current, {
					height: "0%",
				});
				gsap.to(arrowRef.current, {
					opacity: 0,
				});
			}
		},
		[openPanel]
	);
	return (
		<div className="w-screen h-screen ">
			<img
				className="w-1/3 ml-5 absolute top-0 left-0"
				src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n"
				alt="uber logo"
			/>
			<div className="w-screen h-screen">
				<img
					className="w-full h-full"
					src="https://imgs.search.brave.com/zP_AcfQVDRJoftJJh0BqOtIa5lKArDZtWkkPW_Ys6tc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saDMu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL1hr/MnhpbWhlQmgySk1Q/d0FrcUVsbmZ1a25U/LVkyX01BN0NNZ01V/ekxfOVhMYXBheHNl/V1pvQVFvaHozcDBG/UXduSWxZNFdDSm9C/LUZNV1VhaE5wVHpN/TFBmRzJPZkN1cmUy/NHBHV0FDPXc2Mzg"
					alt=""
				/>
			</div>
			<div className="absolute bottom-0 left-0 w-full h-screen flex flex-col justify-end overflow-hidden">
				<div className="bg-white w-full p-5 h-[30%] relative">
					<div className="line absolute bg-black rounded-lg w-1 h-1/3 left-10 top-[45%]"></div>
					<i
						ref={arrowRef}
						className="ri-arrow-down-wide-line absolute right-5 top-5 text-2xl opacity-0"
						onClick={() => setOpenPanel(false)}
					></i>
					<form onSubmit={submitHandler} className="flex flex-col  w-full">
						<label className="font-semibold text-2xl mb-3">Find a trip</label>
						<input
							className="w-full pl-[4.5rem] py-3 bg-[#eee] rounded-lg mb-3 text-md"
							type="text"
							placeholder="Enter your pickup location"
							value={pickupLocation}
							onChange={(e) => setPickupLocation(e.target.value)}
							onClick={() => setOpenPanel(true)}
						/>
						<input
							className="w-full pl-[4.5rem] py-3 bg-[#eee] rounded-lg mb-3 text-md"
							type="text"
							placeholder="Enter your destination"
							value={destination}
							onChange={(e) => setDestination(e.target.value)}
							onClick={() => setOpenPanel(true)}
						/>
					</form>
				</div>
				<div ref={panelRef} className="bg-white w-full h-[0%]">
					<LocationSearchPanel />
				</div>
			</div>
			<div className="bg-white w-full fixed  bottom-0 flex flex-col justify-between p-2 gap-3  transform translate-y-full">
				<h3 className="font-semibold text-2xl mb-2">Choose your Ride</h3>
				<div className="flex py-3 px-2 justify-between border-2 active:border-black rounded-xl">
					<img
						className="w-1/4"
						src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1569352630/assets/4b/28f11e-c97b-495a-bac1-171ae9b29362/original/BlackSUV.png"
						alt=""
					/>
					<div className="flex flex-col w-1/2">
						<span className="px-2 font-semibold text-xl flex items-center">
							Car <i className="ri-user-fill text-sm px-1 mt-1">4</i>
						</span>
						<span className="px-2 font-normal text-sm">2 mins Away</span>
						<span className="px-2 font-thin text-xs">
							Affordable, compact rides
						</span>
					</div>
					<div className="text-2xl font-bold">193₹</div>
				</div>
				<div className="flex py-3 px-2 justify-between border-2 active:border-black rounded-xl">
					<img
						className="w-1/4"
						src="https://imgs.search.brave.com/5YtD_EbRX6gxSUJYM4fhVhg9QfSDsbpDYoJuY_bQQtI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dWJlci1hc3NldHMu/Y29tL2ltYWdlL3Vw/bG9hZC9mX2F1dG8s/cV9hdXRvOmVjbyxj/X2ZpbGwsaF8zNjgs/d181NTIvdjE2NDky/MzEwOTEvYXNzZXRz/LzJjLzdmYTE5NC1j/OTU0LTQ5YjItOWM2/ZC1hM2I4NjAxMzcw/ZjUvb3JpZ2luYWwv/VWJlcl9Nb3RvX09y/YW5nZV8zMTJ4MjA4/X3BpeGVsc19Nb2Jp/bGUucG5n"
						alt=""
					/>
					<div className="flex flex-col w-1/2">
						<span className="px-2 font-semibold text-xl flex items-center">
							Bike <i className="ri-user-fill text-sm px-1 mt-1">1</i>
						</span>
						<span className="px-2 font-normal text-sm">2 mins Away</span>
						<span className="px-2 font-thin text-xs">
							Affordable, compact rides
						</span>
					</div>
					<div className="text-2xl font-bold">68₹</div>
				</div>
				<div className="flex py-3 px-2 justify-between border-2 active:border-black rounded-xl">
					<img
						className="w-1/4"
						src="https://imgs.search.brave.com/M80ekhuOQtpOR99O0a2encmAioFbRriXRfpucXVNIkI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL2F1dG8tcmlj/a3NoYXctcG5nLXJp/Y2tzaGF3LWluZGlh/LXRyYW5zcG9ydC10/YXhpLWFzaWFuLWF1/dG9yaWNrc2hhdy05/NjAucG5n"
						alt=""
					/>
					<div className="flex flex-col w-1/2">
						<span className="px-2 font-semibold text-xl flex items-center">
							Auto <i className="ri-user-fill text-sm px-1 mt-1">3</i>
						</span>
						<span className="px-2 font-normal text-sm">2 mins Away</span>
						<span className="px-2 font-thin text-xs">
							Affordable, compact rides
						</span>
					</div>
					<div className="text-2xl font-bold">110₹</div>
				</div>
			</div>
		</div>
	);
};

export default UserHome;
