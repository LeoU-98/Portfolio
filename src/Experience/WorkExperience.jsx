import ExperienceCard from './ExperienceCard';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} z-40 size-10 rounded-xl border-2 border-solid border-violet-700 bg-black font-extrabold duration-300 before:relative before:bottom-[4px] before:!flex before:w-full before:items-center before:justify-center before:text-3xl before:text-violet-700 before:duration-300 before:content-['⟩'] hover:bg-violet-700 hover:before:text-white`}
      style={style}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} z-40 size-10 rounded-xl border-2 border-solid border-violet-700 bg-black font-extrabold duration-300 before:relative before:bottom-[4px] before:!flex before:w-full before:items-center before:justify-center before:text-3xl before:text-violet-700 before:duration-300 before:content-['⟨'] hover:bg-violet-700 hover:before:text-white`}
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
    initialSlide: 0,
    className: 'rounded-xl',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    // responsive: [
    //   {
    //     breakpoint: 1536,
    //     settings: {
    //       slidesToShow: 1,
    //       arrows: true,
    //     },
    //   },

    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 1,
    //       arrows: false,
    //       dots: false,
    //     },
    //   },
    // ],
  };

  return (
    <div className="py-12">
      <h3 className="mb-8 text-3xl text-white">Work Experience</h3>

      <div className="w-full">
        <Slider {...settings}>
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </Slider>
      </div>
    </div>
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
