import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../main";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // Added search query state
  const { isAuthorized } = useContext(Context);
  const navigateTo = useNavigate();

  useEffect(() => {
    try {
      axios
        .get("http://localhost:8080/api/v1/job/getall", {
          withCredentials: true,
        })
        .then((res) => {
          setJobs(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (!isAuthorized) {
    navigateTo("/login");
  }


 // Function to filter jobs based on the search query
  // const filteredJobs = jobs.jobs?.filter((job) => {
  //   return (
  //     job.title.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
  //     job.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     job.country.toLowerCase().startsWith(searchQuery.toLowerCase())
  //   );
  // });
  const filteredJobs = jobs.jobs?.filter((job) => {
  //   const jobTitleLower = job.title.toLowerCase();
  // const searchQueryLower = searchQuery.toLowerCase();
 
  // // If search is a single character match first word of the job title
  // if (searchQueryLower.length === 1) {
  //   return jobTitleLower.startsWith(searchQueryLower);
  // }

  // //search for the substring anywhere in the job title
  // return jobTitleLower.includes(searchQueryLower);
    const searchQueryLowercase = searchQuery.toLowerCase();
    return job.title.toLowerCase().split(" ").some((word)=>word.startsWith( searchQueryLowercase)); 
  });

  const pageStyle = {
    backgroundColor: "#f4f7f9",
    padding: "40px 0",
    fontFamily: "'Arial', sans-serif",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  };

  const titleStyle = {
    textAlign: "center",
    color: "#333",
    fontSize: "36px",
    marginBottom: "20px",
  };

  const searchContainerStyle = {
    textAlign: "center",
    marginBottom: "30px",
    // marginTop:"1"
  };

  const searchBarStyle = {
    width: "50%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    outline: "none",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "border-color 0.3s ease",
  };

  const searchBarFocusStyle = {
    borderColor: "#ff6f61",
  };

  const placeholderStyle = {
    color: "#aaa",
  };

  const jobsListStyle = {

    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px",
    padding: "10px 10px",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const cardHoverStyle = {
    transform: "translateY(-10px)",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
  };

  const cardTitleStyle = {
    fontSize: "24px",
    color: "#333",
    marginBottom: "10px",
  };

  const categoryStyle = {
    fontSize: "16px",
    color: "#777",
    marginBottom: "10px",
  };

  const countryStyle = {
    fontSize: "16px",
    color: "#777",
    marginBottom: "10px",
  };

  const jobDetailsLinkStyle = {
    color: "#ff6f61",
    fontWeight: "bold",
    textDecoration: "none",
    transition: "color 0.3s ease",
  };

  const jobDetailsLinkHoverStyle = {
    color: "#ff3d2e",
  };

  return (
    <section style={pageStyle}>
      <div style={containerStyle}>
        <h1 style={titleStyle}>All Available Jobs</h1>

        {/* Search bar */}
        <div style={searchContainerStyle}>
          <input
            type="text"
            placeholder="Search Jobs"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={searchBarStyle}
            onFocus={(e) => (e.target.style.borderColor = "#ff6f61")}
            onBlur={(e) => (e.target.style.borderColor = "#ddd")}
          />
        </div>

        <div style={jobsListStyle}>
          {filteredJobs?.map((element) => {
            return (
              <div
                style={cardStyle}
                key={element._id}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-10px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <h2 style={cardTitleStyle}>{element.title}</h2>
                <p style={categoryStyle}>{element.category}</p>
                <p style={countryStyle}>{element.country}</p>
                <Link
                  to={`/job/${element._id}`}
                  style={jobDetailsLinkStyle}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#ff3d2e")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#ff6f61")
                  }
                >
                  Job Details
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
