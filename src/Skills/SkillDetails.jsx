import propTypes from 'prop-types';

function SkillDetails({ details }) {
  const { title, skills } = details;

  return (
    <div className="flex min-h-[297px] w-8/12 min-w-72 flex-col rounded-xl border-[1px] border-violet-700 md:max-w-96">
      <h2 className="border-b-[1px] border-violet-700 py-2 pl-3 capitalize text-white">
        {title}
      </h2>
      <ul className="flex flex-col gap-4 px-4 py-6 text-white">
        {skills?.map((skill) => (
          <>
            <li>
              <div>
                <div className="flex justify-between">
                  <h3>{skill.skillTitle}</h3>
                  <p>{skill.percentage}</p>
                </div>
                <div className="h-[5px] overflow-hidden rounded-md bg-violet-500">
                  <div
                    className="h-full w-0 rounded-md bg-gradient-to-r from-violet-600 to-violet-900 transition-all duration-1000"
                    style={{
                      width: skill.percentage,
                    }}
                  ></div>
                </div>
              </div>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default SkillDetails;

SkillDetails.propTypes = {
  details: propTypes.object,
};
