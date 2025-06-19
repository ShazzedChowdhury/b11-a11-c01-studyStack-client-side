import React, { use, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './CreateAssignmentPage.css'
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
import sweetMessage from '../../Utils/sweetMessage';
import { AssignmentContext } from '../../context/AssignmentProvider';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
const CreateAssignmentPage = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()
    const { setStatus } = use(AssignmentContext)

    const handleCreateAssignment = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const assignmentData = Object.fromEntries(formData.entries())
        assignmentData.creator = user.email;
        console.log(assignmentData);

        axiosSecure.post(`/create-assignment`, {
            ...assignmentData
          })
          .then((res) => {
            if(res.data.insertedId) {
                sweetMessage("Assignment created successfully.");
                setStatus(true)
            }
          })
          .catch((error) => {
            console.log(error);
          });
        
    }
    return (
      <section className="max-w-7xl mx-auto px-5 md:px-30 py-10">
        <h1 className="text-2xl sm:text-4xl font-bold py-10 bg-primary text-base-100 text-center rounded-sm">
          Create Assignments
        </h1>
        <form onSubmit={handleCreateAssignment}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 w-full">
            <legend className="fieldset-legend">Page details</legend>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="label">Title</label>
                <input
                  type="text"
                  name="title"
                  className="input"
                  placeholder="Title"
                />
              </div>

              <div>
                <label className="label">Marks</label>
                <input
                  type="text"
                  name="marks"
                  className="input"
                  placeholder="Marks"
                />
              </div>

              <div className="flex flex-col">
                <label className="label">Difficulty Level</label>
                <select
                  name="level"
                  defaultValue="Pick a color"
                  className="select"
                >
                  <option disabled={true}>Pick a level</option>
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
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat={"dd-MM-yyyy"}
                />
              </div>
            </div>
            <div>
              <label className="label">Thumbnail</label>
              <input
                type="url"
                name="thumbnail"
                className="input"
                placeholder="Thumbnail"
              />
            </div>
            <div className="flex flex-col">
              <label className="label">Description</label>
              <textarea
                name="description"
                className="textarea"
                placeholder="Bio"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full mt-5">
              Create Assignment
            </button>
          </fieldset>
        </form>
      </section>
    );
};

export default CreateAssignmentPage;