import React, { Suspense } from 'react';
import MySubmittedAssignmentRow from '../../components/MySubmittedAssignmentRow/MySubmittedAssignmentRow';
import MySubmittedAssignmentTable from '../../components/MySubmittedAssignmentTable/MySubmittedAssignmentTable';
import useAuth from '../../Hooks/useAuth';
import mySubmittedAssignmentPromise from '../../components/APIs/mySubmittedAssignmentPromise';
import Loading from '../../components/Loading/Loading';

const MySubittedAssignmentsPage = () => {
    const {user} = useAuth();
    return (
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-10">
        <Suspense fallback={<Loading />}>
          <div className="overflow-x-auto">
            <MySubmittedAssignmentTable
              mySubmittedAssignmentPromise={mySubmittedAssignmentPromise(user.email)}
            />
          </div>
        </Suspense>
      </section>
    );
};

export default MySubittedAssignmentsPage;