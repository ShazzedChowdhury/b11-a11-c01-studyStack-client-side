import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { FaPlayCircle, FaCode, FaShoppingCart } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loading from "../../components/Loading/Loading";
import PaymentModal from "./PaymentModal";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router";

const CoursesPage = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const navigate = useNavigate();
  //Fetch all courses
  const { data: courses = [], isLoading: courseLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await axiosPublic.get("/courses");
      return res.data;
    },
  });

  //Fetch user's payments
  const { data: payments = [], isLoading: paymentLoading, refetch } = useQuery({
    queryKey: ["payments", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosPublic.get(`/payments?email=${user?.email}`);
      return res.data;
    },
  });

  if (courseLoading || paymentLoading) return <Loading />;

   const purchasedCourseIds = payments.map((p) => p.courseId);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
        <FaCode className="text-blue-600" />
        Paid Web Development Courses
      </h1>

      <div className="space-y-8">
        {courses.map((course, index) => {
            const isPurchase = purchasedCourseIds.includes(course?._id);
            return (
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
                    <h2 className="text-2xl font-semibold mb-3">
                      {course.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <p className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <MdOutlineAttachMoney className="text-green-600 text-2xl" />
                      {course.price}
                    </p>
                  </div>

                  {isPurchase ? (
                    <a
                      href={course.youtubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <FaPlayCircle className="text-lg" />
                      Watch Course
                    </a>
                  ) : (
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        if (!user) {
                          return navigate("/sign-in");
                        }
                        setSelectedCourse(course);
                        setOpenModal(true);
                      }}
                    >
                      <FaShoppingCart className="text-lg" />
                      Purchase Now
                    </button>
                  )}
                </div>
              </div>
            );
        })}
      </div>
      <PaymentModal
        open={openModal}
        refetch={refetch}
        onClose={() => {
          setOpenModal(false);
          setSelectedCourse(null);
        }}
        course={selectedCourse || {}}
      />
    </div>
  );
};

export default CoursesPage;
