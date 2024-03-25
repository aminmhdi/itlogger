import React, { useState } from "react";

const AddLogModal = () => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");
  return (
    <div
      id="add-log-modal"
      className="modal"
      style={modalStyle}
    >
      <div className="modal-content">
        <h4>Enter system log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            >
              <label
                htmlFor="message"
                className="active"
              >
                {" "}
                Log Message{" "}
              </label>
            </input>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              onChange={(e) => setTech(e.target.value)}
              className="browser-default"
            >
              <option
                value=""
                disabled
              >
                Select technician
              </option>
              <option value="John Doe">John Doe</option>
              <option value="Sam Smith">Sam Smith</option>
              <option value="Sara Wilson">Sara Wilson</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label
                type="checkbox"
                name="attention"
                value={attention}
                onChange={() => setAttention(!attention)}
                className="filled-in"
                checked={attention}
              >
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%"
};

export default AddLogModal;
