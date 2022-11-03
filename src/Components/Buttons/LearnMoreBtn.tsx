import React from "react";
import "./LearnMoreBtn.css";

interface props {
  text: string;
  onClick: () => void;
}
const LearnMoreBtn: React.FC<props> = ({ text, onClick, }) => {

  return (
    <div>
      <button id="Learn-more-btn" onClick={onClick}  >
        {text}
      </button>
    </div>
  );
};

export default LearnMoreBtn;
