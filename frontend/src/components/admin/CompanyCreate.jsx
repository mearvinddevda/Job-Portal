import React from "react";
import Navbar from "../ui/shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const CompanyCreate = () => {
    const navigate =useNavigate();
	return (
		<div>
			<Navbar />
			<div className="max-w-4xl mx-auto">
				<div className="my-10">
					<h1 className="font-bold text-2xl">Your CompanyName</h1>
					<p className="text-gray-500">
						What would you like to give your Company Name ? You Can
						change it later
					</p>
				</div>

				<Label>Company Name</Label>
				<Input
					type="text"
					className="my-2"
					placeholder="Amazon , Microsoft etc"
				></Input>
				<div className="flex items-center gap-2 my-10">
					<Button
						variant="outline"
                        onClick={()=>navigate("/admin/companies")}
					>
						Cancel
					</Button>
					<Button>Continue</Button>
				</div>
			</div>
		</div>
	);
};

export default CompanyCreate;
