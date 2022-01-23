import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, Preload } from '@react-three/drei'
import useStore from '@/helpers/store'
import { useEffect, useRef } from 'react'

const LControl = () => {
  const dom = useStore((state) => state.dom)
  const control = useRef(null)

  useEffect(() => {
    if (control) {
      dom.current.style['touch-action'] = 'none'
    }
  }, [dom, control])
  // @ts-ignore
  return <OrbitControls ref={control} domElement={dom.current} />
}
const LCanvas = ({ children }) => {
  const dom = useStore((state) => state.dom)

  return (
    <Canvas
      mode='concurrent'
      style={{
        position: 'absolute',
        top: 0,
        background: 'black',
      }}
      onCreated={(state) => state.events.connect(dom.current)}
    >
      <LControl />
      <Stars
        radius={100} // Radius of the inner sphere (default=100)
        depth={12} // Depth of area where stars should fit (default=50)
        count={5000} // Amount of stars (default=5000)
        factor={8} // Size factor (default=4)
        saturation={0} // Saturation 0-1 (default=0)
        fade // Faded dots (default=false)
      />
      <Preload all />
      {children}
    </Canvas>
  )
}

export default LCanvas
