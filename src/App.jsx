import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './component/Navbar';
import Aboutme from './pages/Aboutme'
import Exper from './pages/Exper';

function App() {
  return (
    <main className='relative w-full h-full overflow-hidden bg-slate-50 '>
      <Navbar />
        <Home />
        <Aboutme />
        <Exper />
        <Projects />
        <Contact />
    </main>
  )
}

export default App
