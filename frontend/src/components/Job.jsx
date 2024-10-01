import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

const Job = () => {
	return (
		<div className="p-5 rounded-md shadow-xl bg-white border border-gray-200">
			<div className="flex items-center justify-between">
				<p className="text-sm text-gray-500 ">2 days ago</p>
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
					<h1 className="font-medium text-lg">Company Name</h1>
					<p className="text-sm text-gray-500">India</p>
				</div>
			</div>
            <div className="">
                <h1 className="font-bold text-lg my-2 ">Title</h1>
                <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eius odit voluptates vel odio alias ratione tempore delectus pariatur ab.</p>
            </div>
            <div className=" flex items-center gap-1 mt-4 ">
				<Badge
					variant={"ghost"}
					className={"text-blue-700 font-bold"}
				>
					12 Positions
				</Badge>
				<Badge
					variant={"ghost"}
					className={"text-[#FB3002] font-bold"}
				>
					Part Time
				</Badge>
				<Badge
					variant={"ghost"}
					className={"text-[#7209b7] font-bold"}
				>
					24 LPA
				</Badge>
			</div>
            <div className="flex items-center gap-4 mt-4 ">
                <Button variant ='outline'>Details</Button>
                <Button className="bg-[#7209b7]">Save For Later</Button>
            </div>
		</div>
	);
};

export default Job;
