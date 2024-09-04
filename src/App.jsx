import './index.css';
import Header from './Header/Header';

import Skills from './Skills/Skills';

import ContactMe from './Contact/ContactMe';
import Projects from './Projects/Projects';
import Footer from './Footer';
import WorkExperience from './Experience/WorkExperience';
import Hero from './Home/Hero';

function App() {
  return (
    <div className="w-full bg-[#121212]">
      {/* <div className="w-full bg-gradient-to-r from-violet-900 to-indigo-950"> */}
      <Header />
      <Hero />

      <div className="container mx-auto xl:max-w-screen-xl">
        <Skills />
        <WorkExperience />
        <Projects />
      </div>
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
