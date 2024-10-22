import { cn } from "@/lib/cn";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { CircleUser, Mail } from "lucide-react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { GITHUB_PROFILE, LINKEDIN_PROFILE, PORTFOLIO_ADDRESS } from "@/consts";

export function HoverLinkPortfolio() {
  return (
    <HoverCard openDelay={250} closeDelay={250}>
      <HoverCardTrigger
        className="hover:text-orange-500"
        href={PORTFOLIO_ADDRESS}
      >
        <span className="sr-only">My Website</span>
        <CircleUser className="size-6" />
      </HoverCardTrigger>
      <HoverCardContent className={cn("w-fit h-fit p-1.5 text-base")}>
        Checkout my website
      </HoverCardContent>
    </HoverCard>
  );
}

export function HoverLinkGitHub() {
  return (
    <HoverCard openDelay={250} closeDelay={250}>
      <HoverCardTrigger className="hover:text-orange-500" href={GITHUB_PROFILE}>
        <>
          <span className="sr-only">My GitHub profile</span>
          <GitHubLogoIcon className="size-6" aria-hidden />
        </>
      </HoverCardTrigger>
      <HoverCardContent className={cn("w-fit h-fit p-1.5 text-base")}>
        My Github Profile
      </HoverCardContent>
    </HoverCard>
  );
}

export function HoverLinkMail() {
  return (
    <HoverCard openDelay={250} closeDelay={250}>
      <HoverCardTrigger
        className="hover:text-orange-500"
        href="mailto:genadi.tsolov@gmail.com"
      >
        <>
          <span className="sr-only">Send me an email</span>
          <Mail className="size-6" />
        </>
      </HoverCardTrigger>
      <HoverCardContent className={cn("w-fit h-fit p-1.5 text-base")}>
        Send me an email
      </HoverCardContent>
    </HoverCard>
  );
}

export function HoverLinkLinkedIn() {
  return (
    <HoverCard openDelay={250} closeDelay={250}>
      <HoverCardTrigger
        className="hover:text-orange-500"
        href={LINKEDIN_PROFILE}
      >
        <>
          <span className="sr-only">Linkedin Profile</span>
          <LinkedInLogoIcon className="size-6" aria-hidden />
        </>
      </HoverCardTrigger>
      <HoverCardContent className={cn("w-fit h-fit p-1.5 text-base")}>
        My LinkedIn Profile
      </HoverCardContent>
    </HoverCard>
  );
}
