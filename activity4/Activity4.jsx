import React from "react";

const Activity4 = ({ character }) => {
  const { name, image, house, actor } = character;

  return (
    <div className="card">
      {image && (
        <img
          src={image}
          alt={name || "Wizard image"}
          className="card-img"
        />
      )}

      <div className="card-body">
        <h3 className="card-name">{name || "Unknown Wizard"}</h3>

        <div className="detail-row">
          <span className="label">House:</span>
          <span
            className={`value ${house
              ?.toLowerCase()
              .replace(/\s+/g, "")}`}
          >
            {house || "Unknown"}
          </span>
        </div>

        <div className="detail-row">
          <span className="label">Actor:</span>
          <span className="value">{actor || "Unknown Actor"}</span>
        </div>
      </div>
    </div>
  );
};

export default Activity4;