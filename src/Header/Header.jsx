import { useState } from 'react';
import DesktopNav from './DesktopNav';
import ListButton from './ListButton';
import MobileNav from './MobileNav';
import Xbutton from './Xbutton';

function Header() {
  const [isMobNavOpen, setIsMobNavOpen] = useState();

  return (
    <header className="backdrop-blur-2lx container absolute left-1/2 top-0 flex h-16 -translate-x-1/2 items-center justify-between rounded-xl bg-slate-100 bg-opacity-10 px-4 text-white backdrop-filter xl:max-w-screen-xl">
      {/* <header className="backdrop-blur-2lx  container relative mx-auto flex h-16 items-center justify-between rounded-xl bg-slate-100 bg-opacity-10 px-4 text-white backdrop-filter xl:max-w-screen-xl"> */}
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
