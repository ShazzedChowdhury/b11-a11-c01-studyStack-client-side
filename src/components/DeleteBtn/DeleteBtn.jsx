import React, { use } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import sweetMessage from '../../Utils/sweetMessage';
import axios from 'axios';
import { AssignmentContext } from '../../context/AssignmentProvider';

const DeleteBtn = ({ assignment }) => {
    const { user } = useAuth();
    const { setStatus } = use(AssignmentContext)
    const handleDelete = () => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            if (assignment?.creator !== user.email) {
              return sweetMessage("You are not able to delete.", "error");
            }

            //delete the assignment from database
            axios.delete(`${import.meta.env.VITE_base_api}/assignment/${assignment._id}`)
            .then(res => {
               if (res.data?.deletedCount) {
                setStatus(true)
                Swal.fire({
                  title: "Deleted!",
                  text: "Your assignment has been deleted.",
                  icon: "success",
                });
               }
            }).catch(error => {
                console.log(error)
            })
          }
        });
    }
    return (
        <button onClick={handleDelete} className="btn btn-xs">Delete</button>
    );
};

export default DeleteBtn;