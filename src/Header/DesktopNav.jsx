function DesktopNav() {
  return (
    <ul className="hidden items-center gap-8 md:flex">
      <li>
        <a href="/home" className="menu-item relative pb-1">
          Home
        </a>
      </li>
      <li>
        <a href="/Skills" className="menu-item relative pb-1">
          Skills
        </a>
      </li>
      <li>
        <a href="/Work" className="menu-item relative pb-1">
          Work Experience
        </a>
      </li>
      <li>
        <a href="/Contact" className="menu-item relative pb-1">
          Contact Me
        </a>
      </li>
      <li className="fourth cursor-pointer rounded-lg bg-black px-10 py-2 text-center">
        {/* <li className="cursor-pointer rounded-lg bg-gradient-to-r from-violet-600 to-violet-900 px-10 py-2 text-center hover:bg-gradient-to-l"> */}
        <a href="/Hire">Hire Me</a>
      </li>
    </ul>
  );
}

export default DesktopNav;
