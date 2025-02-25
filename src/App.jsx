import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import TypingText from './components/TypingText'
import CommandLine from './components/CommandLine'

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
      <h1> joelexia.net<span className="blink">_</span> </h1>
        <CommandLine />
      </div>
    </>
  )
}

export default App
