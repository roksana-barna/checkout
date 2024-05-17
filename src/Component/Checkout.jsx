import React from 'react';
import img from '../assets/MC Payment method icon S.png'
import img2 from '../assets/Visa Payment method icon S.png'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
    {
        id: 1,
        rating: 5,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 2,
        rating: 4,
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 3,
        rating: 5,
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};
const Checkout = () => {
    return (
        <div className="min-h-screen lg:flex items-center justify-center" style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/gradient-violet-glowing-particles-background-wallpaper-4k-image-downloaded_555090-51557.jpg?w=740')" }}>
            <div className="p-8 rounded-lg shadow-lg max-w-md lg:w-full">
                <h2 className="text-2xl font-semibold text-white mb-6">Checkout</h2>
                <div className="mb-6">
                    <div className="lg:relative mb-4">
                        <select className="block appearance-none lg:w-full bg-purple-400 border border-gray-400 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option> Shipping Information</option>
                            <option>Standard Shipping</option>
                            <option>Express Shipping</option>
                            <option>Next Day Delivery</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                        </div>
                    </div>
                </div>

                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
                    <div className="grid grid-cols-2 justify-end ">
                        <img className='w-12 h-12' src={img} alt="Visa" />
                        <img src={img2} alt="MasterCard" className='w-12 h-12' />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Cardholder Name</label>
                    <input type="text" className="  bg-purple-400 mt-1 p-2 border text-black border-gray-400 rounded w-full" placeholder="John Doe" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Card Number</label>
                    <input type="text" className="mt-1 p-2 borderv  bg-purple-400 border-gray-400 rounded w-full" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="flex space-x-4">
                    <div className="mb-4 flex-1">
                        <label className="block text-gray-700">MM/YY</label>
                        <input type="text" className="mt-1 p-2   bg-purple-400 border border-gray-400 rounded w-full" placeholder="MM/YY" />
                    </div>
                    <div className="mb-4 flex-1">
                        <label className="block text-gray-700">CVC</label>
                        <input type="text" className="mt-1 p-2 border  bg-purple-400 border-gray-400 rounded w-full" placeholder="CVC" />
                    </div>
                </div>

                {/* Pay Now Button */}
                <button type="button" className="w-full bg-blue-500 text-white p-2 rounded mt-4">Pay Now</button>
            </div>
            <div>
                <div className="bg-purple-400 p-8 rounded-lg shadow-lg max-w-md lg:w-full text-center">
                    <h2 className="text-2xl text-black font-semibold mb-4">John Doe</h2>
                    <Slider {...settings}>
                        {testimonials.map(testimonial => (
                            <div key={testimonial.id} className="text-center">
                                <div className="flex justify-center mb-4">
                                    <h3 className="text-lg font-semibold mr-2">{testimonial.rating}</h3>
                                    <div className="flex">
                                        {[...Array(testimonial.rating)].map((_, index) => (
                                            <svg
                                                key={index}
                                                className="h-5 w-5 fill-current text-yellow-500"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M10 1l2.56 5.3 5.7.83-4.14 4.04.98 5.69-5.1-2.67-5.1 2.67.98-5.69-4.14-4.04 5.7-.83L10 1z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-black">{testimonial.text}</p>
                            </div>
                        ))}
                    </Slider>

                </div>
                <div className="bg-purple-400 p-8 rounded-lg mt-6 shadow-lg max-w-md lg:w-full">
                    <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
                    <div className="flex justify-between mb-4">
                        <p>Today's Cost:$200</p>
                    </div>
                    <div className="flex justify-between mb-4">
                        <p>Total cost :$200</p>
                    </div>
                    <hr className="mb-4" />
                    <button className="bg-blue-500 text-white py-2 px-4 rounded w-full">Proceed to Checkout</button>
                </div>
                
        </div>

        </div >
    );
};

export default Checkout;
