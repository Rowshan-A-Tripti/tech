import Navbar from "../Navbar/Navbar";



const Banner = () => {
    return (
        <div className=" min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/CJKk5Fs/newnew.jpg)' }}>
            
            
            <div className=" text-center lg:pt-44 ">
                <div className="max-w-md lg:pl-20">
                    <h1 className="mb-5 text-5xl text-white font-bold bg-gradient-to-r from-blue-700 via-sky-400 to-white text-transparent bg-clip-text">A new era of technology</h1>
                    <p className="mb-5 text-white">Technology is the application of scientific knowledge for practical purposes, enabling humans to innovate, automate, and improve their lives. It encompasses a wide range of tools, systems, and techniques designed to solve problems, enhance efficiency, and expand our understanding of the world.</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;   