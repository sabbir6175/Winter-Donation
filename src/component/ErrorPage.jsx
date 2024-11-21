import React from 'react';
import { Link } from 'react-router-dom';


const ErrorPage = () => {
   
    return (
      
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/ys7JdBC/Errorpage.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                    <Link to={'/'} className='text-8xl font-extrabold text-center mt-40 mb-3'>Error page 401</Link>
                    </div>
                </div>
            </div>
    );
};

export default ErrorPage;