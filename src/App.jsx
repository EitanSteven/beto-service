import { NavBar } from './components/NavBar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Reasons } from './components/Reasons';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PreviewModal } from 'preview-modal'

import './App.css'

function App() {

  return (
    <>
      <NavBar />

      <main>
        <Hero />
        <Services />
        <Reasons />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
