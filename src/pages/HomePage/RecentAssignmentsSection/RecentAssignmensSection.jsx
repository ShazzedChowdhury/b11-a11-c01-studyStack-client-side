import React from 'react';
import {motion} from "framer-motion"
import { Link } from 'react-router';
import AssignmentCard from '../../../components/AssignmentCard/AssignmentCard';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import Loading from '../../../components/Loading/Loading';


const RecentAssignmensSection = () => {
    const axiosPublic = useAxiosPublic();
    const {data: recentAssignments = [], isLoading} = useQuery({
        queryKey: ["recent-assignments"],
        queryFn: async() => {
            const res = await axiosPublic.get("/assignments?limit=4");
            return res.data
        }
    })

    if(isLoading) return <Loading />
    console.log(recentAssignments)
    return (
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{once: true}}
        transition={{ duration: 1, delay: 0.5 }}
        className="max-w-7xl mx-auto px-5 md:px-10 py-10"
      >
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold text-left pb-10 capitalize">
            Recent assignments
          </h1>
          <Link to="/assignments" className="btn btn-primary hidden md:flex">
            All assignments
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {recentAssignments?.map((assignment, idx) => {
            return (
              <AssignmentCard
                key={assignment?._id}
                assignment={assignment}
                action={false}
                index={idx}
              />
            );
          })}
        </div>
        <div className='flex md:hidden py-5 justify-center'>
          <Link to="/assignments" className="btn btn-primary">
            All assignments
          </Link>
        </div>
      </motion.section>
    );
};

export default RecentAssignmensSection;