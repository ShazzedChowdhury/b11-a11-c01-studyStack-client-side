import React from 'react';
import DeleteBtn from '../DeleteBtn/DeleteBtn';

const AssignmentCard = ({ assignment, setAssignments, allAssignments }) => {
  return (
    <div className="card bg-base-100 shadow-sm">
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
          <button className="btn btn-xs">Update</button>
          <button className="btn btn-xs">View</button>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;