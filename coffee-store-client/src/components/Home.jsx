import bannerbg from "../../public/images/more/bannerbg.png"
import icon1 from "../../public/images/icons/1.png"
import icon2 from "../../public/images/icons/2.png"
import icon3 from "../../public/images/icons/3.png"
import icon4 from "../../public/images/icons/4.png"
import cup1 from "../../public/images/cups/Rectangle 9.png"
import cup2 from "../../public/images/cups/Rectangle 10.png"
import cup3 from "../../public/images/cups/Rectangle 11.png"
import cup4 from "../../public/images/cups/Rectangle 12.png"
import cup5 from "../../public/images/cups/Rectangle 13.png"
import cup6 from "../../public/images/cups/Rectangle 14.png"
import cup7 from "../../public/images/cups/Rectangle 15.png"
import cup8 from "../../public/images/cups/Rectangle 16.png"
import { Link, useLoaderData } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa";
import CoffeeCard from "./CoffeeCard"
import { useState } from "react"


const Home = () => {
    const coffeeDetails = useLoaderData();

    return (
        <div>
            {/* Banner section */}
            <div style={{ backgroundImage: `url(${bannerbg})` }} className="bg-no-repeat bg-left-bottom bg-cover py-64 pl-[50%] pr-10">
                <div className="space-y-4">
                    <h2 className="text-white font-bold text-2xl">Would you like a Cup of Delicious Coffee?</h2>
                    <p className="text-white font-light">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className="btn bg-[#E3B577]">Learn More</button>
                </div>
            </div>

            {/* Below Banner */}
            <div className="bg-[#ECEAE3]">
                <div className="flex flex-col md:flex-row gap-5 py-10 mx-auto w-[90%]">
                    <div className="space-y-2">
                        <img src={icon1} alt="" />
                        <h2 className="font-bold">Awesome Aroma</h2>
                        <p className="font-light">
                            You will definitely be a fan of the design & aroma of your coffee
                        </p>
                    </div>
                    <div className="space-y-2">
                        <img src={icon2} alt="" />
                        <h2 className="font-bold">High Quality</h2>
                        <p className="font-light">
                            We served the coffee to you maintaining the best quality
                        </p>
                    </div>
                    <div className="space-y-2">
                        <img src={icon3} alt="" />
                        <h2 className="font-bold">Pure Grades</h2>
                        <p className="font-light">
                            The coffee is made of the green coffee beans which you will love
                        </p>
                    </div>
                    <div className="space-y-2">
                        <img src={icon4} alt="" />
                        <h2 className="font-bold">Proper Roasting</h2>
                        <p className="font-light">
                            Your coffee is brewed by first roasting the green coffee beans
                        </p>
                    </div>
                </div>
            </div>


            {/* Our Popular Product */}
            <div className="mt-10 w-[90%] mx-auto space-y-5">
                <div className="flex flex-col items-center justify-center gap-4">
                    <h5>--- Sip & Savor ---</h5>
                    <h2 className="text-3xl font-bold">Our Popular Products</h2>
                    <Link to="/addCoffee" className="btn text-white bg-[#E3B577]"> Add Coffee <FaArrowRight />
                    </Link>
                </div>
                <div className="grid gird-cols-1 md:grid-cols-2 gap-5">
                    {
                        coffeeDetails.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
                    }
                </div>
            </div>


            {/* Follow Section */}
            <div className="mt-10 space-y-5 w-[90%] mx-auto">
                <div className="text-center">
                    <h5 className="font-light">Follow Us Now</h5>
                    <h2 className="text-3xl font-bold">Follow on Instagram</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 space-y-2">
                    <div>
                        <img src={cup1} className="w-full" alt="" />
                    </div>
                    <div>
                        <img src={cup2} className="w-full" alt="" />
                    </div>
                    <div>
                        <img src={cup3} className="w-full" alt="" />
                    </div>
                    <div>
                        <img src={cup4} className="w-full" alt="" />
                    </div>
                    <div>
                        <img src={cup5} className="w-full" alt="" />
                    </div>
                    <div>
                        <img src={cup6} className="w-full" alt="" />
                    </div>
                    <div>
                        <img src={cup7} className="w-full" alt="" />
                    </div>
                    <div>
                        <img src={cup8} className="w-full" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;