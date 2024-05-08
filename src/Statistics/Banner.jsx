import user from "../assets/images/user.png"
const Banner = () => {
    return (
        <div className="bg-[#9873ff10]">
            <div className="container mx-auto">
                <div className="grid grid-cols-2">
                    <div className="w-2/3 place-content-center ml-7">
                        <h1 className="text-5xl font-bold leading-tight"><span className="">One Step</span> <br /> <span> Closer To Your</span> <br /> <span className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text">Dream Job</span></h1>
                        <p className="text-[#757575] my-3">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] btn text-white font-bold text-1xl rounded-md">Get Started</button>
                    </div>
                    <div>
                        <img src={user} alt="" />
                    </div>


                </div>


            </div>
        </div >
    );
};

export default Banner;