import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react'

export default function Model() {
  const { scene } = useGLTF('/model.glb')

  useEffect(() => {
    console.log('✅ Модель загружена:', scene)

    scene.traverse((child) => {
      if (child.isMesh) {
        console.log('🎯 Найден меш:', child.name)
        child.visible = true // временно включаем всё!
      }
    })
  }, [scene])

  return <primitive object={scene} />
}

