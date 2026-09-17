import Navigation from './components/navigation/Navigation'
import Hero from './components/sections/Hero'
import Story from './components/sections/Story'
import Djebba from './components/sections/Djebba'
import Product from './components/sections/Product'
import SavoirFaire from './components/sections/SavoirFaire'
import Footer from './components/layout/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen text-plum-dark antialiased">
      <Navigation />
      <main>
        <Hero />
        <Story />
        <Djebba />
        <Product />
        <SavoirFaire />
      </main>
      <Footer />
    </div>
  )
}
