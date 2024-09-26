import { useState } from 'react';
import DesktopNav from './DesktopNav';
import ListButton from './ListButton';
import MobileNav from './MobileNav';
import Xbutton from './Xbutton';
import logo from '../images/logo.svg';
// import logo from '../images/logo.png';

function Header() {
  const [isMobNavOpen, setIsMobNavOpen] = useState();
  return (
    <header className="container absolute left-1/2 top-0 flex h-16 -translate-x-1/2 items-center rounded-xl bg-slate-100 bg-opacity-10 px-4 text-white backdrop-filter sm:px-10 xl:max-w-screen-xl">
      <div className="sm:hidden">
        <img src={logo} alt="Marketing Logo" className="h-14 w-16" />
      </div>
      <nav className="w-full">
        <DesktopNav />
        {isMobNavOpen && <MobileNav onNavClick={setIsMobNavOpen} />}
      </nav>

      <div className="sm:hidden">
        {isMobNavOpen ? (
          <Xbutton onNavClick={setIsMobNavOpen} />
        ) : (
          <ListButton onNavClick={setIsMobNavOpen} />
        )}
      </div>
    </header>
  );
}

export default Header;
