"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  para,
  className,
  filter = true,
  duration = 1,
}: {
  words: string;
  para: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [wordsScope, animateWords] = useAnimate();
  const [paraScope, animatePara] = useAnimate();
  let wordsArray = words.split(" ");
  let paraArray = para.split(" ");

  useEffect(() => {
    animateWords(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 3,
        delay: stagger(0.3),
      }
    );
  }, [wordsScope.current]);

  useEffect(() => {
    animatePara(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.09),
      }
    );
  }, [paraScope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={wordsScope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={` ${
                idx > 3 ? "text-[var(--third)]" : "text-black"
              } font-extrabold lg:text-7xl text-4xl leading-tight tracking-wide  opacity-0`}
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  const renderPara = () => {
    return (
      <motion.div className="w-[80vw] lg:w-[45vw]" ref={paraScope}>
        {paraArray.map((para, idx) => {
          return (
            <motion.span
              key={para + idx}
              className="font-light lg:text-2xl text-xs leading-snug tracking-wide text-black opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {para}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="flex items-start justify-start flex-col space-y-7  ">
          <div>
            {renderWords()}
            {renderPara()}
          </div>
          <HoverBorderGradient />
        </div>
      </div>
    </div>
  );
};
