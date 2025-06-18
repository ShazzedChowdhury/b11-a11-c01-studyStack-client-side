import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import "react-datepicker/dist/react-datepicker.css";
import TakeAssignmentBtn from '../../components/TakeAssignmentBtn/TakeAssignmentBtn';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const DetailsPage = () => {
    const [assignment, setAssignment] = useState([]);
    const {id} = useParams();
    const axiosSecure = useAxiosSecure()

    useEffect(() => {
      axiosSecure(`/assignment/${id}`).then((res) =>
        setAssignment(res.data)
      )
    }, [axiosSecure])
    return (
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-10">
        <div className="hero bg-base-200 rounded-lg">
          <div className="hero-content flex-col lg:flex-row">
            <img src={assignment?.thumbnail} className="max-w-sm rounded-lg" />
            <div>
              <h1 className="text-3xl font-bold">{assignment?.title}</h1>
              <p className="pt-6">
                <span className="font-semibold">Marks:</span>{" "}
                {assignment?.marks}
              </p>
              <p>
                <span className="font-semibold">Level:</span>{" "}
                {assignment?.level}
              </p>
              <p>
                <span className="font-semibold">description:</span>{" "}
                {assignment?.description}
              </p>
              <TakeAssignmentBtn assignment={assignment} />
            </div>
          </div>
        </div>
      </section>
    );

};

export default DetailsPage;