import React, { use } from 'react';
import PendingAssignmentRow from '../PendingAssignmentRow/PendingAssignmentRow';

const PendingAssignmentTable = ({
  pendingData,
  reFetch,
  setReFetch,
  loading,
}) => {
 
  console.log(pendingData);
  return (
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>#</th>
          <th>Assignment</th>
          <th>Examinee</th>
          <th>Assignment Marks</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {pendingData.map((assignment, index) => {
          return <PendingAssignmentRow assignment={assignment} index={index} reFetch={reFetch}
          setReFetch={setReFetch} />;
        })}
      </tbody>
    </table>
  );
};

export default PendingAssignmentTable;