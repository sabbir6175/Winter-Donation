
import { useContext, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/authProvider";
import { toast } from "react-toastify";


const Login = () => {
  const emailRef = useRef()
  const location = useLocation()
 
  const {UserLogin,setUser,signInWithGoogle,ForgotPassword}=useContext(AuthContext)
  const navigate = useNavigate()
  const handleSubmit =(e)=>{
      e.preventDefault()
      const form = e.target; 
      const email = form.email.value;
      const password =form.password.value;
        
        UserLogin(email, password)
          .then(result => {
            setUser(result.user)
            toast.success('login successfully')
            navigate(location?.state? location.state : '/')
          })
          .catch(error=>{
           toast.error(error.code)
          })
  }
  const handleGoogleSignIn = ()=>{
    signInWithGoogle()
      .then(result =>{
        setUser(result.user)
        toast.success('login successfully')
        navigate(location?.state? location.state :'/')
      })
      .catch(error=>{
        toast.error(error.message)
      })
}
const handleForgotPassword =()=>{
   
    const email = emailRef.current.value
    if(!email){
      toast.warning('please provide a valid email address')
    }
    else{
      ForgotPassword(email)
        .then(()=>{
          toast.success('Password reset email send, please check you email')
        })
        .catch(error=>{
          toast.error(error.message)
        })
    }
    
}
  return (
    <div className="min-h-screen flex justify-center items-center my-10">
      <div className="card bg-red-50 w-full max-w-lg border-2">
         <h2 className="text-center font-bold text-3xl py-5">Login your account</h2>
        <form  onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email address</span>
            </label>
            <input
                name="email"
                type="email"
                ref={emailRef}
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
                name="password"
                type="password"
                placeholder="Enter your password"
                className="input input-bordered"
                required
            />
            <label onClick={handleForgotPassword} className="label">
              <a  href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn text-white bg-cyan-400">Login</button>
          </div>
        </form>
          <button onClick={handleGoogleSignIn} className="btn mx-8 text-white bg-cyan-400">Sign in with Google</button>
        <h2 className="text-lg text-center py-4">Don't have an Account ? <Link className="text-red-400" to={'/login/Register'}>Register</Link> </h2>
      </div>
    </div>
  );
};

export default Login;
