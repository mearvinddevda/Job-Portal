import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

const filterData = [
	{
		filterType: "Location",
		array: ["Pune", "Banglore", "Mumbai", "Hyderabad", "Indore"],
	},
	{
		filterType: "Industry",
		array: ["Frontend-Developer", "Backend Developer", "FullStack Developer"],
	},
	{
		filterType: "Salary",
		array: ["0-40K", "42 - 1lakh", "1lakh to 5 lakh"],
	},
];

const FilterCard = () => {
	return (
		<div className="w-full bg-white p-3 rounded-md">
			<h1 className="font-bold text-lg" >Filter Jobs</h1>
			<hr className="mt-3" />
			<RadioGroup>
				{filterData.map((data, idx) => (
					<div className="" key={idx}>
						<h1 className="font-bold" >{data.filterType}</h1>
            {
              data.array.map((item , idx)=>{
                return (
                  <div className="flex items-center space-x-2 my-2">
                    <RadioGroupItem value={item}  />
                    <Label>{item}</Label>
                  </div>
                )
              })
            }
					</div>
				))}
			</RadioGroup>
		</div>
	);
};

export default FilterCard;