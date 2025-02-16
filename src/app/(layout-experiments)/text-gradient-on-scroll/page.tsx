'use client';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

import TextGradientOnScroll from '@/modules/text-gradient-on-scroll/text-gradient-on-scroll';
import { useState } from 'react';
import TextGradientOnScrollWithMotion from '@/modules/text-gradient-on-scroll/text-gradient-on-scroll-with-motion';

const TextGradientOnScrollScreen = () => {
  const [isWithMotion, setIsWithMotion] = useState<string>('motion');

  return (
    <div>
      <div className="flex justify-center items-center p-2">
        <ToggleGroup type="single" value={isWithMotion} onValueChange={(value) => setIsWithMotion(value)}>
          <ToggleGroupItem value="motion">React Motion</ToggleGroupItem>
          <ToggleGroupItem value="gsap">GSAP</ToggleGroupItem>
        </ToggleGroup>
      </div>
      {isWithMotion === 'motion' ? <TextGradientOnScrollWithMotion /> : <TextGradientOnScroll />}
    </div>
  );
};

export default TextGradientOnScrollScreen;
