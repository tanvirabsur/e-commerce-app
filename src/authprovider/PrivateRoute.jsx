import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from './Authprovider';
import Loading from '../components/Loading';

const PrivateRoute = ({children}) => {
    const {user,loading} = use(AuthContext)
    const {pathname} = useLocation()

   
    
    if(user && user.email){
        return children
    }
      if (loading) {
        return <Loading></Loading>
    }
    return <Navigate state={pathname} to={'/login'}></Navigate>;
};

export default PrivateRoute;