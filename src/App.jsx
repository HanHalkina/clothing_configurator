﻿import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import Model from './components/Model'
import { useState } from 'react'

function App() {
  const [sleeve, setSleeve] = useState("long_sleeve")
  const [neck, setNeck] = useState("v-neck")
  const [pocket, setPocket] = useState(true)
  const [scale, setScale] = useState(0.1)

  return (
    <>
      <div style={{ position: 'absolute', zIndex: 1, padding: 10 }}>
      <div style={{ background: 'red', padding: '10px', color: 'white' }}>
  🧪 Проверка интерфейса: этот блок должен быть виден
</div>

  <button onClick={...}>Toggle Sleeve</button>
  <button onClick={...}>Toggle Neck</button>
  <button onClick={...}>Toggle Pocket</button>

  <div style={{ marginTop: 10 }}>
    <label>Scale: {scale.toFixed(2)}</label>
    <input
      type="range"
      min="0.01"
      max="1"
      step="0.01"
      value={scale}
      onChange={(e) => setScale(parseFloat(e.target.value))}
    />
  </div>
</div>

      <Canvas camera={{ position: [0, 1.5, 3], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <Environment preset="sunset" />
        <OrbitControls />
        <Model sleeve={sleeve} neck={neck} pocket={pocket} scale={scale} />
      </Canvas>
    </>
  )
}

export default App
