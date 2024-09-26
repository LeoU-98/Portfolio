import myImage from '../images/myPic/5.jpg';
// import myImage from './images/myPic/4.jpg';
// import myImage from './images/myPic/3.jpg';
// import myImage from './images/myPic/2.jpg';
// import myImage from './images/myPic/1.png';
import bannerBg from '../assets/img/banner-bg.png';

import TechIcon from './TechIcon';
import html from '../images/icons/html.png';
import css from '../images/icons/css3.png';
import js from '../images/icons/javascript.png';
import sass from '../images/icons/sass.png';
import tailwind from '../images/icons/tailwind.png';
import react from '../images/icons/react.png';

function Hero() {
  return (
    <section
      className="px-4 pb-[70px] pt-12 md:pt-[100px] lg:pt-[150px]"
      id="home"
      style={{
        backgroundImage: `url(${bannerBg})`,
      }}
    >
      <div className="container mx-auto flex flex-col items-center gap-10 py-12 text-white sm:flex-row sm:gap-4 lg:justify-between lg:gap-20 xl:max-w-screen-xl">
        <div className="flex flex-col items-center sm:items-start">
          <h1
            className={` ${window.innerWidth > 640 && 'animate__animated animate__bounceInDown animate__slow'} mt-8 h-12 text-3xl sm:text-2xl md:h-14 md:text-4xl lg:text-5xl 2xl:h-16`}
          >
            I&apos;m Mohamed Hamdy
          </h1>
          <p
            className={`${window.innerWidth > 640 && 'animate__animated animate__bounceInLeft animate__slow'} lg max-w-[500px] text-balance text-center text-sm sm:text-left md:mt-3 lg:text-lg`}
          >
            I am an Engineering Student , Who Studied at Facutly of Engineering
            Helwan University , I Have Studied in Computer & System Department
          </p>
          {/* <div className="mt-5 max-w-[400px] rounded-xl bg-[#121212] p-2">
            <h2 className="text-sm">Education :</h2>
            <p className="flex items-center justify-between gap-5 text-nowrap text-sm">
              <span>Bachelor Degree of CS Engineering Helwan University</span>
              <span className="text-xs text-yellow-500">2019 - 2023</span>
            </p>
          </div> */}
          <div className="mt-5 flex gap-5">
            <a
              href="asdfasd"
              download
              className="rounded-xl bg-violet-700 px-4 py-2 text-xs font-semibold text-white duration-300 hover:bg-black active:translate-y-2 sm:text-sm"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="rounded-xl bg-violet-700 px-4 py-2 text-xs font-semibold text-white duration-300 hover:bg-black active:translate-y-2 sm:text-sm"
            >
              Contact Me
            </a>
          </div>
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
      </div>
    </section>
  );
}

export default Hero;

// function Hero() {
//   return (
//     <div className="bg-[url('./banner-bg.png')] px-4 pb-[70px] pt-12 md:pt-[100px] lg:pt-[150px]">
//       <div className="container mx-auto flex flex-col items-center gap-10 py-12 text-white sm:flex-row lg:justify-between lg:gap-20 xl:max-w-screen-xl">
//         <div className="">
//           <h1 className="typed-out mt-8 h-12 text-3xl sm:text-2xl md:h-14 md:text-4xl lg:text-5xl 2xl:h-16">
//             I&apos;m Mohamed Hamdy
//           </h1>
//           <p className="max-w-[410px] text-sm md:mt-3 lg:text-lg">
//             I am an Engineering Student , Who Studied at Facutly of Engineering
//             Helwan University , I Have Studied in Computer & System Department
//           </p>
//         </div>
//         <div className="grid max-w-80 grid-cols-[auto_auto_auto] gap-4">
//           <div className="col-start-2 h-72 w-56 overflow-hidden rounded-xl sm:h-80 sm:w-64">
//             <img src={myImage} alt="my profile pic" className="h-full w-full" />
//           </div>

//           <ul className="col-start-1 row-start-1 flex flex-col-reverse gap-4">
//             <TechIcon icon={react} />
//             <TechIcon icon={sass} />
//             <TechIcon icon={tailwind} />
//           </ul>

//           <ul className="col-start-2 row-start-2 flex gap-4">
//             <TechIcon icon={js} />
//             <TechIcon icon={css} />
//             <TechIcon icon={html} />
//           </ul>
//         </div>
//       </div>{' '}
//     </div>
//   );
// }

// export default Hero;
