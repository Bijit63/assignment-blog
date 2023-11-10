import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='bg-gradient-to-r from-[#2d1c5a] to-[#1F1B2A] h-screen'>

      <h1 id='Team' className="text-6xl font-extrabold mb-10 shadow-lg bg-gradient-to-r from-[#281854] to-[#311958] flex justify-center py-6 text-white animate-fadeInUp ">Code Crafters</h1>

      <div className='flex flex-col items-center justify-center mt-24'>
        <div className="text-white text-center max-w-lg animate-fadeInUp mb-10">
          <div className="mb-8 mt-3 space-x-5">
            <Link to="Datamanipulation" className="button dark-blue">Data Manipulation Detector</Link>
            <Link to="Imageforgery" className="button dark-blue mt-4">Digital Forgery Detection</Link>
          </div>
          <p className="text-sm text-gray-300 animate-fadeIn">Join us in crafting the future of coding!</p>
        </div>


        <p className="text-sm text-gray-400 animate-fadeIn">We look forward to delivering innovative solutions and driving success in our projects.</p>
      </div>
      
    </div>
  );
}

export default Home;
