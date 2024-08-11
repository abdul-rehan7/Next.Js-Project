import React from "react";

const page = () => {
  return (
    <div className="w-[100vw]">
      <section
        style={{ backgroundImage: `url(${"/texture.jpg"})` }}
        className={`flex bg-center bg-cover bg-no-repeat flex-col lg:flex-row justify-center bg-green-500 items-center pt-24 p-10  lg:h-[50vh] h-auto w-screen`}
      >
        <div className="first h-full flex flex-col text-center justify-center py-16    space-y-5 lg:w-[90vw]  w-[95vw]  lg:p-14 p-7">
          <h1 className="text-5xl font-bold">
            Tell us What&apos;s on
            <span className="text-blue-500"> your Mind</span>
          </h1>
          <p className="text-lg">
            Give us a few minutes, and we&apos;ll give you clarity and direction
            about your tech needs.
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
