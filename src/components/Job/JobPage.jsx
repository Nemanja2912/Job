import React, { useEffect, useState } from "react";
import JobHeader from "./JobHeader";
import Job from "./Job";
import JobInfo from "./JobInfo";

const jobPage = {
  display: "grid",
  marginLeft: 125,
  gridTemplateColumns: "1fr max-content",
  gridColumnGap: 35,
};

const JobPage = () => {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://jobs.github.com/positions.json";
    fetch(proxyurl + url)
      .then((response) => response.json())
      .then((contents) => setJobList(contents))
      .catch(() =>
        console.log("Can’t access " + url + " response. Blocked by browser?")
      );
  }, []);

  return (
    <div>
      <div style={jobPage}>
        <div>
          <JobHeader />

          {jobList.map((job) => (
            <>
              <Job
                jobId={job.id}
                logo={job.company_logo}
                company={job.company}
                location={job.location}
                jobName={job.title}
                date={job.created_at}
              />
            </>
          ))}
        </div>
        {/* <JobInfo /> */}
      </div>
    </div>
  );
};

export default JobPage;
