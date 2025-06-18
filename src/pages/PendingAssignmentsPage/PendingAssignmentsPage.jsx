import React, { Suspense } from 'react';
import PendingAssignmentTable from '../../components/PendingAssignmentTable/PendingAssignmentTable';
import Loading from '../../components/Loading/Loading';
import usePendingAssignmentApi from '../../components/APIs/usePendingAssignmentApi';

const PendingAssignmentsPage = () => {
    const { pendingData, reFetch, setReFetch, loading } =
      usePendingAssignmentApi("pending");
      console.log(pendingData)

      if(loading) {
        return <Loading />
      }
    return (
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-10">
        <Suspense fallback={<Loading />}>
          <div className="overflow-x-auto">
            <PendingAssignmentTable pendingData={pendingData}  reFetch={reFetch} setReFetch={setReFetch} loading={loading} />
          </div>
        </Suspense>
      </section>
    );
};

export default PendingAssignmentsPage;