import React from 'react';
import DeleteBtn from '../DeleteBtn/DeleteBtn';
import UpdateBtn from '../UpdateBtn/UpdateBtn';
import { useNavigate } from 'react-router';
import {motion} from "motion/react";

const AssignmentCard = ({ assignment, index }) => {
    const navigate = useNavigate()
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className="card bg-base-100 shadow-sm"
    >
      <figure className="w-full h-48">
        <img
          className="w-full h-full object-cover"
          alt={assignment?.title}
          src={assignment?.thumbnail}
        />
      </figure>
      <div className="card-body justify-between md:px-[1rem] gap-0.5">
        <div>
          <h2 className="card-title text-sm capitalize">{assignment?.title}</h2>
          <p>
            <span className="font-semibold">Marks:</span> {assignment?.marks}
          </p>
          <p>
            <span className="font-semibold">Level:</span>{" "}
            {assignment?.difficulty}
          </p>
        </div>
        <div className="card-actions justify-center mt-5">
          <DeleteBtn assignment={assignment} />
          <UpdateBtn assignment={assignment} />
          <button
            onClick={() => navigate(`/assignment/${assignment?._id}`)}
            className="btn btn-xs"
          >
            View
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default AssignmentCard;