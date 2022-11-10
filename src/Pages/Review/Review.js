import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Authprovider/Authprovider';
import CustomerReview from '../CustomerReview/CustomerReview';

const Review = () => {

    const [reviews, setReviews] = useState([])

    const { user, logout } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://service-review-server-psi.vercel.app/reviewers?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('review-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logout();
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                setReviews(data)
            })
    }, [user?.email, logout])
    return (
        <div>
            {
                reviews.length <= 0 ? <h1 className='text-4xl text-center font-semibold text-gray-500'>There are no service to review</h1>
                    :
                    <h1 className='text-4xl text-center font-semibold text-gray-500'>My total review : {reviews?.length}</h1>
            }
            {
                reviews.map(review => <CustomerReview
                    key={review.serviceId}
                    review={review}
                    reviews={reviews}
                ></CustomerReview>)
            }
        </div>
    );
};

export default Review;