import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './modelViewer_module.css';

const ServicesCart = ({ service }) => {
    const { _id, img, name, price, ratting, description } = service;
    const [model, setModel] = useState(false);
    const [tempImg, setTemImg] = useState();
    const handleToView = (img) => {
        setTemImg(img);
        setModel(true);
    }
    return (
        <div className='flex flex-col justify-between drop-shadow-lg'>
            <div className={model ? "model open" : "model"}>
                <img src={tempImg} alt="view-full" />
                <button onClick={()=>setModel(false)}>Close</button>
            </div>

            <div>
                <img
                    key={_id}
                    onClick={() => handleToView(img)}
                    alt="service-img"
                    src={img}
                    className="h-56 w-full rounded-md object-cover"
                />
                <div>
                    <p className='text-2xl font-medium text-gray-500'>Price: TK{price}/per</p>
                </div>

                <div>
                    <dd className="font-medium text-4xl">{name}</dd>
                    <p>{description.slice(0, 100)} [...]</p>
                </div>
            </div>

            <div className="mt-6 flex items-center gap-8 justify-between">
                <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                    <p>Ratting: {ratting}</p>
                </div>

                <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                    <Link
                        className="inline-flex items-center rounded border border-indigo-600 px-8 py-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                        to={`/services/${_id}`}
                    >
                        <span className="text-sm font-medium"> Details </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCart;