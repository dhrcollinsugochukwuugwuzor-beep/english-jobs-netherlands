import React, { useState, useEffect } from 'react';
import axios from 'axios';

function JobListings() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/api/jobs')
      .then((response) => {
        setJobs(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching jobs:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <h2>Job Listings</h2>
      {loading ? (
        <p>Loading jobs...</p>
      ) : jobs.length === 0 ? (
        <p>No jobs available yet.</p>
      ) : (
        <div>
          {jobs.map((job) => (
            <div key={job.id} style={{ border: '1px solid #ddd', padding: '1rem', marginBottom: '1rem', borderRadius: '0.5rem' }}>
              <h3>{job.title}</h3>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default JobListings;