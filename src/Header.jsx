import { useState } from 'react';
import DesktopNav from './ui/DesktopNav';
import ListButton from './ui/ListButton';
import MobileNav from './ui/MobileNav';
import Xbutton from './ui/Xbutton';

function Header() {
  const [isMobNavOpen, setIsMobNavOpen] = useState();

  return (
    <header className="backdrop-blur-2lx container relative mx-auto flex h-16 items-center justify-between rounded-xl bg-slate-100 bg-opacity-10 px-4 text-white backdrop-filter xl:max-w-screen-xl">
      <div>LeoU The G</div>
      <nav className="">
        <DesktopNav />

        {isMobNavOpen && <MobileNav />}
      </nav>

      <div className="md:hidden">
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
