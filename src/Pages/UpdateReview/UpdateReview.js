import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Authprovider/Authprovider';

const UpdateReview = () => {
    const { user } = useContext(AuthContext);

    const oldReview = useLoaderData();
    const [review, setReview] = useState(oldReview);

    const handleUpdateReview = event => {
        event.preventDefault();
        fetch(`https://service-review-server-psi.vercel.app/update/${oldReview._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data)
                }
            })

    }
    const handleReviewChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...review };
        newReview[field] = value;
        setReview(newReview);

    }
    return (
        <div className="rounded-md hero my-9 bg-base-200">

            <div className="mt-8 rounded-md w-full lg:w-3/5">
                <div className="card flex shadow-2xl bg-base-100">
                    <h1 className="text-4xl text-center mt-4">Update {oldReview.name} information</h1>
                    <form onSubmit={handleUpdateReview} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onChange={handleReviewChange} name='email' required type="email" placeholder="Email" defaultValue={user?.email} readOnly className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input onChange={handleReviewChange} name='name' required type="text" placeholder="Name" defaultValue={oldReview.name} readOnly className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Url</span>
                            </label>
                            <input onChange={handleReviewChange}
                                defaultValue={oldReview.url}
                                name='url' required type="url" placeholder="PhotoURL" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Ratting</span>
                            </label>
                            <input onChange={handleReviewChange}
                                defaultValue={oldReview.ratting}
                                name='ratting' required type="number" placeholder="Ratting: 0 - 5 star" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Opinion</span>
                            </label>
                            <textarea onChange={handleReviewChange}
                                defaultValue={oldReview.description}
                                name='description' required className="textarea textarea-success" placeholder="Your opinion"></textarea>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateReview;