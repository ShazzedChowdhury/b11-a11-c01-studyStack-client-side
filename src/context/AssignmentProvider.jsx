import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const AssignmentContext = createContext();

const AssignmentProvider = ({ children }) => {
  const [allAssignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    axios(`${import.meta.env.VITE_base_api}/assignments`)
      .then((res) => {
        setAssignments(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });    
  }, [status]);
  return (
    <AssignmentContext value={{ allAssignments, loading, setStatus }}>
      {children}
    </AssignmentContext>
  );
};

export default AssignmentProvider;
