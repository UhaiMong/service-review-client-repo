import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Authprovider/Authprovider';

const AddReview = () => {
    const { _id, name } = useLoaderData();
    const { user } = useContext(AuthContext);
    const handleToSubmitForm = event => {
        event.preventDefault();
        const form = event.target;
        const email = user?.email || "Unknown";
        const url = form.url.value;
        const ratting = form.ratting.value;
        const description = form.description.value;
        const reviewer = {
            serviceId: _id,
            name,
            email,
            url,
            ratting,
            description,
        }
        if (ratting < 0 && ratting > 5) {
            alert("please enter valid ratting value");
        }
        fetch('https://service-review-server-psi.vercel.app/reviewers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(reviewer)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert("You review placed successfully.");
                    form.reset();
                }
            })
            .catch(error => console.error(error))
    }
    return (
        <div className="rounded-md hero my-9 bg-base-200">

            <div className="mt-8 rounded-md w-full lg:w-3/5">
                <div className="card flex shadow-2xl bg-base-100">
                    <h1 className="text-4xl text-center mt-4">Please fill up this form to review the service.</h1>
                    <form onSubmit={handleToSubmitForm} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' required type="email" placeholder="Email" defaultValue={user?.email} readOnly className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' required type="text" placeholder="Name" defaultValue={name} readOnly className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Url</span>
                            </label>
                            <input name='url' required type="url" placeholder="PhotoURL" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Ratting</span>
                            </label>
                            <input name='ratting' required type="number" placeholder="Ratting: 0 - 5 star" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Opinion</span>
                            </label>
                            <textarea name='description' required className="textarea textarea-success" placeholder="Your opinion"></textarea>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;