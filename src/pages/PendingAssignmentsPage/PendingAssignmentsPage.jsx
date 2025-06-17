import React, { Suspense } from 'react';
import PendingAssignmentTable from '../../components/PendingAssignmentTable/PendingAssignmentTable';
import PendingAssignmentPromise from '../../components/APIs/PendingAssignmentPromise';
import Loading from '../../components/Loading/Loading';

const PendingAssignmentsPage = () => {
    return (
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-10">
        <Suspense fallback={<Loading />}>
          <div className="overflow-x-auto">
            <PendingAssignmentTable
              PendingAssignmentPromise={PendingAssignmentPromise("pending")}
            />
          </div>
        </Suspense>
      </section>
    );
};

export default PendingAssignmentsPage;