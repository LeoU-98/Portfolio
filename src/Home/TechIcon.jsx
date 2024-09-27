import PropTypes from 'prop-types';

function TechIcon({ icon }) {
  return (
    <li className="block size-11 rounded-xl border-[0.5px] border-solid border-violet-700 p-1">
      <img
        src={icon}
        alt="icon lol"
        className="w-full duration-300 hover:-translate-y-2"
        // className="w-full ![animation-duration:_1.8s]  sm:animate-spin"
      />
    </li>
  );
}

export default TechIcon;

TechIcon.propTypes = {
  icon: PropTypes.string,
};
