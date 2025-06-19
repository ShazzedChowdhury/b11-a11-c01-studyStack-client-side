import React from 'react';
import DeleteBtn from '../DeleteBtn/DeleteBtn';
import UpdateBtn from '../UpdateBtn/UpdateBtn';
import { useNavigate } from 'react-router';
import {motion} from "motion/react";

const AssignmentCard = ({ assignment, index }) => {
    const navigate = useNavigate()
  return (
    <motion.div
     initial={{opacity: 0, y:10}}
     animate={{opacity: 1, y:0}}
     transition={{duration: 2, delay: index}}
     className="card bg-base-100 shadow-sm">
      <figure>
        <img src={assignment?.thumbnail} />
      </figure>
      <div className="card-body gap-0.5">
        <h2 className="card-title text-sm">{assignment?.title}</h2>
        <p>
          <span className="font-semibold">Marks:</span> {assignment?.marks}
        </p>
        <p>
          <span className="font-semibold">Level:</span> {assignment?.difficulty}
        </p>
        <div className="card-actions justify-center mt-5">
          <DeleteBtn assignment={assignment} />
          <UpdateBtn assignment={assignment}/>
          <button onClick={() => navigate(`/assignment/${assignment?._id}`)} className="btn btn-xs">View</button>
        </div>
      </div>
    </motion.div>
  );
};

export default AssignmentCard;