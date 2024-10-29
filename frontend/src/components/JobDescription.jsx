import React, { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSingleJob } from "@/redux/jobSlice";
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { toast } from "sonner";

const JobDescription = () => {
	const params = useParams();
	const jobId = params.id;
	console.log(jobId)
	const dispatch = useDispatch();
	const {singleJob} = useSelector(store =>store.job)
	console.log(singleJob);
	const {user} = useSelector(store=>store.auth)
    const isInitiallyApplied = singleJob?.applications.some(application => application.applicant === user?._id) || false;

	const [isApplied , setIsApplied] =useState(isInitiallyApplied);
	
	const applyHandler = async()=>{
		try {
			const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}` , {withCredentials:true}) ;
			console.log(res);
			if(res.data.success)
			{	
				setIsApplied(true);
				const updatedSingleJob ={...singleJob , applications:[...singleJob.applications , {applicant:user?._id}]};
	dispatch(setSingleJob(updatedSingleJob));
				toast.success(res.data.message);
			}
		} catch (error) {
			console.log(error);
			toast.error(error);
		}
	}
	
	useEffect(()=>{
		const fetchSingleJob = async()=>{
			
			try {
				const res =await axios.get(`${JOB_API_END_POINT}/get/${jobId}`,{withCredentials:true});
				console.log(res);
				if(res.data.success)
				{
					dispatch(setSingleJob(res.data.job));
					setIsApplied(res.data.applications.some(application => application.applicant === user?._id))
				}
			} catch (error) {
				console.log(error);
			}
		}
		fetchSingleJob();
	  },[jobId , dispatch,user?._id])

	return (
		<div className="max-w-7xl mx-auto my-10">
			<div className="flex items-center justify-between">
				<div className="">
					<h1 className="font-bold text-xl">{singleJob?.title}</h1>
					<div className="flex items-center gap-2 mt-4">
						<Badge
							variant={"ghost"}
							className={"text-blue-700 font-bold"}
						>
							{singleJob?.positions} Positions
						</Badge>
						<Badge
							variant={"ghost"}
							className={"text-[#FB3002] font-bold"}
						>
							{singleJob?.jobType}
						</Badge>
						<Badge
							variant={"ghost"}
							className={"text-[#7209b7] font-bold"}
						>
							{singleJob?.salary} LPA
						</Badge>
					</div>
				</div>
				<Button
					onClick={isApplied ? null : applyHandler}
					disabled={isApplied}
					className={`rounded-lg ${
						isApplied
							? "bg-gray-600 cursor-not-allowed"
							: "bg-[#7209b7] hover:bg-[#aa38f6]"
					}`}
				>
					{isApplied ? "Already Applied" : "Apply Now"}
				</Button>
			</div>
            <div >
                <h1 className="border-b-2 border-b-gray-300 font-medium py-4">{singleJob?.title}</h1>
                <div className="my-4 ">
                    <h1 className="font-bold my-1">Role :<span className="pl-4 font-normal text-gray-800">{singleJob?.title}</span></h1>
                    <h1 className="font-bold my-1">Location: <span className="pl-4 font-normal text-gray-800"> {singleJob?.location}</span></h1>
                    <h1 className="font-bold my-1">Description: <span className="pl-4 font-normal text-gray-800">{singleJob?.description}</span></h1>
                    <h1 className="font-bold my-1">Experience: <span className="pl-4 font-normal text-gray-800">{singleJob?.experience} years</span></h1>
                    <h1 className="font-bold my-1">Salary : <span className="pl-4 font-normal text-gray-800">{singleJob?.salary}LPA</span></h1>
                    <h1 className="font-bold my-1">Total Applicants: <span className="pl-4 font-normal text-gray-800">{singleJob?.applications.length
					}</span></h1>
                    <h1 className="font-bold my-1">Posted Date : <span className="pl-4 font-normal text-gray-800"></span></h1>
                </div>
            </div>
		</div>
	);
};

export default JobDescription;
