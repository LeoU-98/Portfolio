import { useState } from 'react';
import SkillDetails from './ui/SkillDetails';
import SkillButtons from './ui/SkillButtons';
import { skills } from './utils/data.js';

function Skills() {
  const [skillsData, setSkillsData] = useState(skills[0]);

  return (
    <section className="py-12">
      <h3 className="mb-8 text-3xl text-white">Technical Proficiency</h3>

      <div className="flex flex-col-reverse items-center gap-10 sm:flex-row lg:justify-between">
        <SkillButtons setSkillsData={setSkillsData} skillsData={skillsData} />
        <SkillDetails details={skillsData} />
      </div>
    </section>
  );
}

export default Skills;
