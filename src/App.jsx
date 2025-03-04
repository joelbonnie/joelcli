import { useState } from 'react'
import './App.css'

import CommandLine from './components/CommandLine'
import Github from "./assets/github.svg";
import Linkedin from "./assets/linkedin.svg";

function App() {
  const [count, setCount] = useState(0)

  const strings = ['data scientist.','dreamer.','linux enthusiast.',
    'teacher.','coder.','computer scientist.',
  'mentor.', 'guitarist.','thunderbird.'];

  const typingSpeed= 100;
  const pauseBetweenString = 900;
  const eraseSpeed = 50;
  

  return (
    <>
      <div className="App">
      <div className="header">
        <h1> joelb.co<span className="blink">_</span> </h1>
        <div className="social-icons">
          <a href="https://github.com/joelbonnie" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="GitHub" width="18" />
          </a>
          <a href="https://linkedin.com/in/joelbonnie" target="_blank" rel="noopener noreferrer">
            <img src={Linkedin} alt="LinkedIn" width="18" />
          </a>
        </div>
      </div>
      <CommandLine />
      </div>
    </>
  )
}

export default App
