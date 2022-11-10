import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Authprovider/Authprovider';
import useTitle from '../Hook/useTitle';

const AddServices = () => {
    useTitle("Update Review")
    const { user } = useContext(AuthContext);

    // const oldReview = useLoaderData();
    // const [review, setReview] = useState(oldReview);

    const handleAddUser = event => {
        event.preventDefault();
        // fetch(`https://service-review-server-psi.vercel.app/update/${oldReview._id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(review)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.modifiedCount > 0) {
        //             console.log(data)
        //         }
        //     })

    }
    const handleAddServiceInput = event => {
        // const field = event.target.name;
        // const value = event.target.value;
        // const newReview = { ...review };
        // newReview[field] = value;
        // setReview(newReview);

    }
    return (
        <div className="rounded-md hero my-9 bg-base-200">
            <div className="mt-8 rounded-md w-full lg:w-3/5">
                <div className="card flex shadow-2xl bg-base-100">
                    <h1 className="text-2xl text-center mt-4">{user?.email}</h1>
                    <h1 className="text-4xl text-center mt-4">Add new Services</h1>
                    <form onSubmit={handleAddUser} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input onChange={handleAddServiceInput} name='name' required type="text" placeholder="Title" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input onChange={handleAddServiceInput} name='url' required type="url" placeholder="PhotoURL" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input onChange={handleAddServiceInput}

                                name='price' required type="number" placeholder="Price" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Ratting</span>
                            </label>
                            <input onChange={handleAddServiceInput}
                                name='ratting' required type="number" placeholder="Ratting: 0 - 5 star" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <textarea onChange={handleAddServiceInput}
                                name='description' required className="textarea textarea-success" placeholder="A short description"></textarea>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add Services</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddServices;