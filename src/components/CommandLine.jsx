import React, { useState, useEffect, useRef } from 'react';
import { directories, fileSystem } from '../data/directories.js';
import {introMessage, introMessageMobile} from '../data/intro.js'
import './CommandLine.css';

const CommandLine = () => {

  const isMobile =  /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  const selectedIntroMessage = isMobile ? introMessageMobile : introMessage;

  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([{input:"", output:selectedIntroMessage}]);
  const [inputHistory, setInputHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(null);
  const [currentPath, setCurrentPath] = useState([]);

  const outputRef = useRef(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight; 
    }
  }, [commandHistory]); 

  const getDirectory = (path) => {
    return path.reduce((dir, key) => {
      if (dir && dir.children && dir.children[key]) {
        return dir.children[key];
      }
      return null; 
    }, fileSystem.root); 
  };

  const commands = {
    help: () => "Welcome to joelb.co!\nHere's a terminal to learn about my projects, experiences and more :D\n\n"+
    "Some help with commands:\n\n"+
    "Type ls to see the contents of a directory\n"+
    "Type cat [fileName] to view the content of file [fileName]\n"+
    "Type cd [directoryName] to change the current directory\n"+
    "Use cd .. to go back to the parent directory\n"+
    "Use pwd to print the current working directory\n"+
    "Type clear to clear the screen!\n\n"+
    "To cycle through previous commands use the up and down key\n"+
    "For ls, cat and cd both relative and absolute paths work! \n\n"+

    "Definitely don't type nggyu (wink wink)\n\n"+
    "Have fun! ʕっ•ᴥ•ʔっ💕",
    nggyu: () => "Never gonna give you up\nNever gonna let you down\n"+
"Never gonna run around and desert you\nNever gonna make you cry\n"+
"Never gonna say goodbye\nNever gonna tell a lie and hurt you\n\n ʕ •`ᴥ•´ʔ\n ",
    ls: (args) => {
      let targetPath;

      if (args.length === 0) {
        targetPath = currentPath;
      } else {
        const inputPath = args;
        if (inputPath.startsWith('/')) {
          targetPath = inputPath.split('/').filter(Boolean);
        } else {
          targetPath = [...currentPath, ...inputPath.split('/').filter(Boolean)];
        }
      }

      const dir = getDirectory(targetPath);
      if (dir && dir.type === 'directory') {
        return Object.keys(dir.children).join('\n');
      } else {
        return `ls: cannot access '${args || ''}': No such directory`;
      }
    },

    cat: (fileName) => {
      let targetPath;
      if (fileName.startsWith('/')) {
        targetPath = fileName.split('/').filter(Boolean).slice(0,-1);
      } else {
        targetPath = [...currentPath, ...fileName.split('/').filter(Boolean)].slice(0,-1);
      }
      const targetFile = [...fileName.split('/').filter(Boolean)].at(-1);
      const dir = getDirectory(targetPath);
      if (dir && targetFile in dir.children) {
        if (dir.children[targetFile].type == "file") {
          return dir.children[targetFile].content;
        }
        return `cat: ${fileName}: Is a directory`;
        
      }
      return `cat: ${fileName}: No such file or directory`;
    },

    cd: (args) => {
      let targetPath;

      if (args.length === 0) {
        return '';
      } else {
        const inputPath = args;
        if (inputPath == "..") {
          if (currentPath.length > 0) {
            targetPath = currentPath.slice(0, -1);
            setCurrentPath(targetPath);
          }
          return '';
        }

        if (inputPath.startsWith('/')) {
          targetPath = inputPath.split('/').filter(Boolean);
        } else {
          targetPath = [...currentPath, ...inputPath.split('/').filter(Boolean)];
        }

        const dir = getDirectory(targetPath);
        if (dir && dir['type'] == 'directory') {
          setCurrentPath(targetPath);
          return '';
        } else {
          return `cd: The directory '${args}' does not exist`
        }
      }
    },
    pwd: () => {
      if (currentPath.length == 0) return "/";
      let current_path_str = ""
      for (const curr_path_elem of currentPath) {
        current_path_str += "/" + curr_path_elem;
      }
      return current_path_str;
    },


  };
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      setInputHistory((prev) => [...prev, input]);
      setHistoryIndex(null);


      const args = input.split(' ');
      const command = args[0];
      const commandArg = args[1] || '';
      const formatted_input = "> " + input;

      if (command == 'ls') {
        const output = commands.ls(commandArg) + "\n";
        setCommandHistory([...commandHistory, {input: formatted_input, output}]);
      
      } else if (command == 'cat') {
        const output = commands.cat(commandArg) + "\n";
        setCommandHistory([...commandHistory, {input: formatted_input, output}]);
     
      } else if (command == 'cd') {
        const output = commands.cd(commandArg) + "\n";
        setCommandHistory([...commandHistory, {input: formatted_input, output}]);
     
      } else if (command == 'echo') {
        const output = commandArg+"\n"
        setCommandHistory([...commandHistory, {input: formatted_input, output}]);

      } else if (command == 'pwd') {
        const output = commands.pwd()+"\n"
        setCommandHistory([...commandHistory, {input: formatted_input, output}]);

      } else if (command == 'clear') {
        setCommandHistory([]);
      
      } else if (commands[command]) {
        const output = commands[command]();
        setCommandHistory([...commandHistory, {input: formatted_input, output }]);
      
      } else {
        setCommandHistory([...commandHistory, {input: formatted_input, output: 'Command Not Found (｡•́︿•̀｡)  Try typing help\n' }]);
      }
      
    
      setInput('');
      setHistoryIndex(null);
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHistoryIndex((prevIndex) => {
        const newIndex = prevIndex === null ? inputHistory.length - 1 : Math.max(prevIndex - 1, 0);
        setInput(inputHistory[newIndex] || '');
        return newIndex;
      });
    }
  
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHistoryIndex((prevIndex) => {
        if (prevIndex === null) return null;
        const newIndex = prevIndex < inputHistory.length - 1 ? prevIndex + 1 : null;
        setInput(newIndex !== null ? inputHistory[newIndex] : '');
        return newIndex;
      });
    }  
  };

  return (
      <>
        <div className="commandline">
          <div className="commandline-output" ref = {outputRef}>
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
