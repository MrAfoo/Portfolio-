

import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative overflow-hidden">
      {/* === Spotlights === */}
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight
        className="h-[80vh] w-[50vw] top-10 left-full"
        fill="purple"
      />
      <Spotlight
        className="left-80 top-28 h-[80vh] w-[50vw]"
        fill="blue"
      />

      {/* === Grid Background Layer === */}
      <div
        className="h-screen w-full absolute top-0 left-0 flex items-center justify-center
          dark:bg-black-100 bg-black-100 dark:bg-grid-white/[0.03] bg-grid-black-100/[0.03] z-0"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center 
          dark:bg-black-100  bg-black-100 
          [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* === Hero Content === */}
      <div className="flex justify-center relative z-10 mt-20 px-4 text-center">
        <div className="max-w-[90vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center">
          <p className="uppercase tracking-widest text-xs text-blue-100 mb-4">
            Dynamic Web Magic with Next.js
          </p>

          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl leading-snug font-semibold mb-6"
          />

          <p className="md:tracking-wider mb-8 text-sm md:text-lg lg:text-2xl text-white-200">
            Hi! I&apos;m Affan, a Frontend Developer based in Pakistan.
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
