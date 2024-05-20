import React from 'react';

function About() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className=" p-8 rounded shadow-md  w-full max-w-2xl">
                <h1 className="text-2xl font-bold mb-4 ">About Us</h1>
                <p className=" text-lg mb-4">
                    Welcome to our website! We are dedicated to providing you with the best experience possible.
                    Our mission is to deliver high-quality products and services that exceed your expectations.
                </p>
                <h2 className="text-2xl font-semibold mb-2 ">Our History</h2>
                <p className="mb-4">
                    Established in 2020, we started with a small team of passionate individuals who wanted to make a difference.
                    Over the years, we have grown significantly and expanded our offerings to cater to a wider audience.
                </p>
                <h2 className="text-2xl font-semibold mb-2 ">Our Values</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>Quality: We prioritize quality in everything we do.</li>
                    <li>Customer Satisfaction: Our customers are at the heart of our business.</li>
                    <li>Innovation: We continually innovate to meet the changing needs of our clients.</li>
                    <li>Integrity: We conduct our business with the highest level of integrity.</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-2 ">Our Team</h2>
                <p className=" mb-4">
                    Our team consists of skilled professionals with a wealth of experience in their respective fields. We are committed to fostering a collaborative and inclusive work environment.
                </p>
            </div>
        </div>
    );
}

export default About;
