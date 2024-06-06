import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const { userWithGoogle, userWithGithub, ap, login, user } = useContext(AuthContext);

    // Login with email pass
    const handleLoginEmailPass = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        login(email, password)
            .then(() => {
                e.target.reset();
            })
            .catch(error => {
                const code = error.code;
                const rePlace = code.replace('auth/', '');
                toast.error(rePlace);
                e.target.reset();
            })
    }

    // Google login
    const handleGoogleLogin = () => {
        userWithGoogle()
            .then()
            .catch()
    }

    // Github login
    const handleGithubLogin = () => {
        userWithGithub()
            .then()
            .catch()
    }

    return (
        <div className="container mx-auto py-10 flex flex-col items-center">

            {
                !user ? <>
                    <div className="w-2/5 shadow-xl p-10 space-y-4 rounded-xl">
                        <h2 className="text-xl font-semibold text-center">Login Your Account</h2>

                        <form onSubmit={handleLoginEmailPass} className="flex flex-col gap-4">
                            <input placeholder="Email" className="outline px-4 py-1 rounded" type="email" name="email" required />
                            <input placeholder="Password" className="outline px-4 py-1 rounded" type="password" name="password" required />
                            <input className="btn px-5 py-2 bg-orange-500 text-white text-center gap-2 rounded hover:bg-transparent hover:text-orange-400 hover:outline" type="submit" value="Login" />
                        </form>

                        <div className="flex gap-2 justify-center">
                            <button onClick={handleGoogleLogin} className="px-5 py-2 bg-orange-500 text-white flex items-center gap-2 rounded hover:bg-transparent hover:text-orange-400 hover:outline">
                                <FaGoogle></FaGoogle>
                                Google
                            </button>
                            <button onClick={handleGithubLogin} className="px-5 py-2 hover:bg-orange-500 hover:text-white flex items-center gap-2 rounded bg-transparent text-orange-400 outline">
                                <FaGithub></FaGithub>
                                Github
                            </button>
                        </div>
                        <h2 className="text-lg font-medium text-center">If you don{ap}t have any account <Link to='/register' className="text-orange-500">Register</Link></h2>

                    </div>
                </> : <>
                    <p className="text-xl font-bold">Welcome {user.displayName} to your profile</p>
                </>
            }
            <ToastContainer
                position="top-center"
                autoClose={1000}
            ></ToastContainer>
        </div>
    );
};

export default Login;