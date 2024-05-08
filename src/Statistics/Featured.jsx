import { useEffect, useState } from "react";
import FeatureSingleJobs from "./FeatureSingleJobs";

const Featured = () => {
    const [jobs, setJobs] = useState([]);
    const [loadData, setLoadData] = useState(4);
    useEffect(() => {
        fetch('JobsData.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>

            <div className="container mx-auto mt-28 mb-8">
                <div className="mt-14">
                    <h1 className="text-center text-4xl font-bold ">Featured Jobs</h1>
                    <p className="text-center my-4 text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className="grid grid-cols-2 gap-7   place-items-center mt-8 container mx-auto">
                    {
                        jobs.slice(0, loadData).map(sendJobs => <FeatureSingleJobs key={sendJobs.id} sendJobs={sendJobs}></FeatureSingleJobs>)
                    }
                </div>
                <div className={loadData === jobs.length && ' hidden'}>
                    <div className="ml-8 mt-4 mb-5 grid justify-center">
                        <a onClick={() => setLoadData(jobs.length)} className="bg-gradient-to-r cursor-pointer btn from-[#7E90FE] to-[#9873FF] text-white font-bold text-1xl rounded-md">See All Jobs</a>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Featured;