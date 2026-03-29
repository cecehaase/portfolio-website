import { useState } from 'react'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Skills } from './sections/Skills'
import { Experience } from './sections/Experience'
import { Landing } from './sections/Landing'
import { NavBar } from './layout/NavBar'

export type Page = 'landing' | 'about' | 'contact' | 'experience' | 'skills'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing')

  const navigate = (page: Page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0 })
  }

  if (currentPage === 'landing') {
    return <Landing onNavigate={navigate} />
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavBar onNavigate={navigate} />
      <main className="pt-20">
        {currentPage === 'about' && <About />}
        {currentPage === 'contact' && <Contact />}
        {currentPage === 'experience' && <Experience />}
        {currentPage === 'skills' && <Skills />}
      </main>
    </div>
  )
}

export default App