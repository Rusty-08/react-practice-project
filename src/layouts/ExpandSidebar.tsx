import React, { ReactNode, useRef, useState } from "react";
import Button from "../components/Button";
import { Copyright, Menu, PlaySquare } from "lucide-react";
import { pages } from "../data/sidebar/SidebarCategories";
import SidebarButtons from "./SidebarButtons";
import { aboutLinks, policyLinks } from "../data/sidebar/AdditionalLinks";

type Props = {
  onDisplay: boolean;
  setDisplay: () => void;
  children: ReactNode;
};

function ExpandSidebar({ onDisplay, setDisplay, children }: Props) {
  return (
    <div
      className={`transform ${
        onDisplay ? "translate-x-0" : "-translate-x-full"
      } bg-white pr-1 fixed z-[99] left-0 w-60 transition-transform duration-300 ease-in-out h-full flex flex-col`}
    >
      <div className="h-header flex-shrink-0 px-4 flex items-center justify-start md:gap-3 gap-2">
        <Button onClick={setDisplay} variant="ghost" size="icon">
          <Menu strokeWidth={1} />
        </Button>
        <a href="/" className="flex items-center gap-2">
          <PlaySquare className="text-red-100 w-7 h-7 fill-[#FF0000]" />
          <h1 className="text-lg font-bold text-neutral-800">TubeTube</h1>
        </a>
      </div>
      <div className="sidebar overflow-y-scroll mb-1 scrollbar-thin scrollbar-thumb-rounded-full transition-all duration-300 ease-linear flex-grow">
        {children}
        <div className="flex py-3 mx-3.5 px-3 flex-col gap-2">
          <div className="flex flex-wrap">
            {aboutLinks.map((link) => (
              <a
                key={link}
                className="font-medium mr-2 text-secondary-text text-[0.85rem]"
                href={`${link.split(" ").join("").toLowerCase()}`}
              >
                {link}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap">
            {policyLinks.map((link) => (
              <a
                className="font-medium mr-2 text-secondary-text text-[0.85rem]"
                href={`${link.split(" ").join("").toLowerCase()}`}
              >
                {link}
              </a>
            ))}
          </div>
          <span className="flex text-secondary-text gap-1 text-xs items-center">
            <Copyright className="w-3" strokeWidth={1} />
            {`${new Date().getFullYear()} Google LLC`}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ExpandSidebar;
