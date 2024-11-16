import React from "react";
import Cap from "../img/Cap.jpeg";
import Perfume from "../img/Perfum.jpeg";
import Shoes from "../img/Shoes.png";

const Feature = () => {
  return (
    <section className="bg-[#796EFF] py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 w-full h-64 transform transition-transform duration-300 hover:-translate-y-4">
              <img
                src={Cap}
                alt="Cap"
                className="lg:w-full lg:h-full w-40 h-40 object-cover mb-4"
              />
              <div className="flex justify-center align-middle">
                <h3 className="text-xl font-semibold text-gray-800">Cap</h3>
              </div>
            </div>

            <div className="flex flex-col items-center bg-orange-100 rounded-lg shadow-lg p-6 w-full h-64 transform transition-transform duration-300 hover:-translate-y-4">
              <img
                src={Perfume}
                alt="Perfumes"
                className="lg:w-full lg:h-full w-40 h-40 object-cover mb-4"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Perfumes
                </h3>
                <button className="mt-1 px-4 py-2 bg-yellow-500 text-white rounded-lg">
                  See All →
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 w-full h-64  transform transition-transform duration-300 hover:-translate-y-4">
              <img
                src={Shoes}
                alt="Shoes"
                className="lg:w-full lg:h-full w-40 h-40 object-cover mb-4"
              />
              <div className="flex justify-center align-middle">
                <h3 className="text-xl  font-semibold text-gray-800">
                  Sneakers
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 md:pl-12 text-center md:text-left">
          <h2 className="text-3xl font-bold text-white mt-8 mb-4">
            Our Feature Products
          </h2>
          <p className="text-white mb-10 max-w-xl">
            If we define Buzz buy in three words,
            <br /> it will be elegant, classic, and high-quality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Feature;
