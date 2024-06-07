import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import Loading from "../components/shared/Loading";


const PrivateRouts = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <Loading></Loading>;
    }

    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

PrivateRouts.propTypes = {
    children: PropTypes.node
}

export default PrivateRouts;