import { Header } from './components/common/Header'
import { Footer } from './components/common/Footer'
import { HeroSection } from './components/hero/HeroSection'
import { ContentSection } from './components/contents/ContentSection'
import { AboutSection } from './components/about/AboutSection'
import { SponsorSection } from './components/sponsors/SponsorSection'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SponsorSection />
        <ContentSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
