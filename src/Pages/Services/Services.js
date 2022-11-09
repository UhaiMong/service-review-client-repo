import React, { useEffect, useState } from 'react';
import ServicesCart from '../ServicesCart/ServicesCart';
import './Services_module.css'

const Services = () => {
    const [services, setServices] = useState([]);
    const [count,setCount] = useState(0)
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(3);

    const pages = Math.ceil(count / size);

    // useEffect(() => {
    //     fetch('http://localhost:5000/services')
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, []);

    useEffect(() => {
        const url = `http://localhost:5000/services?page=${page}&size=${size}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCount(data.count)
                setServices(data.services)
            })
    }, [page, size]);
    return (
        <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
            <div className='mx-auto my-8 text-center'>
                <p className="text-3xl lg:text-5xl my-5">আমাদের সেবাসমূহ</p>
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
                    <div className='pagination'>
                        {
                            [...Array(pages).keys()].map(number => <button
                                key={number}
                                onClick={()=>setPage(number)}
                                className={page === number &&'selectedPage'}
                            >
                                {number}
                            </button>)
                        }
                        
                    </div>
                <button className="btn btn-outline btn-success mr-6 capitalize">See all</button>
                <button className="btn btn-outline btn-warning capitalize">Add service</button>
            </div>
        </div>

    );
};

export default Services;