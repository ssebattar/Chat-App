import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";
import "./TextContainer.css";

export default function TextContainer({ users }) {
  return (
    <div className="textContainer">
      {users ? (
        <div>
          <h1>Currently Online:</h1>
          <div className="onlineContainer">
            <h2>
              {users.map(({ name }) => (
                <div key={name} className="activeItem">
                  <img
                    src={onlineIcon}
                    className="onlineIcon"
                    alt="Online Icon"
                  />
                  {name}
                </div>
              ))}
            </h2>
          </div>
        </div>
      ) : null}
    </div>
  );
}
