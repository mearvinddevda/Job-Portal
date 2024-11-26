import React, { useState } from "react";
import Navbar from "./ui/shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import { Link } from "react-router-dom";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";
import useGetAppliedJobs from "./hooks/useGetAppliedJobs";

const isHaveResume = true;
const Profile = () => {
	useGetAppliedJobs();
	const [open ,setOpen] = useState(false);
	const {user} = useSelector(store=>store.auth);
	return (
		<div>
			<Navbar />
			<div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
				<div className="flex justify-between ">
					<div className="flex items-center gap-4">
						<Avatar className="h-24 w-24">
							<AvatarImage
								src="https://imgs.search.brave.com/zBRooq2zBdpanhV6kBF3mPxDyfxchQl05lPQMlbA6cc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMy/NDU2OTAzMC92ZWN0/b3IvbS1sZXR0ZXIt/bGluZXItbG9nby1k/ZXNpZ24uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPXJ1ejhi/ZHVvTmpSc3RDMG82/VWdsZXMzTWRuckxW/ZGVDNmtMbUg2U3dY/Z3c9"
								alt="Profile"
							/>
						</Avatar>
						<div className="">
							<h1 className="font-medium text-xl">{user?.fullname}</h1>
							<p>{user?.profile?.bio}</p>
						</div>
					</div>

					<Button
						onClick={()=>setOpen(true)}
						className="text-right"
						variant="outline"
					>
						<Pen />
					</Button>
				</div>
				<div className="my-5">
					<div className="flex items-center gap-3 my-2">
						<Mail />
						<span>{user?.email}</span>
					</div>
					<div className="flex items-center gap-3 my-2">
						<Contact />
						<span>{user?.phoneNumber}</span>
					</div>
				</div>
				<div className="my-5">
					<h1>Skills</h1>
					<div className="flex items-center gap-3 my-2">
						{user?.profile?.skills.length != 0 ? (
							user?.profile?.skills.map((item, idx) => (
								<Badge key={idx}>{item}</Badge>
							))
						) : (
							<span>NA</span>
						)}
					</div>
				</div>
				<div className="grid w-full max-w-sm items-center gap-1.5">
					<Label className="text-md font-bold">Resume</Label>
					{isHaveResume ? (
						<a
							className="text-blue-500 hover:underline cursor-pointer"
							target="blank"
							href={user?.profile?.resume}
						>
							{user?.profile?.resumeOriginalName}
						</a>
					) : (
						<span>NA</span>
					)}
				</div>
			</div>
			<div className="max-w-4xl m-auto bg-white rounded-2xl">
				<h1 className="font-bold text-lg my-5">Applied Jobs</h1>
				<AppliedJobTable />
			</div>
			<UpdateProfileDialog open={open} setOpen={setOpen}/>
		</div>
	);
};

export default Profile;
