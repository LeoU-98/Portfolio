import ExperienceCard from './ExperienceCard';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { workData } from '../utils/data.js';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} right-0 top-[-40px] z-40 size-10 rounded-xl border-2 border-solid border-violet-700 bg-black font-extrabold duration-300 before:relative before:bottom-[4px] before:!flex before:w-full before:items-center before:justify-center before:text-3xl before:text-violet-700 before:duration-300 before:content-['⟩'] hover:bg-violet-700 hover:before:text-white md:right-2 md:top-1/2 lg:right-20`}
      style={style}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} left-0 top-[-40px] z-40 size-10 rounded-xl border-2 border-solid border-violet-700 bg-black font-extrabold duration-300 before:relative before:bottom-[4px] before:!flex before:w-full before:items-center before:justify-center before:text-3xl before:text-violet-700 before:duration-300 before:content-['⟨'] hover:bg-violet-700 hover:before:text-white md:left-2 md:top-1/2 lg:left-20`}
      style={style}
      onClick={onClick}
    />
  );
}

function WorkExperience() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <section className="px-4 py-12" id="experience">
      <h3 className="mb-20 text-center text-3xl text-white">Work Experience</h3>
      <div className="">
        <Slider {...settings}>
          {workData.map((card, key) => (
            <ExperienceCard data={card} key={key} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default WorkExperience;

//////////////////////////////////////////////////

SampleNextArrow.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
};

SamplePrevArrow.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
};
