import React, { use } from 'react';
import MySubmittedAssignmentRow from '../MySubmittedAssignmentRow/MySubmittedAssignmentRow';
import NoContentSection from '../NoContentSection';

const MySubmittedAssignmentTable = ({ mySubmittedAssignmentPromise }) => {
    const myAssignments = use(mySubmittedAssignmentPromise);
    
    if(myAssignments.length === 0){
      return <NoContentSection content={"You not added any assignment yet."} btnContent={"Create Assignment"} path={'/create-assignment'} />
    }
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