import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/jobs/${id}`)
      .then((response) => setJob(response.data))
      .catch((error) => console.error('Error fetching job:', error));
  }, [id]);

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      {job ? (
        <>
          <h2>{job.title}</h2>
          <p>{job.description}</p>
          <button>Apply Now</button>
        </>
      ) : (
        <p>Loading job details...</p>
      )}
    </div>
  );
}

export default JobDetail;