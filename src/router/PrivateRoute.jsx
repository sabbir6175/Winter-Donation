import React, { useContext } from 'react';
import { AuthContext } from '../Provider/authProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    
    if(loading){
        return <span className="loading place-content-center loading-bars loading-lg"></span>
    }
    if(user && user?.email){
       return children;
    }
    return (
        <div>
             <Navigate state={location.pathname} to={'/login'}></Navigate>
        </div>
    );
};

export default PrivateRoute;