import React, { use } from 'react';
import MySubmittedAssignmentRow from '../MySubmittedAssignmentRow/MySubmittedAssignmentRow';

const MySubmittedAssignmentTable = ({ mySubmittedAssignmentPromise }) => {
    const myAssignments = use(mySubmittedAssignmentPromise);
    console.log(myAssignments)
  return (
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>#</th>
          <th>Assignment</th>
          <th>Status</th>
          <th>Assignment Marks</th>
          <th>Obtained Marks</th>
          <th>Feedback</th>
        </tr>
      </thead>
      <tbody>
        {myAssignments.map((assignment) => (
          <MySubmittedAssignmentRow key={assignment?._id} assignment={assignment} />
        ))}
      </tbody>
    </table>
  );
};

export default MySubmittedAssignmentTable;