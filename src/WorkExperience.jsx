import ExperienceCard from './ui/ExperienceCard';
import SimpleSlider from './ui/SimpleSlider';

function WorkExperience() {
  return (
    <div className="py-12">
      <h3 className="mb-8 text-3xl text-white">Work Experience</h3>

      <div className="w-full lg:px-10">
        <SimpleSlider>
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </SimpleSlider>
      </div>
    </div>
  );
}

export default WorkExperience;
