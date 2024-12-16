import React, { useContext } from 'react';
import { Authcontext } from '../AuthProvider.jsx/AuthProvider';
import { use } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user} = useContext(Authcontext)
    const navigate = useNavigate()
    

if(!user){
    return <Navigate to="/login"></Navigate>
}
return children
};

export default PrivateRouter;