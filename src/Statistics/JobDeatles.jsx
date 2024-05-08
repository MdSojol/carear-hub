import { useLoaderData, useParams } from "react-router-dom";
import MoneyIcon from "../assets/icons/money.png"
import Calendar from "../assets/icons/calendar.png"
import Phone from "../assets/icons/phone.png"
import Email from "../assets/icons/email.png"
import Location from "../assets/icons/location2.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Local Storage/Localstorage";

const JobDeatles = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);

    // console.log(job);
    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information

    } = job
    const notify = () => {
        saveJobApplication(idInt);
        toast("Thanks Add Your card This Products");}
    // console.log(id)
    return (

        <div className="">

            <div className="bg-[#9873ff10] py-16 ">
                <div className="container mx-auto">
                    <h1 className="text-center text-3xl font-bold">Job Details</h1>
                </div>
            </div>



            <div className="container mx-auto">
                <div className="flex justify-center">
                    <div className="my-16 w-3/4 px-28 ">
                        <h2><span className="font-bold">Job Description: </span>{job_description}</h2>
                        <h2 className="py-4"><span className="font-bold">Job Responsibility: </span>{job_responsibility}</h2>
                        <h2><span className="font-bold">Educational Requirements: <br /> </span>{educational_requirements}</h2>
                        <h2 className="pt-4"><span className="font-bold">Experiences: <br /> </span>{experiences}</h2>
                    </div>
                    <div className="mt-16 1/4 mb-16">
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="">
                                <div className="bg-[#9873ff10] p-5">
                                    <h2 className="card-title border-b-2">Job Details</h2>
                                    <div className="flex mt-4">
                                        <img className="pr-2" src={MoneyIcon} alt="" />
                                        <p><span  className="font-bold">Salary : </span>{salary
                                        } </p>
                                    </div>
                                    <div className="flex mt-3">
                                        <img className="pr-2" src={Calendar} alt="" />
                                        <p><span className="font-bold">Job Title : </span>{job_title}</p>
                                    </div>

                                    <h1 className=" pt-4 pb-2 font-bold border-b-2">Contact Information</h1>
                                    <div className="flex pt-2">
                                        <img className="pr-2" src={Phone} alt="" />
                                        <p> <span className="font-bold">Phone : </span>{contact_information.phone} </p>
                                    </div>
                                    <div className="flex pt-2">
                                        <img className="pr-2" src={Email} alt="" />
                                        <p><span  className="font-bold">Email : </span>{contact_information.email} </p>
                                    </div>
                                    <div className="flex pt-2">
                                        <img className="pr-2 h-7" src={Location} alt="" />
                                        <h1><span  className="font-bold ">Address : </span>{contact_information.address} </h1>
                                    </div>
                                </div>

                                <div className="card-actions justify-center ">
                                    <button onClick={notify} className="btn btn-primary w-full"> <ToastContainer /> Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default JobDeatles;