import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./index.css";

function LandingPage() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [subjectName] = useState("Application Development & Emerging Technologies");

  useEffect(() => {
    setPageLoaded(true);
    document.title = "Compilation of Activities";
  }, []);

  return (
    <div className={`landing-wrapper ${pageLoaded ? "show" : ""}`}>
      <header className="hero-section">
        <div className="hero-overlay">
          <h1>Compilation of Activities</h1>
          <p>{subjectName}</p>
        </div>
      </header>

      <div className="info-card">
        <h2>Student Information</h2>
        <p><strong>Name:</strong> Belano, Melben | Cabacang, Mary Faith P. | Coranes, Joven | Hileran Anamie</p>
        <p><strong>Section:</strong> BSIT – 2A</p>
        <p><strong>Course:</strong> {subjectName}</p>
      </div>

      <div className="activities-container">
        <div className="activity-card">
          <h3>Activity 1</h3>
          <p>Simple Landing Page</p>
          <Link to="/activity1" className="open-btn">Open Activity</Link>
        </div>
        <div className="activity-card">
          <h3>Activity 2</h3>
          <p>Password Checker</p>
          <Link to="/activity2" className="open-btn">Open Activity</Link>
        </div>
        <div className="activity-card">
          <h3>Activity 3</h3>
          <p>To-Do-List</p>
          <Link to="/activity3" className="open-btn">Open Activity</Link>
        </div>
        <div className="activity-card">
          <h3>Activity 4</h3>
          <p>Harry Potter API</p>
          <Link to="/activity4" className="open-btn">Open Activity</Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;