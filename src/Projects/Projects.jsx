import { useState } from 'react';
import { projectsData } from '../utils/data';
import ProjectCard from './ProjectCard';

/////////////////////////////////////////

const Projects = () => {
  const [visbleProjects, setVisbleProjects] = useState(5);

  function handleMore() {
    setVisbleProjects((e) => e + 3);
    if (projectsData.length === result.length) return setVisbleProjects(5);
  }

  const result = projectsData.filter((e) => e.id <= visbleProjects);

  return (
    <section className="px-4 py-6" id="projects">
      <h2 className="mb-10 text-center text-3xl text-white">Projects</h2>
      <div className="container grid grid-cols-1 gap-3 md:gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {result.map((project, key) => {
          return <ProjectCard key={key} data={project} />;
        })}
      </div>
      <div className="mt-5 flex items-center justify-center py-1">
        <button
          className="glow-on-hover flex items-center justify-center rounded-full px-3 py-2 uppercase"
          onClick={handleMore}
        >
          {projectsData.length === result.length ? 'Show less' : 'Show more'}
        </button>
      </div>
    </section>
  );
};

export default Projects;
