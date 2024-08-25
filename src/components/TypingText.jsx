import React, { useState, useEffect } from 'react';

const TypingText = ({strings, typingSpeed, pauseBetweenString, eraseSpeed}) => {
    const [currentStringIndex, setCurrentStringIndex] = useState(0);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let timeout;
        if (isTyping) {
           
            if (currentWordIndex < 
                strings[currentStringIndex].length) {
                    timeout = setTimeout(() => {
                        setDisplayedText(prev => prev + strings[currentStringIndex][currentWordIndex]);
                        setCurrentWordIndex(currentWordIndex + 1);
                    }, typingSpeed);
            } else {
                timeout = setTimeout(() => {
                    setIsTyping(false);
                }, pauseBetweenString);
            } 

        } else {
            if (currentWordIndex > 0) {
                timeout = setTimeout(() => {
                    setDisplayedText(prev => prev.slice(0,-1));
                    setCurrentWordIndex(currentWordIndex - 1);
                }, eraseSpeed);
            } else {
                setIsTyping(true);
                setCurrentStringIndex((prevIndex)=> (prevIndex + 1) % strings.length);
            }
        }

        return () => clearTimeout(timeout);

    }, [currentWordIndex,isTyping,strings,currentStringIndex,
        typingSpeed,eraseSpeed, pauseBetweenString
    ]);

    // const maxLength = Math.max(...strings.map(str => str.length));

    return (
        <div style={{
            display: 'flex',
            justifyContent:'center',
            alignItems: 'center',
            height: '10px',
            fontSize: '10px',
            fontFamily: 'monospace', 
            whiteSpace:'pre',
            // minWidth: `${maxLength}ch`,
            }}>
            <h3>{displayedText}</h3>
        </div>
    );
};

export default TypingText;
