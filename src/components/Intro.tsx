// import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function IntroSection() {
  return (
    <div
      id="intro"
      className="bg-background min-h-[calc(100dvh-200px)] flex items-center"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-primary">
              Unlock the Power of Words
            </h1>
            <p className="text-xl text-muted-foreground">
              Dive into a world of captivating stories, insightful articles, and
              thought-provoking ideas. Our blog is a sanctuary for curious minds
              and passionate readers.
            </p>
            <Button
              size="lg"
              className="group"
              onClick={() => {
                const postSection = document.getElementById("recent-posts");
                if (postSection) {
                  postSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Start Reading
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          <div
            // initial={{ opacity: 0, scale: 0.8 }}
            // animate={{ opacity: 1, scale: 1 }}
            // transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[400px] sm:h-[500px] rounded-lg overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80"
              alt="Stack of books"
              className="object-cover w-full h-full"
              //   initial={{ scale: 1.2 }}
              //   animate={{ scale: 1 }}
              //   transition={{ duration: 10, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
