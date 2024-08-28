import React, { useState } from 'react';
import { directories } from '../data/directories.js';
import './CommandLine.css';

const CommandLine = ({ commands }) => {
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [currentDir, setCurrentDir] = useState(directories);


  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const args = input.split(' ');
      const command = args[0];
      const commandArg = args[1] || '';

      console.log(command);
      if (command == 'ls') {
        const output = handleLS(commandArg) + "\n";
        setCommandHistory([...commandHistory, {input, output}]);
      } else if (command == 'cat') {
        const output = handleCAT(commandArg) + "\n";
        setCommandHistory([...commandHistory, {input, output}]);
      } else if (command == 'clear') {
        setCommandHistory([]);
      } else if (commands[command]) {
        const output = commands[command]();
        setCommandHistory([...commandHistory, { input, output }]);
      } else {
        setCommandHistory([...commandHistory, { input, output: 'Command Not Found (｡•́︿•̀｡)  Try typing help!\n' }]);
      }
      
    
      setInput('');
    }
  };


  const handleLS = (dirName) => {
    if (dirName == '') {
      return Object.keys(currentDir).join(' ');
    } else if (currentDir[dirName]) {
      if (typeof currentDir[dirName] === 'object') {
        return Object.keys(currentDir[dirName]).join(' ');
      } else {
        return `Not a directory: ${dirName}`;
      }

    } else {
      return `No such directory: ${dirName}`;
    }
  };

  const handleCAT = (fileName) => {


    for (let dir in currentDir) {
      if (currentDir[dir][fileName]) {
        return currentDir[dir][fileName];
      }
    }
    return `No such file: ${fileName}`; 
  };

  return (
    <div className="commandline"> 

    <div className="commandline-output">
      {commandHistory.map((entry, index) => (
        <div key={index}>
        <span> {entry.input} </span>
        <div> {entry.output} </div>
        </div>
      ))}
    </div>

      <div className="commandline-prompt">
        <span className='prompt-symbol'>&gt;</span>
      
      <textarea
      value={input}
      className="commandline-input"
      onChange={handleInputChange}
      onKeyDown = {handleKeyDown}
      style={{
        border:'none', 
        outline: 'none',
        // resize: 'none',
        fontFamily: 'monospace',
      }}
      rows={1}
      // onInput={(e) => {
      //   e.target.style.height = 'auto';
      //   e.target.style.height = `${e.target.scrollHeight}px`;
      // }}
      autoFocus
      />
      </div>
    </div>
  );
};



export default CommandLine;
