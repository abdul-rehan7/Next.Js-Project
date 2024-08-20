"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `Building Digital Products, Brands and Experience`;
const paragraph = `Hi, I'm Rehan`

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect className="lg:text-5xl text-3xl" words={words} para={paragraph} />;
}
