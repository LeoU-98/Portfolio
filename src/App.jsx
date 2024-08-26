import './index.css';
import Header from './Header';
import Hero from './Hero';
import Skills from './Skills';
import WorkExperience from './WorkExperience';

import ContactMe from './ContactMe';

function App() {
  return (
    <div className="w-full bg-gradient-to-r from-violet-900 to-indigo-950">
      <Header />
      <div className="container mx-auto px-6 xl:max-w-screen-xl">
        <Hero />
        <Skills />
        <WorkExperience />
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
