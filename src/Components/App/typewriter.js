import React, { useEffect, useState } from "react";

// const useTypewriter = (text, speed = 50) => {
//   const [displayText, setDisplayText] = useState("");

//   useEffect(() => {
//     let i = 0;
//     const typingInterval = setInterval(() => {
//       console.log(`Adding character: ${text.charAt(i)}, at index: ${i}`);
//       if (i < text.length) {
//         setDisplayText((prevText) => {
//           console.log(`PrevText: ${prevText}, Adding: ${text.charAt(i)}`);
//           return prevText + text.charAt(i);
//         });
//         i++;
//       } else {
//         clearInterval(typingInterval);
//       }
//     }, speed);

//     return () => {
//       clearInterval(typingInterval);
//     };
//   }, [text, speed]);

//   return displayText;
// };
// const Typewriter = ({ text, speed }) => {
//   const displayText = useTypewriter(text, speed);

//   return <p>{displayText}</p>;
// };

// export default Typewriter;

const useTypewriter = (text, speed = 500) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(currentIndex));
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [currentIndex, text, speed]);

  return displayText;
};

const Typewriter = ({ text, speed }) => {
  const displayText = useTypewriter(text, speed);

  return <p>{displayText}</p>;
};

export default Typewriter;
