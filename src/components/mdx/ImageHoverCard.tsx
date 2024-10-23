import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import type { PropsWithChildren } from "react";

interface Props {
  image: string;
  stylesTrigger?: string;
  stylesContent?: string;
}

export default function ImageHoverCard({
  image,
  stylesContent,
  stylesTrigger,
  children,
}: PropsWithChildren<Props>) {
  return (
    <HoverCard>
      <HoverCardTrigger className={stylesTrigger}>{children}</HoverCardTrigger>
      <HoverCardContent className={stylesContent}>
        <div className="relative w-full h-full">
          <img
            width={320}
            height={240}
            src={image}
            alt="Image"
            className="object-cover object-center rounded-lg justify-self-center"
          />
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
