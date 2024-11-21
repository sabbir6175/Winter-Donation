import React, { useContext } from "react";
import { Link } from "react-router-dom";
import image from "../assets/donation.jpg";
import { AuthContext } from "../Provider/authProvider";


const Navbar = () => {
  const {user} = useContext(AuthContext)
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
     
      {
        user &&  <>
           <li><Link to={"/dashboard"}>Dashboard</Link></li>
        </> 
      }
        
      
       
       

      {/* <li><NavLink>Home</NavLink></li> */}
    </>
  );
  return (
    <div>
      <div className="  sticky top-0 rounded-lg bg-opacity-50 backdrop-blur-md bg-red-300 z-10   ">
        <div className="navbar ">
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
              Winter Donation
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal text-lg px-1">{links}</ul>
          </div>
         
          <div className="navbar-end">
          
           {
            user && user?.email? (
              <img src= {user && user?.photoURL} className='w-8 h-8 md:w-16 md:h-16 rounded-full object-cover border-2 border-blue-500'  alt="" />
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
