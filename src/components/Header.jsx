import { Link, NavLink } from "react-router-dom";
import Logo from '../assets/main.svg'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import './Header.css'


const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    // Header scrolling animation state
    const [scrolling, setScrolling] = useState(false);

    // Header scrolling animation effect
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      // Header scrolling animation function
      const handleScroll = () => {
        if (window.scrollY > 20) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      };

    // User logout
    const userLogout = () => {
        logOut()
            .then()
            .catch(error => {
                const code = error.code;
                const rePlace = code.replace('auth/', '');
                toast.error(rePlace);
            });
    }
    const navLinks = <>
        <li><NavLink className={({ isActive }) =>
            isActive
            && 'nav-link'
        } to='/'>Home</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            isActive
            && 'nav-link'
        } to='/contact'>Contact Us</NavLink></li>
    </>
    return (
        <div className={scrolling ? `navbar-scroll navbar lg:px-20 sticky top-0` : `navbar lg:px-20 sticky top-0`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[99] p-2 shadow bg-base-100 rounded-box w-52">
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
                        <>
                            <Link className="px-5 py-2 bg-blue-500 text-white rounded-md hover:scale-110" to='/register'>Register</Link>
                            <Link className="px-5 py-2 bg-tranparent border text-orange-500 rounded-md hover:scale-110" to='/login'>Login</Link>
                        </>

                }
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Header;