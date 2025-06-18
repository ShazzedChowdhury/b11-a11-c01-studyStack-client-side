import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const usePendingAssignmentApi = (status) => {
  const [reFetch, setReFetch] = useState(false);
  const [pendingData, setPendingData] = useState([]);
  const [loading, setLoading] = useState(true)
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get(`/pending-assignment?status=${status}`)
      .then((res) => {
        setPendingData(res?.data);
        setLoading(false)
      });
  }, [reFetch]);
  return {
    pendingData,
    reFetch,
    setReFetch,
    loading,
  };
};

export default usePendingAssignmentApi;
