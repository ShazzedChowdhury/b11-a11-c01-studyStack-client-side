import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaPlayCircle, FaCode, FaShoppingCart } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loading from "../../components/Loading/Loading";

const CoursesPage = () => {
  const axiosPublic = useAxiosPublic();
  const { data: courses = [], isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await axiosPublic.get("/courses");
      return res.data;
    },
  });

  if (isLoading) return <Loading />;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
        <FaCode className="text-blue-600" />
        Paid Web Development Courses
      </h1>

      <div className="space-y-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start bg-base-200 shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 p-5"
          >
            {/* Left: Image */}
            <div className="md:w-1/2 w-full h-64">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Content */}
            <div className="p-6 md:pt-0 md:w-1/2 w-full flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold mb-3">{course.title}</h2>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <p className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <MdOutlineAttachMoney className="text-green-600 text-2xl" />
                  {course.price}
                </p>
              </div>

              {course.isPurchase ? (
                <a
                  href={course.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg transition-all duration-200"
                >
                  <FaPlayCircle className="text-lg" />
                  Watch Course
                </a>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    console.log(`Purchase ${course.title} clicked`)
                  }
                >
                  <FaShoppingCart className="text-lg" />
                  Purchase Now
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
