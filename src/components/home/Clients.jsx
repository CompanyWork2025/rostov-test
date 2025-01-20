import React from "react";

const Clients = () => {
  const gridItems = [
    { id: 1, image: "https://www.rostgmu.net/images/c1.webp", title: "Course 1" },
    { id: 2, image: "https://www.rostgmu.net/images/c2.webp", title: "Course 2" },
    { id: 3, image: "https://www.rostgmu.net/images/c3.webp", title: "Course 3" },
    { id: 4, image: "https://www.rostgmu.net/images/c4.webp", title: "Course 4" },
    { id: 5, image: "https://www.rostgmu.net/images/c5.webp", title: "Course 5" },
    { id: 6, image: "https://www.rostgmu.net/images/c7.webp", title: "Course 6" },
    { id: 7, image: "https://www.rostgmu.net/images/c8.webp", title: "Course 7" },
    { id: 8, image: "https://www.rostgmu.net/images/c14.webp", title: "Course 8" },
    { id: 9, image: "https://www.admission.bashgmu.ru/theme/the.png", title: "Course 9" },
    { id: 10, image: "https://www.admission.bashgmu.ru/theme/wfme.png", title: "Course 10" },
    { id: 11, image: "https://www.admission.bashgmu.ru/theme/unirank.png", title: "Course 11" },
    { id: 12, image: "https://www.admission.bashgmu.ru/theme/rwou.png", title: "Course 12" },
    { id: 13, image: "https://www.admission.bashgmu.ru/theme/interfax.png", title: "Course 13" },
    { id: 14, image: "https://www.admission.bashgmu.ru/theme/raex.png", title: "Course 14" },
    { id: 15, image: "https://www.rostgmu.net/images/c13.webp", title: "Course 15" },
    { id: 16, image: "https://www.rostgmu.net/images/c15.webp", title: "Course 16" },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[650px] bg-gray-100 p-6 lg:px-20">
      {/* Main Heading */}
      <h1 className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-12 text-center">
        Rostov University is recognized by WHO and is prominently represented in both international and domestic rankings.
      </h1>
      <p></p>


      {/* Grid View */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-8 gap-6">
        {gridItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-36 h-36 object-contain mb-4"
            />
            
          </div>
        ))}
      </div>

      {/* Apply Now Button */}
      <button className="mt-8 px-6 py-2 bg-[#306185] text-white font-semibold rounded-md shadow hover:bg-green-600">
        Apply Now!
      </button>
    </div>
  );
};

export default Clients;
