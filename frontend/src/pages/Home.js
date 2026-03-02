import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <section style={{ padding: '3rem 0', textAlign: 'center' }}>
        <h2>Welcome to English Jobs Netherlands</h2>
        <p>Find your next opportunity or hire talented English speakers</p>
        <Link to="/jobs">
          <button style={{ marginTop: '1rem', padding: '0.75rem 2rem', fontSize: '1rem' }}>
            Browse Jobs
          </button>
        </Link>
      </section>
    </div>
  );
}

export default Home;