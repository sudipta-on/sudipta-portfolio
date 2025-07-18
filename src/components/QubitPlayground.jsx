import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Sphere = () => {
  const sphereRef = useRef();
  const arrowRef = useRef();

  // Animate rotation
  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.005;
    }
  });

  // Scroll-triggered scale animation
  useEffect(() => {
    gsap.fromTo(
      sphereRef.current.scale,
      { x: 0, y: 0, z: 0 },
      {
        x: 1, y: 1, z: 1,
        scrollTrigger: {
          trigger: '#bloch-container',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        duration: 1.2,
        ease: 'power3.out',
      }
    );
  }, []);

  const vectorDir = new THREE.Vector3(0.5, 0.7, 0.5).normalize();

  return (
    <group ref={sphereRef}>
      {/* Bloch Sphere */}
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial color="#5530ff" wireframe opacity={0.5} transparent />
      </mesh>

      {/* Vector Arrow */}
      <arrowHelper
        ref={arrowRef}
        args={[vectorDir, new THREE.Vector3(0, 0, 0), 1.1, '#00ffff']}
      />

      {/* Axis Arrows */}
      <arrowHelper args={[new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, 0, 0), 1.2, '#ff5555']} />
      <arrowHelper args={[new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 0), 1.2, '#55ff55']} />
      <arrowHelper args={[new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 0, 0), 1.2, '#5555ff']} />

      {/* Axis Labels */}
      <Html position={[1.3, 0, 0]} center className="text-xs text-red-400">X</Html>
      <Html position={[0, 1.3, 0]} center className="text-xs text-green-400">Y</Html>
      <Html position={[0, 0, 1.3]} center className="text-xs text-blue-400">Z</Html>

      {/* State Label */}
      <Html position={[0, -1.4, 0]} center className="text-white text-sm font-mono">
        |ψ⟩ = cos(θ/2)|0⟩ + e<sup>iϕ</sup>sin(θ/2)|1⟩
      </Html>
    </group>
  );
};

export default function BlochSphere() {
  return (
    <div id="bloch-container" className="w-full h-[500px] md:h-[600px] rounded-xl overflow-hidden  shadow-lg">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />
        <Sphere />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
