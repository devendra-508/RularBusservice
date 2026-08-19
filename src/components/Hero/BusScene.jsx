import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";

function Bus() {
  return (
    <Float
      speed={2}
      rotationIntensity={0.15}
      floatIntensity={0.5}
    >
      <group>

        {/* Main bus body */}
        <mesh>
          <boxGeometry args={[3.8, 1.4, 1.6]} />
          <meshStandardMaterial color="#16a34a" />
        </mesh>

        {/* Roof */}
        <mesh position={[0, 0.85, 0]}>
          <boxGeometry args={[3.5, 0.25, 1.5]} />
          <meshStandardMaterial color="#15803d" />
        </mesh>

        {/* Front windshield */}
        <mesh position={[1.93, 0.25, 0]}>
          <boxGeometry args={[0.05, 0.7, 1.2]} />
          <meshStandardMaterial color="#bfdbfe" />
        </mesh>

        {/* Wheels */}
        <mesh
          rotation={[Math.PI / 2, 0, 0]}
          position={[1.2, -0.8, 0.85]}
        >
          <cylinderGeometry args={[0.45, 0.45, 0.25, 32]} />
          <meshStandardMaterial color="#171717" />
        </mesh>

        <mesh
          rotation={[Math.PI / 2, 0, 0]}
          position={[-1.2, -0.8, 0.85]}
        >
          <cylinderGeometry args={[0.45, 0.45, 0.25, 32]} />
          <meshStandardMaterial color="#171717" />
        </mesh>

      </group>
    </Float>
  );
}

export default function BusScene() {
  return (
    <Canvas
  camera={{
    position: [5, 3, 6],
    fov: 45,
  }}
  style={{
    width: "100%",
    height: "100%",
  }}
>
      <ambientLight intensity={2} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={3}
      />

      <Bus />

      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={1}
      />
    </Canvas>
  );
}