import React, { useState, useEffect } from "react";
import Activity4 from "./Activity4";
import { Link } from "react-router-dom";
import "./HarryPotter.css";

const API_URL = "https://hp-api.onrender.com/api/characters";

const HarryPotter = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const json = await response.json();
        setCharacters(json.slice(0, 24));
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filtered = characters.filter((char) =>
    char.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="hp-container">
      <Link to="/" className="back-btn">← Back to Home</Link>
      <h1 className="hp-title">Hogwarts Registry</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search for a wizard..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <h2 className="loading-text">Summoning data...</h2>
      ) : (
        <div className="card-wrapper">
          {filtered.map((item) => (
            <Activity4 key={item.name} character={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HarryPotter;