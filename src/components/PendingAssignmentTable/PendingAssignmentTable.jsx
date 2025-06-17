import React, { use } from 'react';
import PendingAssignmentRow from '../PendingAssignmentRow/PendingAssignmentRow';

const PendingAssignmentTable = ({PendingAssignmentPromise}) => {
    const pendingAssignment = use(PendingAssignmentPromise);
    console.log(pendingAssignment)
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
            {
                pendingAssignment.map(assignment => {
                  return  <PendingAssignmentRow assignment={assignment} />
                })
            }
        </tbody>
      </table>
    );
};

export default PendingAssignmentTable;