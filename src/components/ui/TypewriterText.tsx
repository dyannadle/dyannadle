import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
    text: string;
    delay?: number;
    speed?: number;
    className?: string;
    cursorColor?: string;
    startDelay?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
    text,
    speed = 100,
    className = "",
    cursorColor = "bg-blue-400",
    startDelay = 0
}) => {
    const [displayedText, setDisplayedText] = useState("");
    const [isStarted, setIsStarted] = useState(false);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setIsStarted(true);
        }, startDelay);

        return () => clearTimeout(startTimeout);
    }, [startDelay]);

    useEffect(() => {
        if (!isStarted) return;

        let i = 0;
        const intervalId = setInterval(() => {
            setDisplayedText(text.slice(0, i + 1));
            i++;
            if (i > text.length) {
                clearInterval(intervalId);
            }
        }, speed);

        return () => clearInterval(intervalId);
    }, [text, speed, isStarted]);

    return (
        <span className={className}>
            {displayedText}
            <span className={`inline-block w-[3px] h-[1em] align-middle ml-1 ${cursorColor} animate-pulse`} />
        </span>
    );
};

export default TypewriterText;
