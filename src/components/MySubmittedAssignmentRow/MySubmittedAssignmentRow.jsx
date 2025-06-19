import React from 'react';
import { motion } from "motion/react";

const MySubmittedAssignmentRow = ({assignment, index}) => {
    return (
      <motion.tr 
        initial={{opacity:0, x:-100}}
        animate={{opacity:1, x:0}}
        transition={{duration:2 , delay: index<10 ? index : 10}}
      >
        <th>#</th>
        <td>{assignment?.title}</td>
        <td>{assignment?.status}</td>
        <td>{assignment?.marks}</td>
        <td>{assignment?.obtainMarks}</td>
        <td>{assignment?.feedback}</td>
      </motion.tr>
    );
};

export default MySubmittedAssignmentRow;