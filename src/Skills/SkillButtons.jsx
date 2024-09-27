import propTypes from 'prop-types';
import markup from '../images/skill buttons icons/markup.png';
import interactivity from '../images/skill buttons icons/interactivity.png';
import styling from '../images/skill buttons icons/styling.png';
import softskills from '../images/skill buttons icons/softSkills.png';
import { skills as skillsArray } from '../utils/data.js';

function SkillButtons({ setSkillsData, skillsData }) {
  return (
    <ul className="grid h-fit w-8/12 min-w-72 grid-cols-2 grid-rows-2 gap-10 md:max-w-80">
      <SkillButton
        imageSource={markup}
        alt={'markup icon'}
        text={'markup'}
        setSkillsData={setSkillsData}
        isActive={skillsData?.title?.toLowerCase() === 'markup'}
      />
      <SkillButton
        imageSource={interactivity}
        alt={'interactivity icon'}
        text={'interactivity'}
        setSkillsData={setSkillsData}
        isActive={skillsData?.title?.toLowerCase() === 'interactivity'}
      />
      <SkillButton
        imageSource={styling}
        alt={'styling icon'}
        text={'styling'}
        setSkillsData={setSkillsData}
        isActive={skillsData?.title?.toLowerCase() === 'styling'}
      />
      <SkillButton
        imageSource={softskills}
        alt={'soft skills icon'}
        text={'soft skills'}
        setSkillsData={setSkillsData}
        isActive={skillsData?.title?.toLowerCase() === 'soft skills'}
      />
    </ul>
    // <ul className="grid h-fit w-8/12 min-w-72 grid-cols-2 grid-rows-2 gap-10 md:max-w-80">
    //   <SkillButton
    //     imageSource={frontend}
    //     alt={'frontend icon'}
    //     text={'frontend'}
    //     setSkillsData={setSkillsData}
    //     isActive={skillsData?.title?.toLowerCase() === 'frontend'}
    //   />
    //   <SkillButton
    //     imageSource={backend}
    //     alt={'backend icon'}
    //     text={'backend'}
    //     setSkillsData={setSkillsData}
    //     isActive={skillsData?.title?.toLowerCase() === 'backend'}
    //   />
    //   <SkillButton
    //     imageSource={tools}
    //     alt={'tools icon'}
    //     text={'tools'}
    //     setSkillsData={setSkillsData}
    //     isActive={skillsData?.title?.toLowerCase() === 'tools'}
    //   />
    //   <SkillButton
    //     imageSource={softskills}
    //     alt={'soft skills icon'}
    //     text={'soft skills'}
    //     setSkillsData={setSkillsData}
    //     isActive={skillsData?.title?.toLowerCase() === 'soft skills'}
    //   />
    // </ul>
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
        className={`${isActive ? 'bg-gradient-to-br' : ''} relative mx-auto h-20 w-32 cursor-pointer select-none rounded-xl border-[1px] border-violet-700 from-violet-600 to-violet-900 duration-300 hover:bg-gradient-to-l active:translate-y-4 md:h-20 md:w-36`}
      >
        <img
          src={imageSource}
          alt={alt}
          className={`absolute -left-4 -top-4 size-9 md:size-10 ${isActive ? 'animate-pulse' : ''} rounded-lg border-2 border-violet-700 bg-[#151515] p-1`}
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
