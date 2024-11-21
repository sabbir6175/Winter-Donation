import React, { useContext } from "react";
import { Link } from "react-router-dom";
import image from "../assets/donation.jpg";
import { AuthContext } from "../Provider/authProvider";


const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)
  const links = (
    < >
      <li>
        <Link  to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/DonationCampaigns"}>Donation Campaigns</Link>
      </li>
      <li>
        <Link to={"/HowToHelp"}>How to Help</Link>
      </li>
      <li><Link to={"/dashboard"}>Dashboard</Link></li>
    </>
  );
  return (
    <div className=" ">
      <div className="fixed top-0 px-4 py-3  bg-opacity-50 backdrop-blur-md bg-orange-300 z-10 w-full">
        <div className="navbar container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden pl-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>

            <img
              className="w-13 h-10 rounded-full hidden md:block"
              src={image}
              alt=""
            />
            <a className="btn btn-ghost text-base font-extrabold md:text-lg lg:text-2xl pl-0">
             <span className="text-red-500">Winter</span> Donation
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal text-base font-semibold px-1">{links}</ul>
          </div>
         
          <div className="navbar-end">
           
           {
            user && user?.email? (
              <>
              <img src= {user && user?.photoURL} className='w-8 ml-6 h-8 md:w-16 md:h-16 rounded-full object-cover border-2 border-blue-500'  alt="" />
              <Link to={'/login'} onClick={logOut} className="btn md:ml-3 px-2 md:px-6 btn-sm md:btn-lg bg-red-400 ">Log-out</Link>
              </>
              
            ):(
              <Link to={'/login'} className="btn">Login</Link>
            ) 
           }

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
