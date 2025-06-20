import React, { useState } from "react";
import {
  Dialog,
  DialogPanel, 
} from "@headlessui/react";
import axios from "axios";
import sweetMessage from "../../Utils/sweetMessage";
import useAuth from "../../Hooks/useAuth";
import {motion} from "motion/react";

const PendingAssignmentRow = ({ assignment, reFetch, setReFetch, index }) => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  
  const handleGivingMarks = (e) => {
    e.preventDefault();
    if (assignment.user === user.email) {
      setIsOpen(false);
      return sweetMessage("You are not able to give marks.", "error");
    }
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    data.status = "completed";

    axios
      .patch(
        `${import.meta.env.VITE_base_api}/pending-assignment/${assignment._id}`,
        data
      )
      .then((res) => {
        if (res.data) {
          setIsOpen(false);
          setReFetch(!reFetch)
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <motion.tr
        initial={{opacity:0, x:-100}}
        animate={{opacity:1, x:0}}
        transition={{duration:2, delay:index<6 ? index : 6}}
      >
        <th>#</th>
        <td>{assignment?.title}</td>
        <td>{assignment?.user}</td>
        <td>{assignment?.marks}</td>
        <td>
          <button onClick={() => setIsOpen(true)} className="btn btn-xs">
            Give marks
          </button>
        </td>
      </motion.tr>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4  bg-base-100 p-12 shadow-xl rounded-md">
            <div className="flex gap-4 justify-end">
              <button onClick={() => setIsOpen(false)}>Cancel</button>
            </div>
            <div>
              <p>
                Google Docs Link: <br />{" "}
                <a href="">{assignment?.googleDocsLink}</a>
              </p>
              <p>
                Note Text: <br /> {assignment?.noteText}
              </p>
            </div>
            <form className="space-y-3" onSubmit={handleGivingMarks}>
              <input
                type="text"
                className="input"
                name="obtainMarks"
                placeholder="Marks"
                required
              />
              <textarea
                className="textarea h-24"
                placeholder="Feedback"
                name="feedback"
                required
              ></textarea>
              <button type="submit" className="btn btn-primary w-full">
                Submit
              </button>
            </form>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default PendingAssignmentRow;
