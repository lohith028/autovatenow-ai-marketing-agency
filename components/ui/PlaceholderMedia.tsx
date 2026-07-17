import { ImageIcon, Video } from "lucide-react";
import clsx from "clsx";

type PlaceholderMediaProps = {
  label: string;
  type?: "image" | "video";
  aspectRatio?: "16/9" | "4/3" | "1/1" | "9/16" | "3/2";
  className?: string;
};

export default function PlaceholderMedia({
  label,
  type = "image",
  aspectRatio = "16/9",
  className,
}: PlaceholderMediaProps) {
  const aspectMap = {
    "16/9": "aspect-video",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
    "9/16": "aspect-[9/16]",
    "3/2": "aspect-[3/2]",
  };
  return (
    <div
      className={clsx(
        "placeholder-media rounded-2xl",
        aspectMap[aspectRatio],
        className
      )}
    >
      <div className="flex flex-col items-center gap-2">
        {type === "video" ? (
          <Video size={28} className="text-brand-blue/40" />
        ) : (
          <ImageIcon size={28} className="text-brand-blue/40" />
        )}
        <span className="text-xs text-text-muted font-medium text-center px-4 leading-relaxed">
          {label}
        </span>
      </div>
    </div>
  );
}
