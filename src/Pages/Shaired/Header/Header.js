import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/icon/icon.png';
import { AuthContext } from '../../../Authprovider/Authprovider';

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const handleToLogout = () => {
        logout()
            .then(result => {
                const user = result.user;
                alert(`${user?.email} is successfully logged out.`);
            })
            .catch(error => console.error(error))
    }
    const menuItems = <>
        <li className="flex items-center gap-6 text-sm">
            <Link to='/' className="text-gray-500 transition hover:text-gray-500/75">Home</Link>
            <Link to='/review' className="text-gray-500 transition hover:text-gray-500/75">My review</Link>
            <Link to='/blog' className="text-gray-500 transition hover:text-gray-500/75">Blog</Link>
            {
                user?.email && <h1 className='hidden md:block'>{user?.email}</h1>
            }
        </li>
    </>
    return (
        <header aria-label="Site Header" className="bg-white sticky top-0 z-50">
            <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <Link to='/'><img className='w-16 ' src={logo} alt="Logo" /></Link>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Site Nav">
                            <ul>
                                {menuItems}
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center">
                        <div className="flex gap-4">
                            {
                                user?.uid ?
                                    <div>
                                        <Link
                                            to='/'
                                            className="rounded-md bg-teal-600 px-3 py-2 text-sm font-medium text-white shadow"
                                            onClick={handleToLogout}
                                        >
                                            Logout
                                        </Link>
                                    </div>
                                    :
                                    <>
                                        <div>
                                            <Link to='/login'
                                                className="rounded-md bg-teal-600 px-3 py-2 text-sm font-medium text-white shadow">
                                                Login
                                            </Link>
                                        </div>

                                        <div>
                                            <Link to='/signup'
                                                className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-teal-600">
                                                Register
                                            </Link>
                                        </div>
                                    </>
                            }
                        </div>

                    </div>
                    <div className="block md:hidden navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {menuItems}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;