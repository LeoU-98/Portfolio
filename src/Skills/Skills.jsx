import { useState } from 'react';
import SkillDetails from './SkillDetails.jsx';
import SkillButtons from './SkillButtons.jsx';
import { skills } from '../utils/data.js';

function Skills() {
  const [skillsData, setSkillsData] = useState(skills[0]);

  return (
    <div className="-mt-10">
      <section className="rounded-[40px] bg-[#151515] p-20">
        <h3 className="mb-8 text-3xl text-white">Skills</h3>
        <div className="flex flex-col-reverse items-center gap-10 sm:flex-row lg:justify-between">
          <SkillButtons setSkillsData={setSkillsData} skillsData={skillsData} />
          <SkillDetails details={skillsData} />
        </div>
      </section>
    </div>
  );
}

export default Skills;
