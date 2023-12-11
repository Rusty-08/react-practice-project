import React, { ReactNode, useRef, useState } from "react";
import Button from "../components/Button";
import { Menu, PlaySquare } from "lucide-react";
import { pages } from "../data/SidebarCategories";
import SidebarButtons from "./SidebarButtons";

type Props = {
  onDisplay: boolean;
  setDisplay: () => void;
  children: ReactNode;
};

function ExpandSidebar({ onDisplay, setDisplay, children }: Props) {
  return (
    <>
      {onDisplay && (
        <div className="fixed h-screen w-full z-50 flex items-start bg-black bg-opacity-50 overflow-y-scroll">
          <div
            className={`transform ${
              onDisplay ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-1000 w-60 bg-white h-full flex flex-col`}
          >
            <div className="h-header flex-shrink-0 px-4 flex items-center justify-start gap-3">
              <Button onClick={setDisplay} variant="ghost" size="icon">
                <Menu strokeWidth={1} />
              </Button>
              <a href="/" className="flex items-center gap-2">
                <PlaySquare className="text-red-100 w-7 h-7 fill-[#FF0000]" />
                <h1 className="text-lg font-bold text-neutral-800">TubeTube</h1>
              </a>
            </div>
            <div className="overflow-y-auto flex-grow pb-8">{children}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default ExpandSidebar;
