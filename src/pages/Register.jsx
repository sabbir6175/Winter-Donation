import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/authProvider";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  
  const navigate = useNavigate();
  const handleSubmitFrom = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    if(password.length < 6){
      setErrorMessage('password should be 6 characters or longer')
      return;
    }

  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,}$/;

    if(!regex.test(password)){
        setErrorMessage('At least one uppercase , one lowercase , one special characters')
        return;
    }

    console.log({ name, photo, email, password });
    createNewUser(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success("user create successfully");
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        toast.warning(error.message);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center my-10">
      <div className="card bg-base-200 w-full max-w-lg border-2">
        <h2 className="text-center font-bold text-3xl py-5">
          Register your account
        </h2>
        <form onSubmit={handleSubmitFrom} className="card-body">
          {/* name form */}
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

          {/* Photo URL link */}
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
          </div>
          {/* email form */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email address</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email address"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="btn btn-xs absolute right-10 top-[69%] md:top-[67%]"
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </button>
          </div>
          {
             errorMessage && <p className="text-red-400">{errorMessage}</p>
          }
         
          <div className="form-control"></div>
          <div className="form-control mt-6">
            <button className="btn text-white bg-cyan-400">Register</button>
          </div>
        </form>
        <h2 className="text-lg text-center py-4">
          Already have an account ?{" "}
          <Link className="text-red-400" to={"/login"}>
            login
          </Link>{" "}
        </h2>
      </div>
    </div>
  );
};

export default Register;