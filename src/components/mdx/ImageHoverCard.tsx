import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/cn";
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
      <HoverCardTrigger className={cn(stylesTrigger)}>
        {children}
      </HoverCardTrigger>
      <HoverCardContent className={cn("py-0", stylesContent)}>
        <div className="relative w-full h-full">
          <img
            width={320}
            height={240}
            src={image}
            alt="hover card"
            className="object-cover object-center rounded-lg justify-self-center"
          />
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
