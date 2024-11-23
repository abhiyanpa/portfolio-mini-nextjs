import ProjectGrid from '../components/ProjectGrid'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center glitch-effect" data-text="ABHIYAN P A">
          ABHIYAN P A
        </h1>
        <p className="text-xl md:text-2xl text-center mb-12 text-purple-400">
          Explore my digital playground at{" "}
          <a href="https://tools.abhiyanpa.in" className="underline hover:text-purple-300 transition-colors">
            tools.abhiyanpa.in
          </a>
        </p>
        <ProjectGrid />
      </main>
      <Footer />
    </div>
  )
}

