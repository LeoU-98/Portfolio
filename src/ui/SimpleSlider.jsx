import Slider from 'react-slick';
import PropTypes from 'prop-types';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`before:rounded-lg before:text-violet-700 before:content-['→'] ${className}`}
      style={style}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`before:rounded-lg before:text-violet-700 before:content-['←'] ${className}`}
      style={style}
      onClick={onClick}
    />
  );
}

export default function SimpleSlider({ children }) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    // slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    className: 'rounded-xl',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 2,
          arrows: true,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: false,
        },
      },
    ],
  };
  return <Slider {...settings}>{children}</Slider>;
}

SimpleSlider.propTypes = {
  children: PropTypes.array,
};

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
