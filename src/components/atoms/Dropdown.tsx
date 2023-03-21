import React, { useState, useRef, useEffect } from "react";

const Dropdown = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState("Select Role");
	const options = ["Author", "Administrator"];
	const ref = useRef<HTMLDivElement>(null);

	const handleOutsideClick = (event: MouseEvent) => {
		if (ref.current && !ref.current.contains(event.target as Node)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleOutsideClick);
		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, []);

	return (
		<div className="relative inline-block" ref={ref}>
			<p>Role</p>
			<div>
				<button
					className="bg-white rounded-md w-[344px] h-[50px] text-sm font-semibold text-gray-700 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-left border border-black pl-2 "
					onClick={() => setIsOpen(!isOpen)}
				>
					{selectedOption}
					<svg
						className={`absolute top-0 right-0 h-5 w-5 mt-10 mr-3 transition-transform duration-300 ${
							isOpen ? "transform rotate-180" : ""
						}`}
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path fillRule="evenodd" d="M10 14l6-6H4z" />
					</svg>
				</button>
			</div>

			{isOpen && (
				<div className="origin-top-right absolute right-0 w-[344px] h-[50px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
					<div className="py-1">
						{options.map((option, index) => (
							<button
								key={option}
								onClick={() => {
									setSelectedOption(option);
									setIsOpen(false);
								}}
								className={`block w-full h-[50px] text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-left ${
									index === 0 ? "border-t" : ""
								} ${index === options.length - 1 ? "border-b" : ""}`}
							>
								{option}
							</button>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Dropdown;
