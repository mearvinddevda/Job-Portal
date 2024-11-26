import React, { useEffect, useState } from "react";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, Eye, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminJobsTable = () => {
	const { companies, searchCompanyByText } = useSelector(
		(store) => store.company
	);
	const { allAdminJobs, searchJobByText } = useSelector((store) => store.job);

	const [filterJobs, setFilterJobs] = useState(allAdminJobs);
	const navigate = useNavigate();

	useEffect(() => {
		const filteredJobs =
			allAdminJobs.length >= 0 &&
			allAdminJobs.filter((job) => {
				if (!searchJobByText) {
					return true;
				}
				return (
					job?.title
						?.toLowerCase()
						.includes(searchJobByText.toLowerCase()) ||
					job?.company?.name
						.toLowerCase()
						.includes(searchJobByText.toLowerCase())
				);
			});
		setFilterJobs(filteredJobs);
	}, [allAdminJobs, searchJobByText]);
	return (
		<div>
			<Table>
				<TableCaption>
					List Of Recently Registered Companies
				</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead>Logo</TableHead>
						<TableHead>Name</TableHead>
						<TableHead>Date</TableHead>
						<TableHead className="text-right">Action</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{filterJobs.map((job) => (
						<tr key={job._id}>
							<TableCell>{job.company.name}</TableCell>
							<TableCell>{job?.title}</TableCell>
							<TableCell>
								{job.createdAt.split("T")[0]}{" "}
							</TableCell>
							<TableCell className="text-right cursor-pointer">
								<Popover>
									<PopoverTrigger>
										<MoreHorizontal />
									</PopoverTrigger>
									<PopoverContent className="w-32">
										<div
											className="flex items-center w-fit gap-2"
											onClick={() =>
												navigate(
													`/admin/companies/${job._id}`
												)
											}
										>
											<Edit2 />
											<span>Edit</span>
										</div>
										<div
											onClick={() =>
												navigate(
													`/admin/jobs/${job._id}/applicants`
												)
											}
											className="flex items-center w-fit gap-2 cursor-pointer mt-2"
										>
											<Eye className="w-4" />
											<span>Applicants</span>
										</div>
									</PopoverContent>
								</Popover>
							</TableCell>
						</tr>
					))}
				</TableBody>
			</Table>
		</div>
	);
};

export default AdminJobsTable;