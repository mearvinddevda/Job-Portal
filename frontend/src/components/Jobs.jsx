import React from "react";
import Navbar from "./ui/shared/Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";

const JobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

const Jobs = () => {
	return (
		<div>
			<Navbar />
			<div className="max-w-7xl mx-auto mt-5">
				<div className=" flex gap-5">
					<div className="w-20%">
						<FilterCard />
					</div>

					{JobsArray.length <= 0 ? (
						<span>Jobs Not Found </span>
					) : (
						<div className="flex-1 h-[88vh]">
							<div className="grid grid-cols-3 gap-4">
								{JobsArray.map((item, idx) => (
									<Job />
								))}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Jobs;
