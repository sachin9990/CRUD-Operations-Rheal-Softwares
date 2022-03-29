import React from "react";
import { useNavigate } from "react-router-dom";

export default function AddBook() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/classexample")}>Back</button>
    </div>
  );
}
