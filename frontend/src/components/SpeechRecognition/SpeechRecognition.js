import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Dictaphone = ({ setInput }) => {
  const [content, setContent] = useState(null);
  useEffect(() => {
    setContent(transcript);
  }, [transcript]);
  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  // useEffect(() => {
  //   setInput(content);
  // }, [content]);
  return (
    <div>
      <button onClick={SpeechRecognition.startListening}>Start</button>
    </div>
  );
};
export default Dictaphone;
