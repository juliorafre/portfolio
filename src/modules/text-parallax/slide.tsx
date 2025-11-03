import { type MotionValue, motion, useTransform } from "motion/react";
import Phrase from "./phrase";

interface SlideProps {
  left: string;
  src: string;
  direction: "left" | "right";
  progress: MotionValue<number>;
}

const Slide = (props: SlideProps) => {
  const direction = props.direction === "left" ? -1 : 1;

  const translateX = useTransform(
    props.progress,
    [0, 1],
    [150 * direction, -150 * direction],
  );

  return (
    <motion.div
      className="relative flex whitespace-nowrap"
      style={{ left: props.left, x: translateX }}
    >
      <Phrase src={props.src} />
      <Phrase src={props.src} />
      <Phrase src={props.src} />
    </motion.div>
  );
};

export default Slide;
