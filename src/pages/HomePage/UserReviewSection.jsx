import React from "react";

const UserReviewSection = () => {
  return (
    <section className="bg-[#f5f7f9]">
      <div className="flex flex-col md:flex-row justify-between w-full items-center gap-5 max-w-7xl mx-auto px-5 md:px-10 py-20">
        <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-5 *:rounded-lg">
          <div className="bg-base-100 shadow-lg md:col-span-2 flex flex-col items-center gap-5 p-5  text-center">
            <div className="w-20 rounded-full flex justify-center items-center overflow-hidden">
              <img
                src="https://themes.stackbros.in/eduport_r/assets/01-7N0KytgQ.jpg"
                className="object-contain h-full"
                alt=""
              />
            </div>
            <p className="text-sm text-gray-500 font-semibold">
              Moonlight newspaper up its enjoyment agreeable depending. Timed
              voice share led him to widen noisy young. At weddings believed
              laughing
            </p>
            <p className="text-sm font-bold">Carolyn Ortiz</p>
          </div>
          <div className="bg-base-100 p-5 shadow-lg">
            <h1 className="text-lg font-bold mb-5">100+ verified users</h1>
            <div className="*:flex *:gap-2 *:mb-5">
              <div className="flex items-center">
                <div className="w-[50px] overflow-hidden rounded-sm">
                  <img
                    src="https://themes.stackbros.in/eduport_r/assets/09-1AM4Ze_z.jpg"
                    className="object-contain h-full"
                    alt=""
                  />
                </div>

                <h3 className="text-lg font-semibold">Lori Stevens</h3>
              </div>
              <div className="flex items-center">
                <div className="w-[50px] overflow-hidden rounded-sm">
                  <img
                    src="https://themes.stackbros.in/eduport_r/assets/09-1AM4Ze_z.jpg"
                    className="object-contain h-full"
                    alt=""
                  />
                </div>

                <h3 className="text-lg font-semibold">Lori Stevens</h3>
              </div>
              <div className="flex items-center">
                <div className="w-[50px] overflow-hidden rounded-sm">
                  <img
                    src="https://themes.stackbros.in/eduport_r/assets/09-1AM4Ze_z.jpg"
                    className="object-contain h-full"
                    alt=""
                  />
                </div>

                <h3 className="text-lg font-semibold">Lori Stevens</h3>
              </div>
            </div>
          </div>
          <div className="col-span-2 hidden md:flex justify-end ">
            <div
              className="bg-primary w-[300px] rounded-lg"
              style={{
                backgroundImage:
                  "url('https://themes.stackbros.in/eduport_r/assets/02-Bu2aqjRO.png')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "150px",
              }}
            ></div>
          </div>
          <div className="bg-base-100 shadow-lg md:row-span-2 flex flex-col items-center justify-center p-5 text-center text-gray-400 text-sm">
            <div className="w-[80px] overflow-hidden rounded-full mb-5">
              <img
                src="https://themes.stackbros.in/eduport_r/assets/03-gME39Lw5.jpg"
                className="object-contain h-full"
                alt=""
              />
            </div>
            <div>
              <p>
                4.5/5.0 Based on 3265 ratings avatar At weddings believed
                laughing although the Moonlight newspaper up its enjoyment
                agreeable depending.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <h2 className="text-4xl font-bold">
            Some valuable feedback from our students
          </h2>
          <p className="text-sm text-gray-500">
            Supposing so be resolving breakfast am or perfectly. It drew a hill
            from me. Valley by oh twenty direct me so. Departure defective
            arranging rapturous did believe him all had supported. Family months
            lasted simple set nature vulgar him. Picture for attempt joy excited
            ten carried manners talking how.
          </p>
          <button className="btn btn-primary">Review More</button>
        </div>
      </div>
    </section>
  );
};

export default UserReviewSection;
