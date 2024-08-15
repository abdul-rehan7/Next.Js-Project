import React from "react";

const page = () => {
  return (
    <div className="w-[100vw]">
      <section
        style={{ backgroundImage: `url(${"/about.jpg"})`,backgroundBlendMode:"overlay"  }}
        className={`flex bg-center bg-cover bg-no-repeat bg-[#000000ae] flex-col lg:flex-row justify-center items-center pt-24 p-10  lg:h-[70vh] h-auto w-screen`}
      >
        <div className="first text-white h-full flex flex-col justify-center py-16    space-y-5 lg:w-[70vw]  w-[96vw]  lg:p-14 p-4">
          <h1 className="lg:text-4xl text-2xl text-center  font-semibold">
            Advanced IT Solutions:
            <span className="text-blue-500"> Empowering Businesses</span> With
            Transforming Tech.
          </h1>
        </div>
      </section>
    </div>
  );
};

export default page;
