import React from 'react';

const Banner = () => {
    return (
        <section
            className="relative bg-[url(https://th.bing.com/th/id/R.3740c2eaed79291f97cc69c772b8c6e2?rik=zPoJIo4EaWgArg&pid=ImgRaw&r=0)] bg-cover bg-center bg-no-repeat"
        >
            <div
                className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"
            ></div>

            <div
                className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
            >
                <div className="max-w-xl text-center sm:text-left">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Let us find your
                        <strong className="block font-extrabold text-rose-700">
                            Favorite food.
                        </strong>
                    </h1>

                    <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                        While eating at a restaurant is an enjoyable and convenient occasional treat, most individuals and families prepare their meals at home. To make breakfast, lunch, and dinner
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                        <button
                            className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                        >
                            Get Started
                        </button>

                        <button
                            className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;