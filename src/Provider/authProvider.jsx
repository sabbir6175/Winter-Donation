import React from 'react';
import { app } from '../Firebase/firebase.init';

const authProvider = () => {
    const auth = getAuth(app)
    return (
        <div>
            
        </div>
    );
};

export default authProvider;