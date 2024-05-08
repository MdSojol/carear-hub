import { FaLocationDot } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Local Storage/Localstorage";
// import AppliedSingle from "./AppliedSingle";
// import NetFly from "../assets/logo/netflix.png"
import { IoIosArrowDown } from "react-icons/io";

const Applied = () => {
    const jobs = useLoaderData();
    const [appliedJob, setapplyidjobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = filter =>{
        if(filter === 'All'){
            setDisplayJobs(appliedJob);
        }
        else if(filter === 'Remote'){
            const remoteconst = appliedJob.filter(job => job.remote_or_onsite==="Remote")
            setDisplayJobs(remoteconst)
        }
        else if(filter === 'Onsite'){
            const onsite = appliedJob.filter(job => job.remote_or_onsite==="Onsite")
            setDisplayJobs(onsite)
        }
    }
    useEffect((jobs) => {
        const storeJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storeJobIds?.includes(job.id));
            // const storeJobIdsIntigers = parseInt(storeJobIds)
            console.log(jobs, storeJobIds, jobsApplied)
            setapplyidjobs(jobsApplied)
            setDisplayJobs(jobsApplied)
        }

    }, [jobs]);

    // const {logo, job_title,} = appliedJob;
/*     if (!jobs) {
        return null
    } */
    return (
        <div>


            <div className="container mx-auto">
                <div className="flex justify-between mt-5">
                    <div className="place-content-center font-bold">
                        <h1 className="">Total Applied Jobs: {appliedJob.length}</h1>
                    </div>
                    <div>
                        <details className="dropdown">
                            <summary className="m-1 btn font-bold">Filter By <IoIosArrowDown></IoIosArrowDown> </summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                <li onClick={()=>handleJobsFilter("All")}><a>All</a></li>
                                <li onClick={()=>handleJobsFilter("Remote")}><a>Remote</a></li>
                                <li onClick={()=>handleJobsFilter("Onsite")}><a>Onsite</a></li>
                            </ul>
                        </details>
                    </div>
                </div>

                {
                    displayJobs.map(jobsAppliedSingle =>
                        <div className="border-2 my-5 p-5 py-10 flex justify-between" key={jobsAppliedSingle.id}>

                            <div className="flex items-center w-2/4 justify-between">
                                <div className="mx-auto">
                                    <img className="w-60 bg-gray-200 p-10 py-16" src={jobsAppliedSingle.logo} alt="" />
                                </div>
                                <div className="w-2/4">
                                    <h1 className="text-md font-bold mb-1">{jobsAppliedSingle.job_title}</h1>
                                    <h1 className="text-[#757575]  text-sm font-bold">{jobsAppliedSingle.company_name}</h1>
                                    <div className="flex my-3">
                                        <h2 className="border-2 border-indigo-500/45 rounded-sm border-blue-300  mr-2 px-3 py-1 font-bold bg-gradient-to-r from-[#5b71fdc7] to-[#571affd4] text-transparent text-sm bg-clip-text ">{jobsAppliedSingle.remote_or_onsite}</h2>
                                        <h2 className="border-2 border-indigo-500/45 rounded-sm border-blue-300 mr-2 px-3 py-1 font-bold bg-gradient-to-r from-[#5b71fdd1] to-[#571affc9] text-transparent text-sm bg-clip-text ">{jobsAppliedSingle.job_type}</h2>

                                    </div>
                                    <div className="flex  place-items-center">
                                        < FaLocationDot className="text-[#535353]"> </FaLocationDot>
                                        <h2 className="ml-1 text-[#757575dc] font-bold">{jobsAppliedSingle.contact_information.address}</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="place-content-center">
                                <Link> <a className="bg-gradient-to-r cursor-pointer btn from-[#7E90FE] to-[#9873FF] text-white font-bold text-1xl rounded-md">View Details</a></Link>
                            </div>
                            {/* <span>{jobsAppliedSingle.company_name}</span> */}

                        </div>)
                }

            </div>



        </div>
    );
};

export default Applied;