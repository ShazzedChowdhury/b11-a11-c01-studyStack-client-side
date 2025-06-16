import React, { use, useState } from 'react';
import { useLoaderData } from 'react-router';
import AssignmentCard from '../../components/AssignmentCard/AssignmentCard';
import { AssignmentContext } from '../../context/AssignmentProvider';
import Loading from '../../components/Loading/Loading';

const AssignmentPage = () => {
    const {allAssignments, loading} = use(AssignmentContext)

    if(loading) {
        return <Loading />
    }

    return (
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {allAssignments.map((assignment) => (
            <AssignmentCard
              key={assignment._id}
              assignment={assignment}
              allAssignments={allAssignments}
            />
          ))}
        </div>
      </section>
    );
};

export default AssignmentPage;