import propTypes from 'prop-types';
import frontend from '../images/skill buttons icons/frontEnd1.png';
import backend from '../images/skill buttons icons/backEnd.png';
import tools from '../images/skill buttons icons/tools.png';
import softskills from '../images/skill buttons icons/softSkills.png';
import { skills as skillsArray } from '../utils/data.js';

function SkillButtons({ setSkillsData, skillsData }) {
  return (
    <ul className="grid h-fit w-8/12 min-w-72 grid-cols-2 grid-rows-2 gap-10 md:max-w-80">
      <SkillButton
        imageSource={frontend}
        alt={'frontend icon'}
        text={'frontend'}
        setSkillsData={setSkillsData}
        isActive={skillsData?.title?.toLowerCase() === 'frontend'}
      />
      <SkillButton
        imageSource={backend}
        alt={'backend icon'}
        text={'backend'}
        setSkillsData={setSkillsData}
        isActive={skillsData?.title?.toLowerCase() === 'backend'}
      />
      <SkillButton
        imageSource={tools}
        alt={'tools icon'}
        text={'tools'}
        setSkillsData={setSkillsData}
        isActive={skillsData?.title?.toLowerCase() === 'tools'}
      />
      <SkillButton
        imageSource={softskills}
        alt={'soft skills icon'}
        text={'soft skills'}
        setSkillsData={setSkillsData}
        isActive={skillsData?.title?.toLowerCase() === 'soft skills'}
      />
    </ul>
  );
}

export default SkillButtons;

function SkillButton({ imageSource, alt, text, setSkillsData, isActive }) {
  const corrispondingData = skillsArray.find(
    (el) => el.title.toLowerCase() === text,
  );

  return (
    <li onClick={() => setSkillsData(corrispondingData)}>
      <div
        className={`${isActive ? 'bg-gradient-to-br' : ''} relative mx-auto h-20 w-36 cursor-pointer select-none rounded-xl border-2 border-violet-700 from-violet-600 to-violet-900 duration-300 hover:bg-gradient-to-r active:translate-y-4`}
      >
        <img
          src={imageSource}
          alt={alt}
          className={`absolute -left-4 -top-4 size-10 ${isActive ? 'animate-pulse' : ''} rounded-lg border-2 border-violet-700 bg-gradient-to-br from-violet-600 via-white to-violet-900 p-1`}
        />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm capitalize text-white">
          {text}
        </span>
      </div>
    </li>
  );
}

SkillButtons.propTypes = {
  setSkillsData: propTypes.func,
  skillsData: propTypes.object,
};

SkillButton.propTypes = {
  imageSource: propTypes.string,
  alt: propTypes.string,
  text: propTypes.string,
  setSkillsData: propTypes.func,
  isActive: propTypes.bool,
};
