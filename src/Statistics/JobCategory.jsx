import { useEffect, useState } from "react";
import JobCategoryMapSend from "./JobCategoryMapSend";
const JobCategory = () => {
    
    const [category, setCategory] = useState([]);
    useEffect(()=>{
        fetch('Data_JobCategory.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])

    return (
        <div className="container mx-auto mb-10">
            <div className="mt-14">
                <h1 className="text-center text-4xl font-bold ">Job Category List</h1>
                <p className="text-center my-4 text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-4 place-items-center mt-8">
            {
                category.map(singleCategory => <JobCategoryMapSend key={singleCategory.id} singleCategory={singleCategory}></JobCategoryMapSend>)
            }
            </div>

        </div>
    );
};

export default JobCategory;