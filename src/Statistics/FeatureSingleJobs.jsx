import { FaLocationDot } from "react-icons/fa6";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
const FeatureSingleJobs = ({ sendJobs }) => {
    // console.log(sendJobs);
    const {id, logo, job_title, company_name, remote_or_onsite, job_type, location } = sendJobs;
    return (


        <div className="border w-full border-spacing-2 border-gray-200 rounded-md">
            <img className="m-8 mb-0" src={logo} alt="" />
            <h2 className="p-8 pb-1 font-bold text-2xl">{job_title}</h2>
            <h2 className="pl-8 font-bold text-[#757575]">{company_name}</h2>
            <div className="flex ml-8 my-3">
                <h2 className="border rounded-sm border-blue-400 mr-2 px-3 py-1 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text ">{remote_or_onsite}</h2>
                <h2 className="border rounded-sm border-blue-400 mr-2 px-3 py-1  bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text ">{job_type}</h2>
            </div>
            <div className="flex pl-7 place-items-center">
                <FaLocationDot />
                <h2 className="ml-1 text-[#757575] font-bold">{location}</h2>
            </div>
            <div className="ml-8 mt-4 mb-5">
               <Link to={`/job/${id}`}> <a className="bg-gradient-to-r cursor-pointer btn from-[#7E90FE] to-[#9873FF] text-white font-bold text-1xl rounded-md">View Details</a></Link>
            </div>
        </div> 



    );
};
FeatureSingleJobs.propTypes = {
    sendJobs: PropTypes.object,
}
export default FeatureSingleJobs;