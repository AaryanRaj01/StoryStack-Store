import React from 'react';

function Contact() {
    return (
        <div className="flex items-center shadow-md justify-center min-h-screen z-50 max-w-screen-2xl container ">
            <div className=" p-8 rounded shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4 text-center">Contact Us</h1>
                <form>
                    <div className="mb-4 z-50 max-w-screen-2xl container  dark:bg-slate-900 dark:text-white mx-auto">
                        <label className="block  text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="shadow  border-[2px] sadow-md p-5 rounded-md  w-full py-2 px-3  "
                            id="name"
                            type="text"
                            placeholder="Your name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block  text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Your email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block  text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="message"
                            rows="5"
                            placeholder="Your message"
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-black px-3 py-2 text-white rounded-md hover-bg-slate-800 duration-300 cursor-pointer"
                            type="button"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
