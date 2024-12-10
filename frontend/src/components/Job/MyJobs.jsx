// Import necessary modules
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Context } from "../../main";
import { useNavigate } from "react-router-dom";
import "./MyJobs.css";

const MyJobs = () => {
  const [myJobs, setMyJobs] = useState([]);
  const [editingMode, setEditingMode] = useState(null);
  const { isAuthorized, user } = useContext(Context);
  const navigateTo = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8080/api/v1/job/getmyjobs",
          { withCredentials: true }
        );
        setMyJobs(data.myJobs.reverse());
      } catch (error) {
        toast.error(error.response.data.message);
        setMyJobs([]);
      }
    };
    fetchJobs();
  }, []);

  if (!isAuthorized || (user && user.role !== "Employer")) {
    navigateTo("/");
  }

  const handleEnableEdit = (jobId) => {
    setEditingMode(jobId);
  };

  const handleDisableEdit = () => {
    setEditingMode(null);
  };

  const handleUpdateJob = async (jobId) => {
    const updatedJob = myJobs.find((job) => job._id === jobId);
    try {
      const { data } = await axios.put(
        `http://localhost:8080/api/v1/job/update/${jobId}`,
        updatedJob,
        { withCredentials: true }
      );
      toast.success(data.message);
      setEditingMode(null);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleDeleteJob = async (jobId) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:8080/api/v1/job/delete/${jobId}`,
        { withCredentials: true }
      );
      toast.success(data.message);
      setMyJobs((prevJobs) => prevJobs.filter((job) => job._id !== jobId));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleInputChange = (jobId, field, value) => {
    setMyJobs((prevJobs) =>
      prevJobs.map((job) =>
        job._id === jobId ? { ...job, [field]: value } : job
      )
    );
  };

  return (
    <div className="jobs-page">
      <div className="jobs-container">
        <h1 className="jobs-title">Your Posted Jobs</h1>
        {myJobs.length > 0 ? (
          <div className="jobs-list">
            {myJobs.map((job) => (
              <div className="job-card" key={job._id}>
                <div className="job-details">
                  <div className="job-field">
                    <label>Title:</label>
                    <input
                      type="text"
                      value={job.title}
                      disabled={editingMode !== job._id}
                      onChange={(e) =>
                        handleInputChange(job._id, "title", e.target.value)
                      }
                    />
                  </div>
                  <div className="job-field">
                    <label>Country:</label>
                    <input
                      type="text"
                      value={job.country}
                      disabled={editingMode !== job._id}
                      onChange={(e) =>
                        handleInputChange(job._id, "country", e.target.value)
                      }
                    />
                  </div>
                  <div className="job-field">
                    <label>City:</label>
                    <input
                      type="text"
                      value={job.city}
                      disabled={editingMode !== job._id}
                      onChange={(e) =>
                        handleInputChange(job._id, "city", e.target.value)
                      }
                    />
                  </div>
                  <div className="job-field">
                    <label>Description:</label>
                    <textarea
                      value={job.description}
                      disabled={editingMode !== job._id}
                      onChange={(e) =>
                        handleInputChange(job._id, "description", e.target.value)
                      }
                    ></textarea>
                  </div>
                  <div className="job-actions">
                    {editingMode === job._id ? (
                      <>
                        <button
                          className="update-button"
                          onClick={() => handleUpdateJob(job._id)}
                        >
                          <FaCheck />
                        </button>
                        <button
                          className="cancel-button"
                          onClick={handleDisableEdit}
                        >
                          <RxCross2 />
                        </button>
                      </>
                    ) : (
                      <button
                        className="edit-button"
                        onClick={() => handleEnableEdit(job._id)}
                      >
                        Edit
                      </button>
                    )}
                    <button
                      className="delete-button"
                      onClick={() => handleDeleteJob(job._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-jobs-message">
            You haven't posted any jobs yet!
          </p>
        )}
      </div>
    </div>
  );
};

export default MyJobs;
