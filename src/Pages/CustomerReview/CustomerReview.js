import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../Hook/useTitle';

const CustomerReview = ({ review, reviews }) => {
    useTitle('Customer Review')
    console.log("review", review, "reveiews", reviews);
    const [reviewer, setReviewer] = useState()
    const { _id, name, description, url } = review;

    const handleToDelete = review => {
        const agree = window.confirm(`Do you want to delete ${name} review?`);
        if (agree) {
            fetch(`https://service-review-server-psi.vercel.app/review/${_id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert("successfully deleted.");
                        const remainingReview = reviews.filter(rvw => rvw.serviceId !== review.serviceId);
                        setReviewer(remainingReview)
                    }
                })
        }
    }
    return (
        <div className="relative rounded-lg border border-gray-200 shadow-lg my-5">
            <button
                onClick={() => handleToDelete(review._id)}
                className="absolute -top-1 -right-1 rounded-full border border-gray-300 bg-gray-100 p-1"
            >
                <span className="sr-only">Close</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule={"evenodd"}
                    />
                </svg>
            </button>

            <div className="flex items-center p-4">
                <img
                    alt="reviewer"
                    src={url}
                    className="h-12 w-12 rounded-lg object-cover"
                />

                <div className="ml-3 overflow-hidden">
                    <p className="font-medium text-gray-900">{name}</p>

                    <p className="text-sm text-gray-500">{description}</p>
                </div>
            </div>
            <Link to={`/update/${review._id}`}>
                <button className='btn btn-outline rounded-md my-4'>Edit Comment</button>
            </Link>
        </div>

    );
};

export default CustomerReview;