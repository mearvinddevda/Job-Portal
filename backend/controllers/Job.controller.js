import { Job } from "../models/job.model.js";

export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      salary,
      experience,
      location,
      jobType,
      position,
      companyId,
    } = req.body;
    const userId=req.id
    if (
      !title ||
      !description ||
      !requirements ||
      !salary ||
      !experience ||
      !location ||
      !jobType ||
      !position ||
      !companyId
    ) {
      return res.status(400).json({
        message: "Something is Missing",
        success: false,
      });
    }
    const job = await Job.create({
      title,
      description,
      requirements: requirements.split(","),
      salary: Number(salary),
      location,
      jobType,
      experienceLevel:experience,
      position,
      company: companyId,
      created_by:userId
    });
    return res.status(201).json({
      message: "New Job Created Successfully",
      job,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ]
    };
    const jobs = await Job.find(query).populate({
      path:"company"
    }).sort({createdAt :-1});
    if (!jobs) {
      return res.status(404).json({
        message: "Jobs not Found",
        success: false,
      });
    }
    return res.status(200).json({
      jobs,
      success: false,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        message: "Jobs Not Found",
        success: false,
      });
    }
    return res.status(200).json({
      job,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAdminJobs = async (req,res)=>{
  return res.status(404).json({
    req,
    message:"Jobs Not Found",
    success:false
})
    try {
        const adminId = req.id;
        console.log(adminId)
        console.log(req.id);
        const jobs = await Job.find({created_by:adminId}).populate({
          path:"company",
          createdAt :-1
        });
        if(!jobs)
        {
            return res.status(404).json({
                message:"Jobs Not Found",
                success:false
            })
        }
        return res.status(200).json({
            jobs,
            success:true
        })   
    } catch (error) {
        console.log(error);
    }
}