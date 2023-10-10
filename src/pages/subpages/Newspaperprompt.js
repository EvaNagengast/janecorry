import React from "react";
import { useNavigate } from "react-router-dom";


function Newspaperprompt() {
  let navigate = useNavigate();
  return (
    <div className="Newspaperprompt">
      <a
        onClick={() => {
          navigate("./newsletter");
        }}
      >
        Sign up to my newsletter
      </a>
      and I will send you a free short story.
    </div>
  );
}

export default Newspaperprompt;
