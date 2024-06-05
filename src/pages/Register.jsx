import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";


const Register = () => {
    const { userWithGoogle, userWithGithub, ap, createUserEmailPass, user } = useContext(AuthContext);


    // Register with email and pass
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        // Password length validation
        if (password.length < 6) {
            toast.error('Password must have 6 character')
            return;
        }
        // Password uppercase validation
        else if (!/[A-Z]/.test(password)) {
            toast.error('Password Must have an Uppercase letter')
            return;
        }
        // Password lowercase validation
        else if (!/[a-z]/.test(password)) {
            toast.error('Password Must have an Lowercase letter');
            return;
        }
        createUserEmailPass(email, password)
            .then(result => {
                // Update profile
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        toast.success('Profile Creation Successfull')
                    })
                    .catch(error => {
                        const code = error.code;
                        const rePlace = code.replace('auth/', '');
                        toast.error(rePlace);
                    })
            })

            .catch(error => {
                const code = error.code;
                const rePlace = code.replace('auth/', '');
                toast.error(rePlace);
            });
    }

    // Google register
    const handleGoogleLogin = () => {
        userWithGoogle()
            .then(() => {
                toast.success("Google Authentication Successfull")
            })
            .catch(error => {
                const code = error.code;
                const rePlace = code.replace('auth/', '');
                toast.error(rePlace);
            })
    }

    // Github Register
    const handleGithubLogin = () => {
        userWithGithub()
            .then(() => {
                toast.success("Google Authentication Successfull")
            })
            .catch(error => {
                const code = error.code;
                const rePlace = code.replace('auth/', '');
                toast.error(rePlace);
            })
    }
    return (
        <div className="container mx-auto py-10 flex flex-col items-center">
            {
                !user ? <>
                    <div className="w-2/5 shadow-xl p-10 space-y-4 rounded-xl">
                        <h2 className="text-xl font-semibold text-center">Create Your Account</h2>

                        <form onSubmit={handleRegister} className="flex flex-col gap-4">
                            <input placeholder="Name" className="outline px-4 py-1 rounded" type="text" name="name" required />
                            <input placeholder="Photo Url" className="outline px-4 py-1 rounded" type="text" name="photo" required />
                            <input placeholder="Email" className="outline px-4 py-1 rounded" type="email" name="email" required />
                            <input placeholder="Password" className="outline px-4 py-1 rounded" type="password" name="password" required />
                            <input className="btn px-5 py-2 bg-orange-500 text-white text-center gap-2 rounded hover:bg-transparent hover:text-orange-400 hover:outline" type="submit" value="Register" />
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
                        <h2 className="text-lg font-medium text-center">If you don{ap}t have any account <Link to='/login' className="text-orange-500">Login</Link></h2>
                    </div>
                </> : <h2 className="text-xl font-semibold text-center">You are Now logged in</h2>
            }
            <ToastContainer
                position="top-center"
                autoClose={2000}
            ></ToastContainer>
        </div>
    );
};

export default Register;