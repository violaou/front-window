import { Header } from './components/Header'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { Menu } from './components/Menu'

function App() {
  return (
    <div className="font-sans select-none">
      <Menu />
      <Header />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
