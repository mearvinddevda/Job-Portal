import React from "react";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { useSelector } from "react-redux";

const AppliedJobTable = () => {
	const {allAppliedJobs} = useSelector(store => store.job)
	return (
		<div>
			<Table>
				<TableCaption>List of your applied Jobs</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead>Date</TableHead>
						<TableHead>Job Role</TableHead>
						<TableHead>Company</TableHead>
						<TableHead className="text-right">Status</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{
						allAppliedJobs.length <=0 ?<span>You haven't applied any job yet</span> :
					(allAppliedJobs.map((item, idx) => (
						<TableRow key={allAppliedJobs._id}>
							<TableCell> {allAppliedJobs.createdAt.split("T")[0]}</TableCell>
							<TableCell> {allAppliedJobs.job.title}</TableCell>
							<TableCell>{allAppliedJobs.job.company.name}</TableCell>
							<TableCell className="text-right">
								{" "}
								<Badge className={`${appliedJob?.status === "rejected" ? 'bg-red-400' : appliedJob.status === 'pending' ? 'bg-gray-400' : 'bg-green-400'}`}>{allAppliedJobs.status} </Badge>
							</TableCell>
						</TableRow>
					)))}
				</TableBody>
			</Table>
		</div>
	);
};

export default AppliedJobTable;
