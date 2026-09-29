import { Link } from "react-router-dom";
import "./Activity1.css";

function Activity1() {
  return (
    <div className="activity1-container">
      <div className="page">
        <div className="sidebar">
          <div className="sidebar-content">
            <h1>ITE6 - 2A</h1>
            <h2>GROUP 11</h2>
            <p>Activity 1 Landing Page</p>
          </div>
        </div>

        <div className="content">
          <Link to="/" className="back-btn">← Back to Home</Link>

          <div className="scrollable-content">
            <div className="section">
              <h3>About Us</h3>
              <div className="about-text">
                <p>
                  We are Group 11 students from ITE6-2A. This landing page is created as part of our Activity 1 project. We are currently learning the basics of React and improving our skills in building user interfaces and web components.
                </p>
              </div>
            </div>

            <div className="section">
              <h3>Members</h3>
              <div className="cards">
                <div className="card">
                  <h4>01</h4>
                  <p>Belano, Melben</p>
                </div>
                <div className="card">
                  <h4>02</h4>
                  <p>Cabacang, Mary Faith P.</p>
                </div>
                <div className="card">
                  <h4>03</h4>
                  <p>Coranes, Joven</p>
                </div>
                <div className="card">
                  <h4>04</h4>
                  <p>Hileran, Anamie</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activity1;