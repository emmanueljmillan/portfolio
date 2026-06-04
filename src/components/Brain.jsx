import { useEffect, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import * as THREE from "three"

function BrainModel({
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  rotationSpeed = 0,
}) {
  const { scene } = useGLTF("/nihbrain.glb")
  const groupRef = useRef()

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene)
    const center = box.getCenter(new THREE.Vector3())
    scene.position.set(-center.x, -center.y, -center.z)
  }, [scene])

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * rotationSpeed
    }
  })

  return (
    <group
      ref={groupRef}
      scale={scale}
      position={position}
      rotation={rotation}
    >
      <primitive object={scene} />
    </group>
  )
}

export default function Brain({
  size = 500,
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  rotationSpeed = 0,
  cameraPosition = [0, 0, 8],
}) {
  return (
    <div
      className="brain-canvas"
      style={{
        width: size,
        height: size,
      }}
    >
      <Canvas camera={{ position: cameraPosition, fov: 45 }}>
        <ambientLight intensity={1.8} />
        <directionalLight position={[5, 5, 5]} intensity={3} />
        <pointLight position={[-4, 2, 3]} intensity={1.5} />

        <BrainModel
          scale={scale}
          position={position}
          rotation={rotation}
          rotationSpeed={rotationSpeed}
        />
      </Canvas>
    </div>
  )
}

useGLTF.preload("/nihbrain.glb")