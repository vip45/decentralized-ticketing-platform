import React from "react";
import createImg from "../assets/create.png";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const navigate = useNavigate();
  return (
    <div className="create-event-container">
      <div className="container d-flex justify-content-center  gap-3 align-items-center flex-wrap">
        <div>
          <img src={createImg} alt="" height="200" />
        </div>
        <div className="create-event-paras">
          <h2 className="fw-bold">Make your own Event</h2>
          <p className=" fw-medium">Create what you love and invite others...</p>
          <button onClick={() => navigate("/create-event")}>
            Create Events
          </button>
        </div>
      </div>
    </div>
  );
};

export default Create;
