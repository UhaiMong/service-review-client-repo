import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetailsById = () => {


    const service = useLoaderData();
    const { _id, name, price, description, img } = service;
    return (
        <div
            className="relative block rounded-xl border border-gray-100 p-8 shadow-xl w-full md:w-2/4 mx-auto"
        >
            <span
                className="absolute right-4 top-4 rounded-full bg-green-100 px-3 py-1.5 text-xl md:text-2xl font-medium text-green-600"
            >
                Price: Tk{price}/per
            </span>

            <div className="mt-4 text-gray-500 sm:pr-8">
                <img classNameName='cover' src={img} alt="" />

                <h3 className="mt-4 text-xl font-bold text-gray-900">{name}</h3>

                <p className="mt-2 text-sm">
                   {description}
                </p><br/><hr /><br/>
                
                <Link to={`/addreview/${_id}`}>
                    <button className='mt-5 btn btn-outline btn-success capitalize'>Review Now</button>
                </Link>

            </div>
        </div>

    );
};

export default ServiceDetailsById;