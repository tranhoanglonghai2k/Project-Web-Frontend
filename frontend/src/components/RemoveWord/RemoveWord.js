import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";

const RemoveWord = ({ words, completeWord, removeWord }) => {
  return words.map((word, index) => (
    <div
      className={word.isComplete ? "word-row complete" : "word-row"}
      key={index}
    >
      <div key={word.id} onClick={() => completeWord(word.id)}>
        {word.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeWord(word.id)}
          className="delete-icon"
        />
      </div>
    </div>
  ));
};

export default RemoveWord;
