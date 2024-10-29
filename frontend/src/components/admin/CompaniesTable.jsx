import React from "react";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../ui/table";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal } from "lucide-react";

const CompaniesTable = () => {
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
					<TableCell>
						<Avatar>
							<AvatarImage src="https://imgs.search.brave.com/zBRooq2zBdpanhV6kBF3mPxDyfxchQl05lPQMlbA6cc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMy/NDU2OTAzMC92ZWN0/b3IvbS1sZXR0ZXIt/bGluZXItbG9nby1k/ZXNpZ24uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPXJ1ejhi/ZHVvTmpSc3RDMG82/VWdsZXMzTWRuckxW/ZGVDNmtMbUg2U3dY/Z3c9" />
						</Avatar>
					</TableCell>
                    <TableCell>Company Name</TableCell>
                    <TableCell>Company Date</TableCell>
                    <TableCell className="text-right cursor-pointer">
                        <Popover>
                            <PopoverTrigger>
                                <MoreHorizontal/>
                            </PopoverTrigger>
                            <PopoverContent className="w-32">
                                <div className="flex items-center w-fit gap-2">
                                    <Edit2/>
                                    <span>Edit</span>
                                </div>

                            </PopoverContent>
                        </Popover>
                    </TableCell>
				</TableBody>
			</Table>
		</div>
	);
};

export default CompaniesTable;
