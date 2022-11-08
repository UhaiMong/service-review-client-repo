import React from 'react';
// import { FaInstagram } from "@react-icons/all-files";
import { FaInstagram,FaFacebook,FaTwitter,FaGithub} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img from '../../../assets/img/img3.jpg';

const Footer = () => {
    return (
        <footer
            aria-label="Site Footer"
            className="bg-gray-900 text-white lg:grid lg:grid-cols-5">
            <div className="hidden lg:relative lg:col-span-2 lg:block">
                <img
                    alt="Art"
                    src={img}
                    className="absolute inset-0 h-full w-full object-cover" />
            </div>

            <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                        <p className="font-medium">
                            <span className="text-xs uppercase tracking-widest"> Call </span>

                            <Link to='/contact' className="block text-2xl hover:opacity-75 sm:text-3xl" href="">
                                0123456789
                            </Link>
                        </p>

                        <ul className="mt-8 space-y-2 text-sm">
                            <li>Monday to Friday: 10am - 5pm</li>
                            <li>Weekend: 10am - 3pm</li>
                        </ul>

                        <div className="mt-16 flex gap-3">
                            <Link className="rounded-full border border-white/25 p-2 hover:opacity-75">
                                <FaInstagram/>
                            </Link>

                            <Link
                                className="rounded-full border border-white/25 p-2 hover:opacity-75">
                                <FaFacebook/>
                            </Link>

                            <Link
                                className="rounded-full border border-white/25 p-2 hover:opacity-75">
                                <FaGithub/>
                            </Link>

                            <Link
                                className="rounded-full border border-white/25 p-2 hover:opacity-75">
                                <FaTwitter/>
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <p className="font-medium">Support</p>

                            <nav
                                aria-label="Footer Nav"
                                className="mt-4 flex flex-col space-y-2 text-sm text-gray-300"
                            >
                                <Link className="hover:opacity-75" to="/contact"> Contact </Link>
                                <Link className="hover:opacity-75" to="/faq"> FAQs </Link>
                                <Link className="hover:opacity-75" to="/livechat"> Live Chat </Link>
                                <Link className="hover:opacity-75" to="/forum"> Forums </Link>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-800 pt-12">
                    <div
                        className="text-sm text-gray-300 sm:flex sm:items-center sm:justify-between">
                        <div className="flex gap-3">
                            <Link className="hover:opacity-75" to="/privacy"> Privacy Policy </Link>
                            <Link className="hover:opacity-75" to="/terms"> Terms & Conditions </Link>
                            <Link className="hover:opacity-75" to="/return"> Returns Policy </Link>
                        </div>

                        <p className="mt-4 sm:mt-0">&copy; 2022 Zero One.</p>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;