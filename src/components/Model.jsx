import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react'

export default function Model({ sleeve, neck, pocket, scale, yPos }) {
  const { scene } = useGLTF('/model.glb')

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) child.visible = false
    })

    const show = (name) => {
      const mesh = scene.getObjectByName(name)
      if (mesh) mesh.visible = true
    }

    show('vaist')
    show(sleeve)
    show(neck)
    if (pocket) show('pocket')
  }, [scene, sleeve, neck, pocket])

  return (
    <group scale={[scale, scale, scale]} position={[0, yPos, 0]}>
      <primitive object={scene} />
    </group>
  )
}



