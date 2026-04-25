import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Environment } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function Blob({ position, color, scale = 1, speed = 1 }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.elapsedTime * speed;
    if (ref.current) {
      ref.current.rotation.x = t * 0.15;
      ref.current.rotation.y = t * 0.2;
    }
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.6}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 5]} />
        <MeshDistortMaterial
          color={color}
          distort={0.45}
          speed={1.4}
          roughness={0.15}
          metalness={0.35}
        />
      </mesh>
    </Float>
  );
}

function Particles({ count = 80 }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.04;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#a5b4fc"
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function Background3D() {
  return (
    <div className="bg-3d" aria-hidden>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <Blob position={[-3.2, 1.4, 0]}  color="#7c5cff" scale={1.4} speed={0.8} />
        <Blob position={[3.4, -1.2, -1]} color="#22d3ee" scale={1.2} speed={1.0} />
        <Blob position={[1.6, 2.2, -2]}  color="#ff5e7e" scale={0.7} speed={1.2} />
        <Particles count={120} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
