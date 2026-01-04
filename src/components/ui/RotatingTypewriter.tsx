import React, { useState, useEffect } from 'react';

interface RotatingTypewriterProps {
    words: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseTime?: number;
    className?: string;
    cursorColor?: string;
}

const RotatingTypewriter: React.FC<RotatingTypewriterProps> = ({
    words,
    typingSpeed = 150,
    deletingSpeed = 100,
    pauseTime = 2000,
    className = "",
    cursorColor = "bg-blue-400"
}) => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [delta, setDelta] = useState(typingSpeed);

    useEffect(() => {
        let ticker = setTimeout(() => {
            tick();
        }, delta);

        return () => clearTimeout(ticker);
    }, [text, delta]);

    const tick = () => {
        const i = loopNum % words.length;
        const fullText = words[i];
        const updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(deletingSpeed);
        } else {
            setDelta(typingSpeed);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(pauseTime);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500); // Pause before typing next word
        }
    };

    return (
        <span className={className}>
            {text}
            <span className={`inline-block w-[3px] h-[1em] align-middle ml-1 ${cursorColor} animate-pulse`} />
        </span>
    );
};

export default RotatingTypewriter;
