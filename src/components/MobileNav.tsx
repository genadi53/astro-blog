import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { type PropsWithChildren } from "react";

export default function MobileNav({ children }: PropsWithChildren) {
  return (
    <Sheet>
      <SheetTrigger className="flex sm:hidden">
        <Menu className="size-6" />
      </SheetTrigger>
      <SheetContent
        className="rounded-b-lg bg-background py-4 container text-foreground shadow-xl"
        side={"top"}
      >
        {children}
      </SheetContent>
    </Sheet>
  );
}
