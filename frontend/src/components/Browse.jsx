import React, { useEffect } from 'react'
import Navbar from './ui/shared/Navbar'
import Job from './Job'
import { useDispatch, useSelector } from 'react-redux'
import getAllJobs from './hooks/useGetAllJobs'
import { setSearchedQuery } from '@/redux/jobSlice'

const randomJobs =[1,2,3]


const Browse = () => {

  getAllJobs();
  const {allJobs} = useSelector(store =>store.job);
  const dispatch = useDispatch();

  useEffect(()=>{
    return ()=>{
        dispatch(setSearchedQuery(""));
    }
},[])

  return (
    <div className='max-w-7xl mx-auto my-10'>
      <Navbar/>
      <div className="div">
        <h1 className='font-bold text-xl my-10'>Search Results ({allJobs.length})</h1>
        <div className="grid grid-cols-3 gap-4 mt-5">
        {
          allJobs.map((job , idx)=>{
            return (
              <Job key={job._id} job={job}/>
            )
          })
        }
        </div>
        
      </div>
      
    </div>
  )
}

export default Browse
