import React from "react";

const page = () => {
  return (
    <div className="w-[100vw]">

      {/* TOP PART */}
      <div
        className="third w-full   flex items-center text-center bg-center bg-cover bg-no-repeat justify-center md:h-[80vh] h-[10rem] bg-[#000000c0]"
        style={{
          backgroundImage: `url(${"/about.jpg"}) `,
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="text-xl lg:text-4xl font-bold text-white absolute opacity-100 lg:w-[60%] w-[90%]">
          “Being human in the digital world is about building a digital world
          for humans”
        </div>
      </div>
    
    </div>
  );
};

export default page;
