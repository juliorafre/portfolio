import { ExternalLinkIcon } from 'lucide-react';

interface SpacerProps {
  url: string;
  vHSize: number;
  title: string;
  numberOfSquares?: number;
}

interface GridPatternProps {
  numberOfSquares?: number;
}

const GridPattern = ({ numberOfSquares = 20 }: GridPatternProps) => {
  const squareSize = 800 / numberOfSquares; // Calculate square size based on SVG viewBox and number of squares

  return (
    <svg
      className="absolute inset-0 h-full w-full"
      opacity="0.33"
      preserveAspectRatio="xMidYMid slice"
      version="1.1"
      viewBox="0 0 800 800"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g fill="none" stroke="hsl(261, 60%, 38%)" strokeWidth="0.75">
        {Array.from({ length: numberOfSquares }, (_, i) =>
          Array.from({ length: numberOfSquares }, (_, j) => (
            <rect
              height={squareSize}
              key={`${i}-${j}`}
              width={squareSize}
              x={j * squareSize}
              y={i * squareSize}
            />
          ))
        )}
      </g>
    </svg>
  );
};

const Spacer = ({ url, vHSize, title, numberOfSquares }: SpacerProps) => {
  return (
    <div className="w-full px-12">
      <div
        className={`relative h-[${vHSize}vh] grid w-full place-content-center overflow-hidden rounded-2xl border p-20`}
      >
        <GridPattern numberOfSquares={numberOfSquares} />
        <p className="absolute top-0 left-0 m-4 rounded-full border px-2 py-1 backdrop-blur-xs">
          Spacer component
        </p>
        <a
          className="relative z-10 flex items-center gap-2 rounded-full border px-2 py-1 text-sm backdrop-blur-xs transition-colors hover:bg-white/10"
          href={url}
          rel="noopener noreferrer"
          target="_blank"
        >
          Inspiration: {title}
          <ExternalLinkIcon size={16} />
        </a>
      </div>
    </div>
  );
};

export default Spacer;
