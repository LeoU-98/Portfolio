import PropTypes from 'prop-types';

function TechIcon({ icon }) {
  return (
    <li className="block size-11 cursor-pointer rounded-xl border-2 border-solid border-violet-700 p-1">
      <img
        src={icon}
        alt="icon lol"
        className="w-full animate-bounce duration-150"
      />
    </li>
  );
}

export default TechIcon;

TechIcon.propTypes = {
  icon: PropTypes.string,
};
