import logo from "../../logo.svg";
import "./App.css";
import React, { useState } from "react";
import { getFlag } from "../../utils/api";
import Typewriter from "../../Components/App/typewriter";
// function used to get URL in step 2

// function findHiddenURL() {
//   const codeElements = document.querySelectorAll('code');

//   let url = '';
//   codeElements.forEach(codeEl => {
//     if (codeEl.getAttribute('data-class').startsWith('23')) {
//       const divEl = codeEl.querySelector('div[data-tag$="93"]');
//       if (divEl) {
//         const spanEl = divEl.querySelector('span[data-id*="21"]');
//         if (spanEl) {
//            const iEl = spanEl.querySelector('i.char');
//           if (iEl) {
//             url += iEl.getAttribute('value');
//           }
//         }
//       }
//     }
//   });

//   return url;
// }

// Example usage:
// const hiddenURL = findHiddenURL();
// console.log(hiddenURL); // Outputs the constructed URL

//url to get flag
// https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/636174
// flag for ramp application
// catlike
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [flag, setFlag] = useState("");

  const handleGetFlag = async () => {
    setIsLoading(true);
    const flagFromApi = await getFlag();
    setFlag(flagFromApi);
    setIsLoading(false);
  };

  console.log(flag);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Typewriter text={flag} />

        <button onClick={handleGetFlag}>
          {isLoading ? "Loading..." : "Get Flag"}
        </button>
      </header>
    </div>
  );
}

export default App;
