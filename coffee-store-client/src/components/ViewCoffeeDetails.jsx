import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const ViewCoffeeDetails = () => {
    const coffee = useLoaderData();

    return (
        <div className="space-y-10 w-[90%] mx-auto">
            <div className="mt-5">
                <Link to="/" ><i className="text-purple-800 font-semibold flex items-center gap-1"> <FaArrowLeft /> Back to home</i></Link>
            </div>
            <div className='flex bg-[#F5F4F1] flex-col md:flex-row p-8 items-center rounded-md'>
                <div className="flex-1">
                    <img src={coffee.photoUrl} alt="" />
                </div>
                <div className='space-y-2 flex-1'>
                    <p><span className='font-bold'>Name: </span>{coffee.name}</p>
                    <p><span className='font-bold'>Chef: </span>{coffee.chef}</p>
                    <p><span className='font-bold'>Supplier: </span>{coffee.supplier}</p>
                    <p><span className='font-bold'>Category: </span>{coffee.category}</p>
                    <p><span className='font-bold'>Taste: </span>{coffee.taste}</p>
                    <p><span className='font-bold'>Details: </span>{coffee.details}</p>
                </div>
            </div>
        </div>
    );
};

export default ViewCoffeeDetails;