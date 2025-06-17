import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const AssignmentContext = createContext();

const AssignmentProvider = ({ children }) => {
  const [allAssignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(false);
  const [ search, setSearch ] = useState("");
  const [ level, setLevel ] = useState("")

  useEffect(() => {
    axios(`${import.meta.env.VITE_base_api}/assignments?search=${search}&level=${level}`)
      .then((res) => {
        setAssignments(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });    
  }, [status, search, level]);
  return (
    <AssignmentContext
      value={{
        allAssignments,
        loading,
        setStatus,
        setLevel,
        setSearch,
        search,
        level,
      }}
    >
      {children}
    </AssignmentContext>
  );
};

export default AssignmentProvider;
