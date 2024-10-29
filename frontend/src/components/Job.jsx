import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = ({job}) => {
	const navigate = useNavigate();
	console.log(job);
	const daysAgoFunction =(mongodbTime)=>{
		const createdAt =new Date(mongodbTime);
		const currentTime = new Date() ;
		const diff = currentTime - createdAt;
		return Math.floor(diff / ( 1000 * 24 * 60 *60));
	}
	// const jobId = 'jobIdwillPlaceHere';
	return (
		<div className="p-5 rounded-md shadow-xl bg-white border border-gray-200">
			<div className="flex items-center justify-between">
				<p className="text-sm text-gray-500 ">{daysAgoFunction(job?.createdAt)=== 0 ? "Today" : daysAgoFunction(job?.createdAt)}</p>
				<Button
					variant="outline"
					className="rounded-full"
					size="icon"
				>
					<Bookmark />{" "}
				</Button>
			</div>

			<div className="flex items-center gap-2 my-2">
				<Button
					className="p-6"
					variant="outline"
					size="icon"
				>
					<Avatar>
						<AvatarImage src="https://imgs.search.brave.com/zBRooq2zBdpanhV6kBF3mPxDyfxchQl05lPQMlbA6cc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMy/NDU2OTAzMC92ZWN0/b3IvbS1sZXR0ZXIt/bGluZXItbG9nby1k/ZXNpZ24uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPXJ1ejhi/ZHVvTmpSc3RDMG82/VWdsZXMzTWRuckxW/ZGVDNmtMbUg2U3dY/Z3c9" />
					</Avatar>
				</Button>
				<div className="">
					<h1 className="font-medium text-lg">{job?.company?.name}</h1>
					<p className="text-sm text-gray-500">India</p>
				</div>
			</div>
            <div className="">
                <h1 className="font-bold text-lg my-2 ">{job?.title}</h1>
                <p className="text-sm text-gray-600">{job?.description}</p>
            </div>
            <div className=" flex items-center gap-1 mt-4 ">
				<Badge
					variant={"ghost"}
					className={"text-blue-700 font-bold"}
				>
					{job?.position} Positions
				</Badge>
				<Badge
					variant={"ghost"}
					className={"text-[#FB3002] font-bold"}
				>
					{job?.jobType}
				</Badge>
				<Badge
					variant={"ghost"}
					className={"text-[#7209b7] font-bold"}
				>
					{job?.salary} LPA
				</Badge>
			</div>
            <div className="flex items-center gap-4 mt-4 ">
                <Button onClick={()=> navigate(`/description/${job?._id}`)} variant ='outline'>Details</Button>
                <Button className="bg-[#7209b7]">Save For Later</Button>
            </div>
		</div>
	);
};

export default Job;
