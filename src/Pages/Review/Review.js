import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Authprovider/Authprovider';
import CustomerReview from '../CustomerReview/CustomerReview';

const Review = () => {

    const [reviews, setReviews] = useState([])
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/reviewers?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])
    return (
        <div>
            {
                reviews.length <= 0 ? <h1 className='text-4xl text-center font-semibold text-gray-500'>There are no service to review</h1>
                    :
                    <h1 className='text-4xl text-center font-semibold text-gray-500'>My total review : {reviews.length}</h1>
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