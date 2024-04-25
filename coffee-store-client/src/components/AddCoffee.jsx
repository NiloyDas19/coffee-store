import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import swal from 'sweetalert';

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoUrl = form.photoUrl.value;
        const newCoffee = { name, chef, supplier, taste, category, details, photoUrl };
        console.log(newCoffee);

        fetch('http://localhost:5000/coffee', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    swal({
                        title: "Good job!",
                        text: "Coffee Added Successfully",
                        icon: "success",
                        button: "ok!",
                    });
                    form.reset();
                }
            })

    }

    return (
        <div className="space-y-10 w-[90%] mx-auto">
            <div className="mt-5">
                <Link to="/" ><i className="text-purple-800 font-semibold flex items-center gap-1"> <FaArrowLeft /> Back to home</i></Link>
            </div>
            <div className="bg-[#F4F3F0] space-y-10 rounded-2xl">
                <div className="text-center space-y-2 pt-10 px-2">
                    <h4 className="font-bold text-3xl text-purple-500">Add New Coffee</h4>
                    <p>
                        It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                    </p>
                </div>

                <form className="space-y-2 flex justify-center" onSubmit={handleAddCoffee}>
                    <div className="w-[90%]">
                        <div className="flex gap-10">
                            <div className="w-full">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text font-bold">Name</span>
                                    </div>
                                    <input type="text" name="name" placeholder="Enter Coffee Name" className="input input-bordered w-full" required />
                                </label>
                            </div>
                            <div className="w-full">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text font-bold">Chef</span>
                                    </div>
                                    <input type="text" name="chef" placeholder="Enter Coffee Chef" className="input input-bordered w-full" required />
                                </label>
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <div className="w-full">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text font-bold">Supplier</span>
                                    </div>
                                    <input type="text" name="supplier" placeholder="Enter Coffee Supplier" className="input input-bordered w-full " required />
                                </label>
                            </div>
                            <div className="w-full">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text font-bold">Taste</span>
                                    </div>
                                    <input type="text" name="taste" placeholder="Enter Coffee Taste" className="input input-bordered w-full " required />
                                </label>
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <div className="w-full">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text font-bold">Category</span>
                                    </div>
                                    <input type="text" name="category" placeholder="Enter Coffee Category" className="input input-bordered w-full " required />
                                </label>
                            </div>
                            <div className="w-full">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text font-bold">Details</span>
                                    </div>
                                    <input type="text" name="details" placeholder="Enter Coffee Details" className="input input-bordered w-full " required />
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <label className="w-full">
                                <div className="label">
                                    <span className="label-text font-bold">Photo</span>
                                </div>
                                <input type="text" name="photoUrl" placeholder="Enter Photo URL" className="input input-bordered w-full " required />
                            </label>
                            <div className="mb-10">
                                <input type="submit" value="Add Coffee" className="w-full btn bg-[#D2B48C] border-2 border-black" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;