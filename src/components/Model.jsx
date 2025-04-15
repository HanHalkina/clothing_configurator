import { useGLTF } from '@react-three/drei'

export default function Model({ sleeve, neck, pocket }) {
  const { scene } = useGLTF('/jacket.glb')

  scene.traverse((child) => {
    if (child.isMesh) {
      child.visible = false
    }
  })

  const show = (name) => {
    const part = scene.getObjectByName(name)
    if (part) part.visible = true
  }

  show("vaist")
  show(sleeve)
  show(neck)
  if (pocket) show("pocket")

  return <primitive object={scene} />
}