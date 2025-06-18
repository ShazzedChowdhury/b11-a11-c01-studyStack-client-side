import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import DatePicker from 'react-datepicker';
import {
  Dialog,
  DialogPanel,
} from "@headlessui/react";
import "react-datepicker/dist/react-datepicker.css";
import sweetMessage from '../../Utils/sweetMessage';

const UpdateBtn = ({assignment}) => {
     const [selectedDate, setSelectedDate] = useState(assignment?.dueDate);
     const parseDate = (dateStr) => {
       const [day, month, year] = dateStr.split("-");
       return new Date(`${year}-${month}-${day}`); // "2000-05-05"
     };
     const [isOpen, setIsOpen] = useState(false);
    console.log(selectedDate)

    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const updatedData = Object.fromEntries(formData.entries());
        
        axios.put(`${import.meta.env.VITE_base_api}/assignment-update/${assignment._id}`, updatedData)
        .then(res => {
          if(res.data.modifiedCount) {
            sweetMessage("Updated successfully.");
          }
        })
        .catch(error => console.log(error))
    }
    return (
      <>
        <button className="btn btn-xs" onClick={() => setIsOpen(true)}>
          Update
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
              <form onSubmit={handleUpdate} className="flex flex-col gap-2">
                <div>
                  <label className="label">Title</label>
                  <input
                    type="text"
                    name="title"
                    defaultValue={assignment?.title}
                    className="input"
                    placeholder="Title"
                  />
                </div>
                <div>
                  <label className="label">Marks</label>
                  <input
                    type="text"
                    name="marks"
                    defaultValue={assignment?.marks}
                    className="input"
                    placeholder="Marks"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="label">Difficulty Level</label>
                  <select name="level" className="select">
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="label">Date</label>
                  <DatePicker
                    className="input"
                    name="dueDate"
                    selected={parseDate(selectedDate)}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat={"dd-MM-yyyy"}
                  />
                </div>
                <div>
                  <label className="label">Photo URL</label>
                  <input
                    type="url"
                    name="photoUrl"
                    className="input"
                    defaultValue={assignment?.thumbnail}
                    placeholder="Photo URL"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="label">Description</label>
                  <textarea
                    name="description"
                    className="textarea"
                    defaultValue={assignment?.description}
                    placeholder="Bio"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Update Assignment
                </button>
              </form>
            </DialogPanel>
          </div>
        </Dialog>
      </>
    );
};

export default UpdateBtn;