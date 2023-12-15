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
    <>
      {onDisplay && (
        <div className="fixed h-screen w-full z-50 flex items-start bg-black bg-opacity-50 overflow-y-scroll scrollbar scrollbar-track-white">
          <div
            className={`transform ${
              onDisplay ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-1000 pr-1 w-60 bg-white h-full flex flex-col`}
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

            <div className="overflow-y-scroll mb-1 scrollbar-thin scrollbar-thumb-neutral-400 scrollbar-thumb-rounded-full flex-grow">
              {children}
              <div className="flex py-3 mx-3.5 px-3 flex-col gap-2">
                <div className="flex flex-wrap">
                  {aboutLinks.map((link) => (
                    <a
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
        </div>
      )}
    </>
  );
}

export default ExpandSidebar;
