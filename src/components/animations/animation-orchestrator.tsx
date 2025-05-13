'use client';

import { useState, useEffect, HTMLAttributes, ReactNode } from 'react';

interface AnimationOrchestratorProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  animationClassName?: string; // The class that triggers the animation
  sessionKey?: string; // Key for sessionStorage
}

/* 
@description: This component is used to orchestrate the animations of the page.
@param {ReactNode} children - The children of the component.
@param {string} className - The class name of the component.
@param {string} animationClassName - The class name of the animation.
@param {string} sessionKey - The key of the session storage.
*/

export function AnimationOrchestrator({
  children,
  className,
  animationClassName = 'orchestration',
  sessionKey = 'pageAnimated',
  ...props
}: AnimationOrchestratorProps) {
  const [currentAnimationClass, setCurrentAnimationClass] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Ensure sessionStorage is available
      if (sessionStorage.getItem(sessionKey) !== 'true') {
        setCurrentAnimationClass(animationClassName);
        sessionStorage.setItem(sessionKey, 'false');
      }
    }
  }, [animationClassName, sessionKey]); // Depend on these props in case they change

  const combinedClassName = `${currentAnimationClass} ${className || ''}`.trim();

  return (
    <div className={combinedClassName} {...props}>
      {children}
    </div>
  );
}
