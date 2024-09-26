function DesktopNav() {
  return (
    <ul className="hidden w-full items-center gap-4 sm:flex md:gap-8">
      <li>
        <a href="#home" className="menu-item relative pb-1">
          Home
        </a>
      </li>
      <li>
        <a href="#skills" className="menu-item relative pb-1">
          Skills
        </a>
      </li>
      <li>
        <a href="#experience" className="menu-item relative pb-1">
          Work Experience
        </a>
      </li>
      <li>
        <a href="#projects" className="menu-item relative pb-1">
          Projects
        </a>
      </li>
      <li className="contact-me-hover ml-auto cursor-pointer rounded-lg bg-black px-10 py-2 text-center">
        <a href="#contact">Contact Me</a>
      </li>
    </ul>
  );
}

export default DesktopNav;
