import { ArrowUpRightIcon } from "lucide-react";
import { cn } from "@/lib";

type BadgeType = "draft" | "new-release" | "demo";

const badgeTextMap: Record<BadgeType, string> = {
  draft: "Draft",
  "new-release": "New Release",
  demo: "Demo",
};

const badgeStyles: Record<BadgeType, string> = {
  draft: "bg-yellow-100 text-yellow-800",
  "new-release": "bg-green-100 text-green-800",
  demo: "bg-gradient-rainbow-light text-neutral-800",
};

const ProjectBadge = ({ type }: { type: BadgeType }) => {
  if (!badgeTextMap[type]) {
    return null;
  }

  if (type === "new-release") {
    return (
      <div className="flex items-center justify-center rounded-md bg-[#4D585D] px-2.5 py-1">
        <span className="flex items-center text-sm text-white">
          New release
        </span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-md py-1 pr-1 pl-2",
        badgeStyles[type],
      )}
    >
      <span className="flex items-center text-sm">
        {badgeTextMap[type]}
        {type === "demo" && (
          <ArrowUpRightIcon className="inline-block" size={14} />
        )}
      </span>
    </div>
  );
};

export default ProjectBadge;
