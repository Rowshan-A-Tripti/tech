import React from 'react';

const SecondSection = () => {
    return (
        <div>
            <div className='bg-black grid lg:flex items-center'>
                <img className='w-full lg:w-2/4 lg:p-24' src="https://i.ibb.co/ctKSnyX/new-vector.jpg" />
                <h1 className='text-3xl pl-16 lg:pl-0 lg:text-6xl font-semibold text-pink-800 lg:w-2/4 pr-24' data-aos="zoom-in"  data-aos-duration="3000"> <span className='bg-gradient-to-r from-blue-700 via-pink-900 to-purple-900 text-transparent bg-clip-text ' >Welcome to new</span><span className='text-5xl lg:text-8xl bg-gradient-to-r from-blue-700 via-pink-900 to-purple-900 text-transparent bg-clip-text'> era</span></h1>
            </div>
        </div>
            
    );
};

export default SecondSection;