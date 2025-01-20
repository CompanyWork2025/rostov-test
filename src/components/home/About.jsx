import React from "react";
import men from '../../assets/men.png';
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold lg:text-start text-center mb-6">
          Why Rostov Medical State University?
        </h1>

        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
          {/* Left content */}
          <div className="flex-1">
            <p className="text-gray-700 text-lg mb-6 text-center lg:text-left">
              Rostov State Medical University is not just an educational
              institution, it is your chance for a successful future in the world
              of medicine.
            </p>

            <div className="text-gray-700 space-y-4">
              <p className="text-lg">
                RSMU is equipped with modern laboratories, simulation centers,
                and training facilities that allow students to gain practical
                skills and study medicine with the help of advanced technologies.
              </p>
              <p className="text-lg">
                RSMU provides students with the opportunity to participate in
                international exchange programs, to undergo internships in leading
                clinics of Russia and the world. The University supports young
                researchers and provides them with the opportunity to engage in
                scientific activities.
              </p>
              <p className="text-lg">
                Modern infrastructure: comfortable classrooms, laboratories,
                libraries, gyms, dormitories - everything is created for
                comfortable study and life of students.
              </p>
            </div>

            <h2 className="text-xl font-semibold mt-8 text-center lg:text-left">
              The choice of RSMU is a choice of the future, where you can realize
              your potential, get quality education, and become a demanded
              specialist in the field of health care.
            </h2>

            <ul className="mt-6 space-y-2 text-lg">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔️</span> RSMU is amongst
                the top universities of the Russian Federation
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔️</span> Government funded
                university
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔️</span> Accredited by
                Ministry of Healthcare and Ministry of Education and Science of
                the Russian Federation
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔️</span> Recognized by WHO
              </li>
            </ul>
            <button className="w-36 py-2 mt-8 bg-[#306185] hover:bg-red-700 rounded-lg text-white text-lg font-semibold mx-auto lg:mx-0 block">
              <Link to="/contact" className="block text-center w-full h-full">
                Apply Now!
              </Link>
            </button>
          </div>

          {/* Right image */}
          <div className="mt-8 lg:mt-0 lg:flex-shrink-0">
            <img
              src={men}
              alt="Doctor illustration"
              className="w-full lg:w-[300px] lg:h-[500px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;