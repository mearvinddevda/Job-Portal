import React, { useEffect, useState } from "react";
import Navbar from "../ui/shared/Navbar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import CompaniesTable from "./CompaniesTable.jsx";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setSearchCompanyByText } from "@/redux/companySlice";
import AdminJobsTable from "./AdminJobsTable";
import getAllAdminJobs from "../hooks/useGetAllAdminJobs";
import { setSearchJobByText } from "@/redux/jobSlice";

const AdminJobs = () => {
	getAllAdminJobs();
	const [input, setInput] = useState("");
	const navigate = useNavigate();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setSearchJobByText(input));
	}, [input]);

	return (
		<div>
			<Navbar />
			<div className="max-w-6xl mx-auto my-10">
				<div className="flex items-center justify-between my-5 ">
					<Input
						className="w-fit"
						placeholder="Filter BY Name / Role"
						onChange={(e) => setInput(e.target.value)}
					/>
					<Button onClick={() => navigate("/admin/jobs/create")}>
						Post New Jobs
					</Button>
				</div>
				<AdminJobsTable />
			</div>
		</div>
	);
};

export default AdminJobs;
