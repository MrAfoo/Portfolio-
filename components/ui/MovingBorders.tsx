"use client";

import React, {
  ElementType,
  HTMLAttributes,
  ReactNode,
  useRef,
} from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

// Button Props
interface ButtonProps extends Omit<HTMLAttributes<HTMLElement>, 'as'> {
  borderRadius?: string;
  children?: ReactNode;
  as?: ElementType;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
}

// Button Component
export function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: ButtonProps) {
  return React.createElement(
    Component,
    {
      className: cn(
        "bg-transparent relative text-xl p-[1px] overflow-hidden md:col-span-2 md:row-span-1",
        containerClassName
      ),
      style: { borderRadius },
      ...otherProps
    },
    [
      <div
        key="border"
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-20 w-20 opacity-[0.8] bg-[radial-gradient(#CBACF9_40%,transparent_60%)]",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>,
      <div
        key="content"
        className={cn(
          "relative bg-slate-900/[0.] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    ]
  );
}

// MovingBorder Props
interface MovingBorderProps extends HTMLAttributes<SVGSVGElement> {
  children: ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
}

// MovingBorder Component
export const MovingBorder = ({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}: MovingBorderProps) => {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue(0);
  
  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(progress, (val) =>
    pathRef.current?.getPointAtLength(val)?.x ?? 0
  );
  
  const y = useTransform(progress, (val) =>
    pathRef.current?.getPointAtLength(val)?.y ?? 0
  );
  
  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;
  
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
