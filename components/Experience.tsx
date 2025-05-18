
"use client";
import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 px-4 w-full max-w-[1440px] mx-auto">
      <h1 className="heading text-center">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex flex-col lg:flex-row lg:items-center p-4 md:p-6 lg:p-10 gap-4">
              <img
                src={card.thumbnail}
                alt={card.title}
                className="w-16 md:w-20 lg:w-32 object-contain"
              />
              <div className="lg:ms-5 mt-4 lg:mt-0">
                <h1 className="text-start text-lg md:text-xl lg:text-2xl font-bold text-white">
                  {card.title}
                </h1>
                <p className="text-start text-white mt-3 font-medium text-sm md:text-base">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
