import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react'

export default function Model({ sleeve, neck, pocket }) {
  const { scene } = useGLTF('/model.glb')

  scene.traverse((child) => {
    if (child.isMesh) {
      child.visible = false
    }
  })

  const show = (name) => {
    const part = scene.getObjectByName(name)
    if (part) part.visible = true
    else console.warn(`🚫 Не найден меш: ${name}`)
  }

  show("vaist.001")
  show(sleeve)          // "long_sleeve" или "short_sleeve"
  show(neck)            // "v-neck" или "polo.001"
  if (pocket) show("pocket")

  return <primitive object={scene} />
}
