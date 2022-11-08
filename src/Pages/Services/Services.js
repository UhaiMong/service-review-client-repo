import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
            <img
                alt="Home"
                src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-56 w-full rounded-md object-cover"
            />

            <div className="mt-2">
                <dl>
                    <div>
                        <p className='text-2xl font-medium text-gray-500'>price</p>
                    </div>

                    <div>
                        <dd className="font-medium text-4xl">title</dd>
                        <p>Description</p>
                    </div>
                </dl>

                <div className="mt-6 flex items-center gap-8 justify-between">
                    <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                        <p>ratting</p>
                    </div>

                    <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                        <Link
                            className="inline-flex items-center rounded border border-indigo-600 px-8 py-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                            to="/details"
                        >
                            <span className="text-sm font-medium"> Details </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Services;