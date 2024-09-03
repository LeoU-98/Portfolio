import { useState } from 'react';
import propTypes from 'prop-types';
import { projectsData } from '../data';

/////////////////////////////////////////

const Projects = () => {
  const [visbleProjects, setVisbleProjects] = useState(5);

  function handleMore() {
    setVisbleProjects((e) => e + 3);
    if (projectsData.length === result.length) return setVisbleProjects(5);
  }

  const result = projectsData.filter((e) => e.id <= visbleProjects);

  return (
    <section className="">
      <h2 className="mb-8 text-3xl text-white">Projects</h2>
      <div className="container grid grid-cols-3 gap-5">
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

const ProjectCard = ({ data }) => {
  const { title, description, imgUrl } = data;
  return (
    <div>
      <div className="proj-imgbx relative overflow-hidden rounded-3xl">
        <img src={imgUrl} className="" />
        <div className="proj-txtx absolute left-1/2 top-[65%] w-full -translate-x-1/2 -translate-y-1/2 text-center opacity-0 duration-500 ease-in-out">
          <h4 className="text-3xl font-bold">{title}</h4>
          <span className="text-base font-normal italic">{description}</span>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  data: propTypes.object,
};
