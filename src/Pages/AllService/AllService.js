import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import '../../Pages/ServicesCart/modelViewer.css'

const AllService = () => {
    const allServices = useLoaderData();

    const [model, setModel] = useState(false);
    const [tempImg, setTemImg] = useState();
    const handleToView = (img) => {
        setTemImg(img);
        setModel(true);
    }

    return (
        <div>
            <div className={model ? "model open" : "model"}>
                <img src={tempImg} alt="view-full" />
                <button onClick={() => setModel(false)}>Close</button>
            </div>
            {
                allServices.map(service =>
                    <div className='flex flex-col justify-between drop-shadow-lg'>


                        <div>
                            <img
                                key={service._id}
                                onClick={() => handleToView(service.img)}
                                alt="service-img"
                                src={service.img}
                                className="h-56 w-full rounded-md object-cover"
                            />
                            <div>
                                <p className='text-2xl font-medium text-gray-500'>Price: TK{service.price}/per</p>
                            </div>

                            <div>
                                <dd className="font-medium text-2xl lg:text-4xl">{service.name}</dd>
                                <p>{service.description}</p>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center gap-8 justify-between">
                            <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                                <p>Ratting: {service.ratting}</p>
                            </div>

                            <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                                <Link
                                    className="inline-flex items-center rounded border border-indigo-600 px-8 py-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500 mb-4"
                                    to={`/services/${service._id}`}
                                >
                                    <span className="text-sm font-medium">See Review </span>
                                </Link>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default AllService;