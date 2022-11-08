import React from 'react';
import { Link } from 'react-router-dom';

const Audience = () => {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div
                        className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
                    >
                        <img
                            alt="Party"
                            src="https://th.bing.com/th/id/R.5fd59bdbf8b955940a8af51241da0cc0?rik=gzUVbGv%2fllAzZA&pid=ImgRaw&r=0"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>

                    <div className="lg:py-24">
                        <h2 className="text-3xl font-bold sm:text-4xl">Grow your health</h2>

                        <p className="mt-4 text-gray-600">
                            সুস্বাস্থ্য মানে কেবল স্বাস্থ্যকর খাওয়া এবং ব্যায়াম করা নয়, একটি ইতিবাচক স্ব-চিত্র এবং একটি স্বাস্থ্যকর জীবনযাপন ও সুসাস্থ্যের অংশ।
                        </p>

                        <Link
                            to="/review"
                            className="mt-8 inline-flex items-center rounded border border-none bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                        >
                            <span className="text-sm font-medium"> Get Started </span>

                            <svg
                                className="ml-3 h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Audience;