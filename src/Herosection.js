import React from 'react';
import Shap1 from './img/Shape (1).svg';
import Shap from './img/Shape.svg';
import pic from './img/Pic1.png';
import pic2 from './img/pic2.png';
import pic3 from './img/pic3.png';
import pic4 from './img/Vector.svg';
import Navbar from './Navbar';

const Herosection = () => {
  return (
    <section className="flex flex-wrap w-full min-h-screen relative">
      <div className="absolute w-full z-20">
        <Navbar />
      </div>
    
      <div className="flex-1 bg-white flex flex-col sm:flex-row py-16 sm:py-24 px-4">
        <div className="space-y-4 mx-4">
          <h1 className="text-4xl sm:text-5xl font-bold my-6">
            Discover New <br /> Collection <span className="text-yellow-500">🌞</span>
          </h1>
          <div className="flex space-x-0 sm:space-x-12 mt-16 flex-col sm:flex-row">
            <div className="w-32 h-[2px] bg-black mt-2"></div>
            <p className="text-center sm:text-left">
              Fashion is part of the daily air <br /> and it changes all the time, <br /> with all the events.
            </p>
          </div>

          <div className="flex items-center space-x-4 sm:space-x-12 mt-8 justify-between flex-col sm:flex-row">
            <div className="font-bold text-2xl w-16 sm:w-20 text-center sm:text-left">#01</div>
            <button className="px-6 py-3 bg-yellow-500 text-white rounded-lg shadow-lg w-full sm:w-auto mt-4 sm:mt-0">
              Start Shopping →
            </button>
            <div className="ml-8 hidden sm:block">
              <img src={pic4} className="w-12 h-12" />
            </div>
          </div>

          <div className="flex justify-between space-x-8 sm:space-x-16 items-center mt-8 flex-col sm:flex-row">
            <div className="relative flex space-x-[-20px] justify-center sm:justify-start">
              <img src={pic} alt="pic" className="w-12 h-12" />
              <img src={pic2} alt="pic2" className="w-12 h-12" />
              <img src={pic3} alt="pic3" className="w-12 h-12" />
            </div>
            <div className="text-center sm:text-left">15K Well Reviews</div>
            <div className="flex flex-col mt-4 sm:mt-0 text-center sm:text-left">
              <div className="ml-8 font-bold text-5xl">25%</div>
              <div className="ml-8">New Arrivals</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex-col bg-gray-100 flex items-center justify-center relative">
        <div className="absolute top-1/4 right-1/4 flex items-center space-x-2 text-6xl font-bold">
          <img src={Shap} />
          <img src={Shap1} />
        </div>
        
        <div className="flex items-center mt-32 ml-auto">  
          <div className="flex items-center text-[#FCBD01] mr-2 text-xl">
            01
          </div>
          <div className="flex flex-col mt-20">
            <div className="w-[2px] h-12 bg-[#FCBD01] mr-32 mt-16"></div>
            <div className="w-[2px] h-28 bg-[#FCBD0133]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
