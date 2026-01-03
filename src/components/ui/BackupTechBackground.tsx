import React from 'react';

const BackupTechBackground = () => {
    return (
        <div className="fixed inset-0 w-full h-full -z-10 bg-[#050A14] overflow-hidden">
            {/* 1. Base Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050A14] via-[#071124] to-[#02040a]" />

            {/* 2. Cyber Grid */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `linear-gradient(to right, #00E5FF 1px, transparent 1px),
                                      linear-gradient(to bottom, #00E5FF 1px, transparent 1px)`,
                    backgroundSize: '4rem 4rem',
                    maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)',
                    transform: 'perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px)',
                    animation: 'grid-move 20s linear infinite'
                }}
            />

            {/* 3. Floating Glow Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />

            <style>{`
                @keyframes grid-move {
                    0% { transform: perspective(500px) rotateX(60deg) translateY(0) translateZ(-200px); }
                    100% { transform: perspective(500px) rotateX(60deg) translateY(4rem) translateZ(-200px); }
                }
            `}</style>
        </div>
    );
};

export default BackupTechBackground;
