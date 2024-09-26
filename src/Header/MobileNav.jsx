import propTypes from 'prop-types';
import 'animate.css';

function MobileNav({ onNavClick }) {
  return (
    <div>
      <ul className="animate__animated animate__fadeInLeft animate__fast absolute left-0 top-full z-50 mt-2 flex h-[calc(100vh-64px)] w-full flex-col items-center justify-start gap-10 rounded-lg bg-[#121212] px-6 pt-12 text-xl text-indigo-950 backdrop-blur sm:hidden">
        <li className="block w-full text-center">
          <a
            onClick={() => onNavClick(false)}
            href="#home"
            className="relative block pb-1 text-white"
          >
            Home
          </a>
        </li>
        <li className="block w-full text-center">
          <a
            onClick={() => onNavClick(false)}
            href="#skills"
            className="relative block pb-1 text-white"
          >
            Skills
          </a>
        </li>
        <li className="block w-full text-center">
          <a
            onClick={() => onNavClick(false)}
            href="#experience"
            className="relative block pb-1 text-white"
          >
            Work Experience
          </a>
        </li>
        <li className="block w-full text-center">
          <a
            onClick={() => onNavClick(false)}
            href="#projects"
            className="relative block pb-1 text-white"
          >
            Projects
          </a>
        </li>
        <li className="rounded-lg bg-gradient-to-r from-violet-600 to-violet-900 px-10 py-2 text-center text-white">
          <a onClick={() => onNavClick(false)} href="#contact">
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MobileNav;

MobileNav.propTypes = {
  onNavClick: propTypes.func,
};
