import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    const links = <>
        <li><NavLink to="/">Statistics</NavLink></li>
        <li><NavLink to="/applied">Applied Jobs</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
    </>
    return (
        <div className="bg-[#9873ff10]">

            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <Link to="/"><a className=" ml-6 text-2xl font-extrabold">CareerHub</a></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {
                        links
                       }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="bg-gradient-to-r cursor-pointer btn from-[#7E90FE] to-[#9873FF] text-white font-bold text-1xl rounded-md">Star Applying</a>
                </div>
            </div>

        </div>
    );
};

export default NavBar;