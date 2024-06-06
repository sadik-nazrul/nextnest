import { Link, NavLink } from "react-router-dom";
import Logo from '../assets/main.svg'
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";


const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    // User logout
    const userLogout = () => {
        logOut()
            .then()
            .catch(error => {
                const code = error.code;
                const rePlace = code.replace('auth/', '');
                toast.error(rePlace);
            })
    }
    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/properties'>Properties</NavLink></li>
    </>
    return (
        <div className="navbar bg-transparent px-2 lg:px-10 md:px-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/'><img src={Logo} alt="Next Nest" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                {
                    user ? <>
                        <img className="w-10 rounded-full object-cover" src={user.photoURL} alt={user?.displayName} />
                        <Link onClick={userLogout} className="px-5 py-2 bg-blue-500 text-white rounded-md hover:scale-110" to='/'>Logout</Link>
                    </> :
                        <Link className="px-5 py-2 bg-blue-500 text-white rounded-md hover:scale-110" to='/login'>Login</Link>

                }
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Header;