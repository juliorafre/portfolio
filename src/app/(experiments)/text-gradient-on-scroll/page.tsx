"use client";
import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import TextGradientOnScroll from "@/modules/text-gradient-on-scroll/text-gradient-on-scroll";
import TextGradientOnScrollWithMotion from "@/modules/text-gradient-on-scroll/text-gradient-on-scroll-with-motion";

const TextGradientOnScrollScreen = () => {
  const [isWithMotion, setIsWithMotion] = useState<string>("motion");

  return (
    <div>
      <div className="flex items-center justify-center p-2">
        <ToggleGroup
          onValueChange={(value) => setIsWithMotion(value)}
          type="single"
          value={isWithMotion}
        >
          <ToggleGroupItem value="motion">React Motion</ToggleGroupItem>
          <ToggleGroupItem value="gsap">GSAP</ToggleGroupItem>
        </ToggleGroup>
      </div>
      {isWithMotion === "motion" ? (
        <TextGradientOnScrollWithMotion />
      ) : (
        <TextGradientOnScroll />
      )}
    </div>
  );
};

export default TextGradientOnScrollScreen;
