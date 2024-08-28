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
    help: () => "Welcome to joelexia.net!\n Here's a CLI to learn about my projects, experiences and more :D\n\n "+
    "Some help with commands:\n "+
    "Try typing ls to see content of the root directory\n And ls [directoryName] to see the content of directory [directoryName]\n " +
    "Type cat [fileName] to view the content of file [fileName]\n\n "+
    "Have fun! ʕっ•ᴥ•ʔっ💕",
    rickroll: () => "Never gonna give you up\n Never gonna let you down \n"+
" Never gonna run around and desert you\n Never gonna make you cry\n"+
" Never gonna say goodbye\n Never gonna tell a lie and hurt you\n\n ʕ •`ᴥ•´ʔ\n ",
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
