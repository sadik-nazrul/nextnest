import { useContext } from "react";
import { FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../providers/AuthProvider";


const Register = () => {
    const { userWithGoogle } = useContext(AuthContext);
    const handleLogin = () => {
        userWithGoogle()
        .then(alert('User Creation Successfull'))
        .catch(error => console.log(error))
    }
    return (
        <div>
            <button onClick={handleLogin} className="btn btn-success">
                <FaGoogle></FaGoogle>
                Google
            </button>
        </div>
    );
};

export default Register;