import myImage from '../images/myPic/5.jpg';
// import myImage from './images/myPic/4.jpg';
// import myImage from './images/myPic/3.jpg';
// import myImage from './images/myPic/2.jpg';
// import myImage from './images/myPic/1.png';

import TechIcon from './TechIcon';
import html from '../images/icons/html.png';
import css from '../images/icons/css3.png';
import js from '../images/icons/javascript.png';
import sass from '../images/icons/sass.png';
import tailwind from '../images/icons/tailwind.png';
import react from '../images/icons/react.png';

function Hero() {
  return (
    <div className="bg-[url('./banner-bg.png')] px-4 pb-[70px] pt-12 md:pt-[100px] lg:pt-[150px]">
      <div className="container mx-auto flex flex-col items-center gap-10 py-12 text-white sm:flex-row lg:justify-between lg:gap-20 xl:max-w-screen-xl">
        <div className="">
          <h1 className="typed-out mt-8 h-12 text-3xl sm:text-2xl md:h-14 md:text-4xl lg:text-5xl 2xl:h-16">
            I&apos;m Mohamed Hamdy
          </h1>
          <p className="max-w-[410px] text-sm md:mt-3 lg:text-lg">
            I am an Engineering Student , Who Studied at Facutly of Engineering
            Helwan University , I Have Studied in Computer & System Department
          </p>
        </div>
        <div className="grid max-w-80 grid-cols-[auto_auto_auto] gap-4">
          <div className="col-start-2 h-72 w-56 overflow-hidden rounded-xl sm:h-80 sm:w-64">
            <img src={myImage} alt="my profile pic" className="h-full w-full" />
          </div>

          <ul className="col-start-1 row-start-1 flex flex-col-reverse gap-4">
            <TechIcon icon={react} />
            <TechIcon icon={sass} />
            <TechIcon icon={tailwind} />
          </ul>

          <ul className="col-start-2 row-start-2 flex gap-4">
            <TechIcon icon={js} />
            <TechIcon icon={css} />
            <TechIcon icon={html} />
          </ul>
        </div>
      </div>{' '}
    </div>
  );
}

export default Hero;
