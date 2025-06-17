import React from 'react';

const MySubmittedAssignmentRow = ({assignment}) => {
    return (
      <tr>
        <th>#</th>
        <td>{assignment?.title}</td>
        <td>{assignment?.status}</td>
        <td>{assignment?.marks}</td>
        <td>{assignment?.obtainedMarks}</td>
        <td>{assignment?.feedback}</td>
      </tr>
    );
};

export default MySubmittedAssignmentRow;