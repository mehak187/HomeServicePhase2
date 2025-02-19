import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5'
import ServiceBox from '../../Components/ServiceBox';

const Dashboardc = () => {
    const services = [
        {
            id: 1,
            title: "Plumbing Service",
            price: 50,
            description: "Fix your leaking pipes and taps.",
            tags: ["Plumbing", "Repair"],
            image: "",
            publish: 2,
        },
        {
            id: 2,
            title: "House Cleaning",
            price: 30,
            description: "Professional house cleaning services.",
            tags: ["Cleaning", "Home"],
            image: "",
            publish: 2,
        },
    ];
    return (
        <div>
            <div className="mt-4">
                <div className="myacontainer">
                    <div className="bg-[#E7F4FBED] rounded-2xl px-5 md:py-[70px] py-5">
                        <div className="max-w-[700px] mx-auto">
                            <p className="text-center md:text-2xl lg:text-3xl text-lg">
                                Hi <span className="font-semibold">Condel,</span> how would you
                                like to hire today?
                            </p>
                            <p className="mb-0 text-center mt-5">
                                Hire vetted people you can trust
                            </p>
                            <div className="flex mt-12 justify-center">
                                <div className="flex flex-col sm:flex-row rounded-xl px-2 bg-white py-2">
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Search for any service..."
                                            className="py-[10px] bg-transparent focus-none sm:border-r px-3"
                                        />
                                    </div>
                                    <div className="flex items-center px-3">
                                        <IoLocationOutline className="me-2 text-2xl text-[#6B6B6B]" />
                                        <input
                                            type="text"
                                            placeholder="Location for the service..."
                                            className="py-[10px] bg-transparent focus-none"
                                        />
                                    </div>
                                    <div className="rounded-xl flex justify-center items-center bg-[#0F91D2] px-4 text-xl text-white py-2">
                                        <FaSearch />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="text-lg mt-8">Filters</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 max-w-[800px] mt-2">
                <div className="me-3 my-1">
                    <select
                        name="budget"
                        className="border w-full border-[#E4E4E4] rounded-lg px-3 py-2 bg-white"
                    >
                        <option value="">Budget</option>
                        <option value="50">Up to $50</option>
                        <option value="100">Up to $100</option>
                    </select>
                </div>
                <div className="me-3 my-1">
                    <select
                        name="reviews"
                        className="border w-full border-[#E4E4E4] rounded-lg px-3 py-2 bg-white"
                    >
                        <option value="">Reviews</option>
                        <option value="5">5 stars</option>
                        <option value="4">4 stars</option>
                    </select>
                </div>
                <div className="me-3 my-1">
                    <select
                        name="deliveryTime"
                        className="border w-full border-[#E4E4E4] rounded-lg px-3 py-2 bg-white"
                    >
                        <option value="">Delivery Time</option>
                        <option value="1">1 day</option>
                        <option value="3">3 days</option>
                    </select>
                </div>
                <div className="me-3 my-1">
                    <select
                        name="location"
                        className="border w-full border-[#E4E4E4] rounded-lg px-3 py-2 bg-white"
                    >
                        <option value="">Location/Distance</option>
                        <option value="10">Within 10 miles</option>
                        <option value="50">Within 50 miles</option>
                    </select>
                </div>
            </div>
            <div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className='border rounded-xl'>
                        <div className='bg-[#00000014] p-4 rounded-t-xl'>
                            <h6 className='text-center'>Active Orders</h6>
                        </div>
                        <div className='p-3'>
                            <div className='flex justify-between items-center border p-3 rounded-xl'>
                                <div>
                                    <h5>Web software develop, Progressive web app</h5>
                                </div>
                                <div>
                                    <p className='bg-[#46D20F] py-2 px-6'>Delivered</p>
                                </div>
                            </div>
                            <div className='flex justify-between items-center border p-3 rounded-xl mt-3'>
                                <div>
                                    <h5>Web software develop, Progressive web app</h5>
                                </div>
                                <div>
                                    <p className='bg-[#46D20F] py-2 px-6'>Delivered</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="text-xl font-semibold mt-5">Recently Viewed</h2>
          <div className="grid mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
            {services.map((service) => (
              <ServiceBox
                key={service.id}
                title={service.title}
                price={service.price}
                description={service.description}
                tags={service.tags}
                image={service.image}
                publish={service.publish}
              />
            ))}
          </div>
        </div>
    )
}

export default Dashboardc