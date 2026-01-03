import React, { useMemo, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

const TECH_KEYWORDS = [
    "Redis", "React", "Docker", "AWS", "Node.js", "System Design"
];

const Word = ({ children, position }: { children: string; position: [number, number, number] }) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false);

    useFrame(({ clock }) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
        }
    });

    return (
        <Float floatIntensity={1.5} rotationIntensity={0.5} speed={1.5}>
            <Text
                ref={meshRef}
                scale={hovered ? 1.5 : 1}
                fontSize={1.1}
                color={hovered ? "#00E5FF" : "#6B7280"}
                position={position}
                anchorX="center"
                anchorY="middle"
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
            >
                {children}
            </Text>
        </Float>
    );
};

const Cloud = () => {
    const words = useMemo(() => {
        const temp = [];
        const spherical = new THREE.Spherical();

        // Reduced count for stability
        for (let i = 0; i < TECH_KEYWORDS.length; i++) {
            spherical.set(12, Math.acos(-1 + (2 * i) / TECH_KEYWORDS.length), Math.sqrt(TECH_KEYWORDS.length * Math.PI) * Math.acos(-1 + (2 * i) / TECH_KEYWORDS.length));
            const pos = new THREE.Vector3().setFromSpherical(spherical);
            temp.push({
                pos: [pos.x, pos.y, pos.z] as [number, number, number],
                word: TECH_KEYWORDS[i],
            });
        }
        return temp;
    }, []);

    const groupRef = useRef<THREE.Group>(null);
    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.05;
        }
    })

    return (
        <group ref={groupRef}>
            {words.map((w, i) => (
                <Word key={i} position={w.pos}>
                    {w.word}
                </Word>
            ))}
            {/* Stars Removed for Stability */}
        </group>
    )
}

const TechBackground = () => {
    return (
        <div className="fixed inset-0 w-full h-full -z-10 bg-[#050A14]">
            {/* Gradient always visible as base */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050A14] to-[#02040a]" />

            <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 20], fov: 60 }} gl={{ alpha: true }}>
                <ambientLight intensity={1} />
                <Cloud />
            </Canvas>
        </div>
    );
};

export default TechBackground;
