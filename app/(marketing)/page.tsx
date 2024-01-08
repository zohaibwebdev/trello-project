import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import React from "react";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <div
        className={cn(
          "flex justify-center items-center flex-col",
          headingFont.className
        )}
      >
        <div className="flex items-center text-amber-700 bg-amber-100 mb-4 p-4 shadow-sm border rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          No 1 Task Management
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Taskigy helps team move
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 px-4 p-2 text-white rounded-sm pb-4 w-fit">
          work forward.
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        Collaborate, manage projects, and reach new productivity peaks.From high
        rises to the home office, the way your team works is unique - accomplish
        it all with taskify.
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href={"/sign-up"}>Get Taskify Free</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
