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
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 800 800"
      opacity="0.33"
      preserveAspectRatio="xMidYMid slice"
    >
      <g strokeWidth="0.75" stroke="hsl(261, 60%, 38%)" fill="none">
        {Array.from({ length: numberOfSquares }, (_, i) =>
          Array.from({ length: numberOfSquares }, (_, j) => <rect key={`${i}-${j}`} width={squareSize} height={squareSize} x={j * squareSize} y={i * squareSize} />)
        )}
      </g>
    </svg>
  );
};

const Spacer = ({ url, vHSize, title, numberOfSquares }: SpacerProps) => {
  return (
    <div className='w-full px-12'>
      <div className={`relative h-[${vHSize}vh] w-full p-20 grid place-content-center overflow-hidden border rounded-2xl`}>
        <GridPattern numberOfSquares={numberOfSquares} />
        <p className="absolute top-0 left-0 m-4 border px-2 py-1 backdrop-blur-xs rounded-full">Spacer component</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="relative z-10 backdrop-blur-xs px-2 text-sm py-1 rounded-full border flex items-center gap-2 hover:bg-white/10 transition-colors">
          Inspiration: {title}
          <ExternalLinkIcon size={16} />
        </a>
      </div>
    </div>
  );
};

export default Spacer;
