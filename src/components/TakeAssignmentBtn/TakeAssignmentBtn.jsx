import React, { useState } from 'react';
import { Dialog, DialogPanel } from "@headlessui/react";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import sweetMessage from '../../Utils/sweetMessage';
import useAuth from '../../Hooks/useAuth';


const TakeAssignmentBtn = ({ assignment }) => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const submittedAssignment = Object.fromEntries(formData.entries());
    submittedAssignment.user = user.email;
    submittedAssignment.assignmentId = assignment?._id;


      axios.post(
        `${import.meta.env.VITE_base_api}/assignments-submit`,
        submittedAssignment
      )
      .then((res) => {
        if (res.data.insertedId) {
          sweetMessage("Assignment submit successfully.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="btn btn-primary mt-5">
        Take Assignment
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-2xl w-full shrink-0 space-y-4  bg-white p-12 shadow-md rounded-sm">
            <div className="flex gap-4 justify-end">
              <button onClick={() => setIsOpen(false)}>Cancel</button>
            </div>
            <form onSubmit={handleSubmit}>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                <label className="label">Google docs link</label>
                <input
                  type="text"
                  name="googleDocsLink"
                  className="input"
                  placeholder="Google docs link"
                />

                <label className="label">Note</label>
                <textarea
                  name="noteText"
                  className="textarea"
                  placeholder="Note"
                ></textarea>
              </fieldset>
              <button type="submit" className="btn btn-primary mt-5 w-full">
                Take Assignment
              </button>
            </form>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default TakeAssignmentBtn;