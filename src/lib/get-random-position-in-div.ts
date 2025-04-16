/**
 * Returns a random (x, y) coordinate within the content area of a div, with optional padding.
 * Optionally returns a style object for inline CSS usage.
 * @param container - React ref to an HTMLDivElement
 * @param padding - Optional padding (in pixels) to keep away from the edges (default: 0)
 * @param asStyle - If true, returns { left, top, position: 'absolute' } for inline styles
 * @returns { x: number, y: number } or { left: number, top: number, position: 'absolute' }
 */
import { randomBetween } from "@/lib/utils";

export interface GetRandomPositionInDivProps {
  container: React.RefObject<HTMLDivElement | null>;
  padding?: number;
  asStyle?: boolean;
}

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

const getRandomPositionInDiv = ({ container, padding = 0, asStyle = false }: GetRandomPositionInDivProps) => {

  if (!container.current) {
    return { x: 0, y: 0 };
  }
  const rect = container.current.getBoundingClientRect();
  // Clamp padding to avoid negative or overly large values
  const safePadding = clamp(padding, 0, Math.min(rect.width, rect.height) / 2);
  const minX = safePadding;
  const minY = safePadding;
  const maxX = rect.width - safePadding;
  const maxY = rect.height - safePadding;

  if (maxX <= minX || maxY <= minY) {
    return { x: 0, y: 0 };
  }

  const x = randomBetween(minX, maxX);
  const y = randomBetween(minY, maxY);

  if (asStyle) {
    return {
      left: x,
      bottom: y,
      position: 'absolute' as const
    };
  }
  return { x, y };
};

export default getRandomPositionInDiv;


 {/* 
  
  Example
  
  <div ref={containerExampleRef} className="relative h-[400px] w-full bg-red-100 p-[20px]">
        <div
          className={`absolute size-[20px] bg-black`}
          style={getRandomPositionInDiv({
            container: containerExampleRef,
            padding: 10,
            asStyle: true,
          })}
        ></div>
      </div> 
      
      
      */}