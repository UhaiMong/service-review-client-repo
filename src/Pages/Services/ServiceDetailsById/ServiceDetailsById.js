import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetailsById = () => {
    const service = useLoaderData();
    const { name, price, description,img } = service;
    return (
        <div
            className="relative block rounded-xl border border-gray-100 p-8 shadow-xl w-full md:w-2/4 mx-auto"
        >
            <span
                className="absolute right-4 top-4 rounded-full bg-green-100 px-3 py-1.5 text-xl md:text-2xl font-medium text-green-600"
            >
                Price: Tk{price}/per
            </span>

            <div className="mt-4 text-gray-500 sm:pr-8">
                <img classNameName='cover' src={img} alt="" />

                <h3 className="mt-4 text-xl font-bold text-gray-900">{name}</h3>

                <p className="mt-2 text-sm">
                   {description}
                </p><hr/>
                <button className='mt-5 btn btn-outline btn-success'>Order Now</button>
            </div>
        </div>

    );
};

export default ServiceDetailsById;