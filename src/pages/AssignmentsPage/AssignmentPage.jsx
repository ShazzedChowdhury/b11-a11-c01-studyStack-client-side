import React, { use, useState } from 'react';
import { useLoaderData } from 'react-router';
import AssignmentCard from '../../components/AssignmentCard/AssignmentCard';
import { AssignmentContext } from '../../context/AssignmentProvider';
import Loading from '../../components/Loading/Loading';

const AssignmentPage = () => {
    const { allAssignments, loading,level, setLevel, setSearch, search } =
      use(AssignmentContext);

    if(loading) {
        return <Loading />
    }

    return (
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-10">
        <div className="grid grid-cols-4 gap-2 mb-5">
          <div className='col-span-3'>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search here" className="input" />
          </div>
          <div className='col-span-1'>
            <select defaultValue="Pick a level" value={level} onChange={e => setLevel(e.target.value)} className="select">
              <option value="">All</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
        </div>
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