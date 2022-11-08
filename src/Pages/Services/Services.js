import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCart from '../ServicesCart/ServicesCart';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
            <div className='mx-auto my-8 text-center'>
                <p className="text-5xl my-5">আমাদের সেবাসমূহ</p>
                <p className="text-gray-400">আমরা বান্দরবানের আদিবাসিদের বিভিন্ন ধরনে খাবার ও ঐতিহ্যবাহী খাবার সরবরাহ,বিক্রয় ও অর্ডার গ্রহন করি</p>
            </div>

            <div className='mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServicesCart
                        key={service._id}
                        service={service}
                    ></ServicesCart>)
                }
            </div>
            <div className='mx-auto text-center'>
                <button className="btn btn-outline btn-warning">See all</button>
            </div>
        </div>

    );
};

export default Services;