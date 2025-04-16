﻿import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import Model from './components/Model'
import { useState } from 'react'

function App() {
  const [sleeve, setSleeve] = useState("long_sleeve")
  const [neck, setNeck] = useState("v-neck")
  const [pocket, setPocket] = useState(true)

  return (
    <>
      
      <div className="ui-panel">
  <button onClick={() => setSleeve(sleeve === "long_sleeve" ? "short_sleeve" : "long_sleeve")}>
    Toggle Sleeve
  </button>
  <button onClick={() => setNeck(neck === "v-neck" ? "polo" : "v-neck")}>
    Toggle Neck
  </button>
  <button onClick={() => setPocket(!pocket)}>
    Toggle Pocket
  </button>
</div>

      <Canvas camera={{ position: [0, 1.5, 3], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <Environment preset="sunset" />
        <OrbitControls />
        <Model sleeve={sleeve} neck={neck} pocket={pocket} />
      </Canvas>
    </>
  )
}

export default App

