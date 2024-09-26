import { useState } from 'react';
import SkillDetails from './SkillDetails.jsx';
import SkillButtons from './SkillButtons.jsx';
import { skills } from '../utils/data.js';

function Skills() {
  const [skillsData, setSkillsData] = useState(skills[0]);

  return (
    <div className="-mt-10" id="skills">
      <section className="rounded-[40px] bg-[#151515] lg:p-20 lg:pt-14">
        <h3 className="mb-14 text-center text-3xl text-white">Skills</h3>
        <div className="flex flex-col-reverse items-center gap-10 px-4 sm:flex-row sm:gap-5 sm:px-6 lg:justify-between">
          <SkillButtons setSkillsData={setSkillsData} skillsData={skillsData} />
          <SkillDetails details={skillsData} />
        </div>
      </section>
    </div>
  );
}

export default Skills;
