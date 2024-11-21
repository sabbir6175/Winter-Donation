import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/authProvider';
import { toast } from 'react-toastify';


const UpdateProfile = () => {
      const {updateUserProfile} = useContext(AuthContext)
      const navigate = useNavigate()
    
    const handleSubmit =  e => {
        e.preventDefault()
        const form = e.target; 
        const name = form.name.value;
        const photo = form.photo.value;
        console.log(name, photo)
        updateUserProfile({ displayName: name, photoURL: photo })
        .then(() => {
          toast.success('update profile success')
          navigate("/dashboard");
        })
        .catch((error) => {
          toast.error(error);
        });
        
      
    }
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-sm my-10">
           <h2 className="text-center font-bold text-3xl py-5">Updated your profile Information</h2>
          <form  onSubmit={handleSubmit} className="card-body">
         
           <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Enter your Photo URL link"
              className="input input-bordered"
              required
            />
          </div >
            <button className='btn md:btn-wide mt-6 bg-green-300'>Update Information</button>
          </form>
        </div>
      </div>
    );
};

export default UpdateProfile;