function MobileNav() {
  return (
    <div>
      <ul className="animate-sliding absolute left-0 top-full z-10 mt-2 flex h-[calc(100vh-64px)] w-full flex-col items-center justify-start gap-12 rounded-lg bg-slate-100 bg-opacity-20 px-6 pt-12 text-xl text-indigo-950 backdrop-blur md:hidden">
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
        <li className="rounded-lg bg-gradient-to-r from-violet-600 to-violet-900 px-10 py-2 text-center text-white">
          <a href="/Hire">Hire Me</a>
        </li>
      </ul>
    </div>
  );
}

export default MobileNav;
