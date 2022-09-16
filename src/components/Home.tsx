import React from "react";
import topImage from "../images/illustration-hero.svg";
import { Button } from "../atoms/button";
import { Description } from "../atoms/description";

export default function Home() {
  return (
    <div className="md:flex md:items-center">
      <div className="relative mt-12 after:absolute after:content-[''] after:bg-soft-blue after:h-4/5 after:w-4/5 after:top-0 after:right-0 after:mt-16 after:-z-10 after:rounded-l-full md:hidden">
        <img src={topImage} alt="illustration for bookmark" />
      </div>

      <div className="px-6 text-center pt-12 md:basis-1/2 md:text-left md:pl-32 md:pr-28">
        <h1 className="text-very-dark-blue text-3xl md:text-5xl font-medium pb-5">
          A Simple Bookmark Manager
        </h1>
        <Description addClassName={null}>
          A clean and dimple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try for free.
        </Description>
        <div className="pt-6">
          <Button
            bgcolor={"bg-soft-blue hover:bg-white"}
            textcolor={"text-white hover:text-soft-blue"}
            width={"mx-2 border-2 border-soft-blue"}
          >
            Get it on Chrome
          </Button>
          <Button
            bgcolor={"bg-neutral-50"}
            textcolor={"text-slate-600"}
            width={"mx-2 border-2 border-white hover:border-very-dark-blue"}
          >
            Get it on Firefox
          </Button>
        </div>
      </div>

      <div className="hidden md:block relative mt-12 after:absolute after:content-[''] after:bg-soft-blue after:h-4/5 after:w-4/5 after:top-0 after:right-0 after:mt-16 after:-z-10 after:rounded-l-full md:basis-1/2">
        <img src={topImage} alt="illustration for bookmark" />
      </div>
    </div>
  );
}
