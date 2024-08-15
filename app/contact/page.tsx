import React from "react";

const page = () => {
  return (
    <div className="w-[100vw]">
      <section
        style={{ backgroundImage: `url(${"/contact.jpg"})`, backgroundBlendMode:"overlay" }}
        className={`flex bg-center bg-cover bg-no-repeat flex-col lg:flex-row justify-center bg-[#00000081] items-center pt-24 p-10  lg:h-[70vh] h-[50vh] w-screen`}
      >
        <div className="first text-white h-full flex flex-col text-center justify-center py-16    space-y-5 lg:w-[90vw]  w-[95vw]  lg:p-14 p-7">
          <h1 className="lg:text-5xl text-3xl font-bold">
            Tell us What&apos;s on
            <span className="text-blue-500"> your Mind</span>
          </h1>
          <p className="lg:text-lg text-base">
            Give us a few minutes, and we&apos;ll give you clarity and direction
            about your tech needs.
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
