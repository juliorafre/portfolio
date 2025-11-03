"use client";

import { PlayIcon, RefreshCwIcon, StopCircleIcon } from "lucide-react";
import { useEffect, useState } from "react";
import useAnimatedText from "./useAnimatedText";

const textExample =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod et quos in illum laudantium omnis! Sit vitae ipsum pariatur optio corporis, quisquam laborum sunt quaerat doloremque inventore, omnis nobis id! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio sint iste incidunt cupiditate beatae soluta totam saepe. Asperiores odio aspernatur totam, qui exercitationem quisquam architecto repudiandae repellendus non blanditiis labore?id! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio sint iste incidunt cupiditate beatae soluta totam saepe. Asperiores odio aspernatur totam, qui exercitationem quisquam architecto repudiandae repellendus non blanditiis labore?";

const delay = 300;
const characters = 50;

const StreamingText = () => {
  const [text, setText] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const animatedText = useAnimatedText({ text });

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(
        () => {
          setText((prevText) => {
            return (
              prevText +
              textExample.slice(prevText.length, prevText.length + characters)
            );
          });
        },
        isPlaying ? delay : 0,
      );

      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  return (
    <div className="flex w-full flex-col gap-4 px-10">
      <div className="flex w-full flex-row gap-2">
        <button
          type="button"
          className="inline-flex cursor-pointer items-center gap-2 rounded-md bg-slate-200 px-4 py-2 hover:bg-slate-300"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <StopCircleIcon size={16} /> : <PlayIcon size={16} />}
          {isPlaying ? "Stop" : "Start"}
        </button>
        <button
          type="button"
          className="inline-flex cursor-pointer items-center gap-2 rounded-md bg-slate-200 px-4 py-2 hover:bg-slate-300"
          onClick={() => setText("")}
        >
          <RefreshCwIcon size={16} /> Reset
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="h-[400px] max-w-prose overflow-y-auto rounded-xl bg-neutral-100 p-4">
          <p>{text}</p>
        </div>
        <div className="h-[400px] max-w-prose overflow-y-auto rounded-xl bg-neutral-100 p-4">
          <p>{animatedText}</p>
        </div>
      </div>
    </div>
  );
};

export default StreamingText;
