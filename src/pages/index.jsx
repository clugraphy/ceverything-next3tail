import dynamic from 'next/dynamic'
import TestTheory from '@/components/dom/TestTheory'
import Shader from '@/components/canvas/Shader/Shader'
import NavBar from '@/components/dom/NavBar'
import Footer from '@/components/dom/Footer'

// Dynamic import is used to prevent a payload when the website start that will include threejs r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
// const Shader = dynamic(() => import('@/components/canvas/Shader/Shader'), {
//   ssr: false,
// })


// dom components goes here
const DOM = () => {
  return (
    <>
      <NavBar />
      <TestTheory />
      <Footer />

    </>


  )
}

// canvas components goes here
const R3F = () => {
  return (
    <>
      <Shader />
    </>
  )
}

const Page = () => {
  return (
    <>
      <DOM />
      {/* @ts-ignore */}
      <R3F r3f />
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'index',
    },
  }
}
