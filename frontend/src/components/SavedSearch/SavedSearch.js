import React, { useState } from "react";
import Search from "../Search/Search";
import RemoveWord from "../RemoveWord/RemoveWord";

function SavedSearch() {
  const [words, setWords] = useState([]);

  const addWord = (word) => {
    if (!word.text || /^\s*$/.test(word.text)) {
      return;
    }

    const newWords = [word, ...words];

    setWords(newWords);
  };

  const completeWord = (id) => {
    let updatedWords = words.map((word) => {
      if (word.id === id) {
        word.isComplete = !word.isComplete;
      }
      return word;
    });
    setWords(updatedWords);
  };

  const removeWord = (id) => {
    const removedArr = [...words].filter((word) => word.id !== id);

    setWords(removedArr);
  };

  return (
    <div>
      <Search onSubmit={addWord} />
      <RemoveWord
        words={words}
        completeWord={completeWord}
        removeWord={removeWord}
      />
    </div>
  );
}

export default SavedSearch;
