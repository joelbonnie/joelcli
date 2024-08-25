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
  const pauseBetweenString = 1000;
  const eraseSpeed = 50;
  


  const commands = {
    help: () => "Command help",
  
  };

  return (
    <>
      <div style={{padding:'10px', fontFamily:'monospace'}}>
      <h1> joelexia.net<span class="blink">_</span> </h1>
      <TypingText strings={strings} typingSpeed={typingSpeed} pauseBetweenString={pauseBetweenString}
      eraseSpeed={eraseSpeed} />
      </div>

      <div className="App">
        <CommandLine commands={commands} />
      </div>
    </>
  )
}

export default App
