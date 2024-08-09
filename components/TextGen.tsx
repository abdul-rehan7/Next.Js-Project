"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `Make Your Website Look 10x Better`;
const paragraph = 'Discover the best solutions tailored to your needs. Our team is dedicated to providing top-notch services and exceptional support.' 

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} para={paragraph} />;
}
