import React, { useState } from 'react';
import { directories } from '../data/directories.js';

const CommandLine = ({ commands }) => {
  const [currInput, setCurrInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [currentDir, setCurrentDir] = useState(directories);


  const handleInputChange = (e) => {
    setCurrInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key == 'Enter') {
    
    }
  };


  const handleLS = (dirName) => {};
  const handleCAT = (fileName) => {};


  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      fontFamily:'monospace',
      // padding: '20px',
      minWidth: '100%',
      width: 'auto',
      margin: '0 auto',
       }}>
      <h3>:)</h3>

      {commandHistory.map((entry, index) => (
        <div key={index}>
        <span> {entry.input} </span>
        <div> {entry.output} </div>
        </div>
      ))}

      <textarea
      value={currInput}
      onChange={handleInputChange}
      onKeyDown = {handleKeyDown}
      style={{
        border:'none', 
        outline: 'none',
        resize: 'none',
        fontFamily: 'monospace',
        overflowY: 'hidden',
      }}
      rows={1}
      onInput={(e) => {
        e.target.style.height = 'auto';
        e.target.style.height = `${e.target.scrollHeight}px`;
      }}
      autoFocus
      />

    </div>

  );


};



export default CommandLine;
