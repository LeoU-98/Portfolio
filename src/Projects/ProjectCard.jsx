import propTypes from 'prop-types';

function ProjectCard({ data }) {
  const { title, imgUrl, demoLink, repoLink, desc } = data;
  return (
    <div>
      <div className="proj-imgbx group relative overflow-hidden rounded-3xl">
        <img src={imgUrl} className="h-[300px]" />
        <div className="absolute left-1/2 top-[65%] w-full -translate-x-1/2 text-center opacity-0 duration-500 ease-in-out group-hover:top-8 group-hover:opacity-100">
          <h3 className="block text-3xl font-bold text-white">{title}</h3>
          <div className="mt-4 px-5">
            <DescriptionList data={desc} />
            <div className="mt-5 flex items-center gap-2">
              <a
                target="_blank"
                href={demoLink}
                className="block cursor-pointer rounded-xl bg-[#121212] px-3 py-2 text-base font-medium text-white duration-300 hover:bg-white hover:text-black"
              >
                Live Demo
              </a>
              <a
                target="_blank"
                href={repoLink}
                className="block cursor-pointer rounded-xl bg-[#121212] px-3 py-2 text-base font-medium text-white duration-300 hover:bg-white hover:text-black"
              >
                Git Hub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

function DescriptionList({ data }) {
  const { framework, styling, work, status } = data;

  return (
    <div className="text-start text-white">
      <p>Status : {status}</p>
      <p>Work : {work}</p>
      <h4 className="">Using:</h4>
      <ul className="flex flex-col px-4 text-sm">
        <li>Framework: {framework}</li>
        <li>Styling: {styling}</li>
      </ul>
    </div>
  );
}

ProjectCard.propTypes = {
  data: propTypes.object,
};

DescriptionList.propTypes = {
  data: propTypes.object,
};
