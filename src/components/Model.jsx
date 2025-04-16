import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react'

export default function Model({ sleeve, neck, pocket }) {
  const { scene } = useGLTF('/model.glb')

  useEffect(() => {
    console.log('SCENE:', scene)

    scene.traverse((child) => {
      if (child.isMesh) {
        console.log('Mesh:', child.name)
        child.visible = false
      }
    })

    const show = (name) => {
      const mesh = scene.getObjectByName(name)
      if (mesh) {
        mesh.visible = true
      } else {
        console.warn(`🚨 Меш "${name}" не найден`)
      }
    }

    show('vaist') // ← используй "vaist", не "vaist.001"
    show(sleeve)  // long_sleeve / short_sleeve
    show(neck)    // v-neck / polo
    if (pocket) show('pocket')

  }, [scene, sleeve, neck, pocket])

  return <primitive object={scene} />
}

