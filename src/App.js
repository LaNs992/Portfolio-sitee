import './styles/main.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componets/nav/navbar';
import Fotter from './componets/Fotter/Fotter';
import Home from './pages/Home';
import Projects from './pages/Project';
import Contacts from './pages/Contacts';
import Project from './pages/projects';
import ScrollToTop from './utils/scrollToTop';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<Project />} />
          <Route path="/Project" element={<Projects />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Contacts" element={<Contacts />} />
        </Routes>
        <Fotter />
      </Router>
    </div>
  );
}

export default App;
