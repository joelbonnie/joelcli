import React, { useState } from 'react';
import { directories, fileSystem } from '../data/directories.js';
import {introMessage} from '../data/intro.js'
import './CommandLine.css';

const CommandLine = ({ commands }) => {

  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([{input:"", output:introMessage}]);
  const [currentDir, setCurrentDir] = useState(directories);
  const [currentPath, setCurrentPath] = useState(['root']);


  const getDirectory = (path) => {
    return path.slice(1).reduce((dir, key) => dir.children[key], fileSystem.root);
  };

  const getPathString = (path) => path.join('/');

  const changeDirectory = (path, target) => {
    const dir = getDirectory(path);
    if (dir.children[target] && dir.children[target].type === 'directory') {
      return [...path, target];
    } else {
      return path;
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log(fileSystem);
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
     
      } else if (command == 'echo') {
        const output = commandArg+"\n"
        setCommandHistory([...commandHistory, {input, output}]);

      } else if (command == 'clear') {
        setCommandHistory([]);
      
      } else if (commands[command]) {
        const output = commands[command]();
        setCommandHistory([...commandHistory, { input, output }]);
      
      } else {
        setCommandHistory([...commandHistory, { input, output: 'Command Not Found (｡•́︿•̀｡)  Try typing help\n' }]);
      }
      
    
      setInput('');
    }
  };


  const handleLS = (dirName) => {

    const dir = getDirectory(currentPath);

    return Object.keys(dir.children).join('  ');
    
    // TODO: add on relative / absolute paths

    /*
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
    */
  };

  const handleCAT = (fileName) => {

    const dir = getDirectory(currentPath);
    if (fileName in dir.children) {
      return dir.children[fileName].content;
    }
    /*
    for (let dir in currentDir) {
      if (currentDir[dir][fileName]) {
        return currentDir[dir][fileName];
      }
    }
    */ 

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
      autoFocus
      />
      </div>
    </div>
  );
};



export default CommandLine;
