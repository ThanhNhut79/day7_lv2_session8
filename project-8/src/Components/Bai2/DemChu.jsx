/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./DemChu.css";

const DemChu = () => {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    let timerId;
    const handleKeyUp = () => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        const words = text.trim().split(/\s+/);
        setWordCount(words.length);
      }, 500);
    };

    document.addEventListener("keyup", handleKeyUp);

    return () => {
      clearTimeout(timerId);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [text]);

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="bai2">
      <textarea
        className="text"
        value={text}
        onChange={handleInputChange}
        placeholder="Moi nhap vao"
      />
      <p>Word: {wordCount}</p>
    </div>
  );
};

export default DemChu;
