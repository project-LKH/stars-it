import Header from "./components/layout/Header"
import Hero from "./components/sections/Hero"
import Services from "./components/sections/Services"
import Pricing from "./components/sections/Pricing"
import Investment from "./components/sections/Investment"
import Contact from "./components/sections/Contact"
import Footer from "./components/layout/Footer"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Investment />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
