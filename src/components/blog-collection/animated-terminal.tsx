"use client";

import { useEffect, useState } from "react";
import { Terminal, TerminalLine } from "./terminal";

interface AnimatedTerminalProps {
  commands: Array<{
    delay: number;
    content: React.ReactNode;
  }>;
  title?: string;
}

export function AnimatedTerminal({ commands, title }: AnimatedTerminalProps) {
  const [visibleCommands, setVisibleCommands] = useState<number>(0);

  useEffect(() => {
    if (visibleCommands < commands.length) {
      const timer = setTimeout(() => {
        setVisibleCommands((prev) => prev + 1);
      }, commands[visibleCommands]?.delay || 1000);

      return () => clearTimeout(timer);
    }
  }, [visibleCommands, commands]);

  return (
    <Terminal title={title}>
      {commands.slice(0, visibleCommands).map((command, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: TODO resolve key
        <TerminalLine key={index} number={index + 1}>
          {command.content}
          {index === visibleCommands - 1 && (
            <span className="terminal-cursor ml-1" />
          )}
        </TerminalLine>
      ))}
    </Terminal>
  );
}
