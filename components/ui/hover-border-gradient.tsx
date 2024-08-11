"use client";
import React, { useState, useEffect, useRef } from "react";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    containerClassName?: string;
    className?: string;
    duration?: number;
    clockwise?: boolean;
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(30% 50% at 50% 0%, hsl(0, 0%, 0%) 0%, rgba(0, 0, 0, 0) 100%)", // Increase the width (from 20.7% to 30%)
    LEFT: "radial-gradient(25% 43.1% at 0% 50%, hsl(0, 0%, 0%) 0%, rgba(0, 0, 0, 0) 100%)", // Increase the width (from 16.6% to 25%)
    BOTTOM:
      "radial-gradient(30% 50% at 50% 100%, hsl(0, 0%, 0%) 0%, rgba(0, 0, 0, 0) 100%)", // Increase the width (from 20.7% to 30%)
    RIGHT:
      "radial-gradient(25% 41.2% at 100% 50%, hsl(0, 0%, 0%) 0%, rgba(0, 0, 0, 0) 100%)", // Increase the width (from 16.2% to 25%)
  };
  
  const highlight =
    "radial-gradient(80% 181.15942028985506% at 50% 50%, #000000 0%, rgba(0, 0, 0, 0) 100%)"; // Increase the width (from 75% to 80%)
  

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered]);
  return (
    <Tag
      onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) => {
        setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-xl   border-2  content-center bg-black/20 hover:bg-black/10 transition duration-500 dark:bg-white/20 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "w-auto text-black lg:text-xl text-base font-normal  z-10 bg-white px-6 py-3 rounded-xl",
          className
        )}
      >
        Let&apos;s Connect
      </div>
      <motion.div
        className={cn(
          "flex-none inset-0 overflow-hidden absolute z-0 rounded-xl"
        )}
        style={{
          filter: "blur(2px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration ?? 1 }}
      />
      <div className="bg-black absolute z-1 flex-none inset-[2px] rounded-xl" />
    </Tag>
  );
}
