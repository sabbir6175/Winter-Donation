import React, { useContext } from 'react';
import { AuthContext } from '../Provider/authProvider';
import { Link } from 'react-router-dom';


const Dashboard = () => {
   const {user,logOut} = useContext(AuthContext)
//    console.log(user)
    return (
        <div>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center ">
                <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg my-10">
                    <h1 className="text-2xl font-bold text-center text-blue-600">Welcome, {user && user?.displayName}! </h1>
                    <p className="text-center text-gray-600 mt-2">Here's your profile information</p>
                    <div className="flex flex-col gap-5 md:gap-10  items-center mt-8 bg-green-200 p-4 rounded-lg shadow">
                        <div className="flex-shrink-0">
                          <img src= {user && user?.photoURL} className='w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-blue-500'  alt="" />
                        </div>
                        <div className=" md:mt-0 md:ml-6 text-center md:text-left">
                            <h2 className="text-xl text-center font-semibold">Name: {user && user?.displayName} </h2>
                            <p className="text-gray-600 mt-2 font-medium">Email:  {user && user?.email}</p>
                        </div>
                    </div>
                    <div className="mt-6 flex justify-center gap-10">
                      <Link to={'/update'} className='btn text-green-300 btn-wide bg-blue-500'>Update profile</Link>
                      <Link to={'/login'} onClick={logOut} className="btn btn-wide bg-red-400 ">Log-out</Link>
                    </div>
                  
                 </div>
             </div>
        </div>
    );
};

export default Dashboard;

