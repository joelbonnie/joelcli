import React, { useState } from 'react';
import { directories, fileSystem } from '../data/directories.js';
import {introMessage} from '../data/intro.js'
import './CommandLine.css';

const CommandLine = () => {

  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([{input:"", output:introMessage}]);
  const [currentPath, setCurrentPath] = useState([]);

  const getDirectory = (path) => {
    return path.reduce((dir, key) => {
      if (dir && dir.children && dir.children[key]) {
        return dir.children[key];
      }
      return null; 
    }, fileSystem.root); 
  };

  const changeDirectory = (path, target) => {
    const dir = getDirectory(path);
    if (dir && dir.type === 'directory' && dir.children[target] && dir.children[target].type === 'directory') {
      return [...path, target];
    } else {
      return path;
    }
  };

  const commands = {
    help: () => "Welcome to joelexia.net!\nHere's a CLI to learn about my projects, experiences and more :D\n\n"+
    "Some help with commands:\n"+
    "Try typing ls to see content of the root directory\nAnd ls [directoryName] to see the content of directory [directoryName]\n" +
    "Type cat [fileName] to view the content of file [fileName]\n"+
    "Type clear to clear the screen!\n\n"+
    "Have fun! ʕっ•ᴥ•ʔっ💕",
    rickroll: () => "Never gonna give you up\nNever gonna let you down\n"+
"Never gonna run around and desert you\nNever gonna make you cry\n"+
"Never gonna say goodbye\nNever gonna tell a lie and hurt you\n\n ʕ •`ᴥ•´ʔ\n ",
    ls: (args, cwd) => {
      let targetPath;

      if (args.length === 0) {
        targetPath = cwd;
      } else {
        const inputPath = args;
        if (inputPath.startsWith('/')) {
          targetPath = inputPath.split('/').filter(Boolean);
        } else {
          targetPath = [...cwd, ...inputPath.split('/').filter(Boolean)];
        }
      }

      console.log(targetPath);
      const dir = getDirectory(targetPath);
      // console.log(dir);
      if (dir && dir.type === 'directory') {
        return Object.keys(dir.children).join('\n');
      } else {
        return `ls: cannot access '${args || ''}': No such directory`;
      }
    },
  };
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const args = input.split(' ');
      const command = args[0];
      const commandArg = args[1] || '';

      if (command == 'ls') {
        const output = commands.ls(commandArg, currentPath) + "\n";
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


  const handleCAT = (fileName) => {

    const dir = getDirectory(currentPath);
    if (fileName in dir.children) {
      return dir.children[fileName].content;
    }

    return `No such file: ${fileName}`; 
  };



  return (
      <>
        <div className="commandline">
          <div className="commandline-output">
            {commandHistory.map((entry, index) => (
              <div key={index}>
                <span>{entry.input}</span>
                <div>{entry.output}</div>
              </div>
            ))}
          </div>
    
          <div className="commandline-prompt">
            <span className="prompt-symbol">&gt;</span>
            <textarea
              value={input}
              className="commandline-input"
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              autoFocus
            />
          </div>
        </div>
      </>
    );
};



export default CommandLine;
