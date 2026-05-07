import { Environment } from '@react-three/drei';

interface Props {
  intensity?: number;
}

export function SceneLighting({ intensity = 1 }: Props) {
  return (
    <>
      <ambientLight intensity={0.35 * intensity} color="#9ec5ff" />
      <directionalLight
        castShadow
        intensity={1.4 * intensity}
        position={[8, 12, 8]}
        color="#fff8e7"
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.5}
        shadow-camera-far={50}
        shadow-camera-left={-15}
        shadow-camera-right={15}
        shadow-camera-top={15}
        shadow-camera-bottom={-15}
      />
      <directionalLight intensity={0.5 * intensity} position={[-8, 6, -4]} color="#ffd1a8" />
      <directionalLight intensity={0.4 * intensity} position={[0, -8, 6]} color="#9ec5ff" />
      <Environment preset="warehouse" background={false} />
    </>
  );
}
