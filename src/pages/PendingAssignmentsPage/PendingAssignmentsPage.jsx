import React, { Suspense } from 'react';
import PendingAssignmentTable from '../../components/PendingAssignmentTable/PendingAssignmentTable';
import Loading from '../../components/Loading/Loading';
import usePendingAssignmentApi from '../../components/APIs/usePendingAssignmentApi';
import NoContentSection from '../../components/NoContentSection';

const PendingAssignmentsPage = () => {
    const { pendingData, reFetch, setReFetch, loading } =
      usePendingAssignmentApi("pending");
      

      if(loading) {
        return <Loading />
      }

      if(pendingData.length === 0){
        return <NoContentSection content={"No pending assignment remained."} btnContent={"Go to Homepage"} path={'/'} />
      }
    return (
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-10 min-h-[calc(100vh-413px)]">
        <Suspense fallback={<Loading />}>
          <div className="overflow-x-auto">
            <PendingAssignmentTable pendingData={pendingData}  reFetch={reFetch} setReFetch={setReFetch} loading={loading} />
          </div>
        </Suspense>
      </section>
    );
};

export default PendingAssignmentsPage;