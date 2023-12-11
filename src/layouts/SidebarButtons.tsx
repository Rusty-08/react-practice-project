import React, { Children, ComponentProps, ReactNode, useState } from "react";
import Button from "../components/Button";
import { ListVideo, LucideIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

type Category = {
  children?: ReactNode; // header
  component: {
    icon: LucideIcon;
    name: string;
  }[];
  activePage: string;
  setActivePage: (e: string) => void;
  showMore?: () => void;
  isShowMore?: boolean;
} & ComponentProps<"div">;

function SidebarButtons({
  children,
  component,
  activePage,
  className,
  setActivePage,
  showMore,
  isShowMore,
}: Category) {
  return (
    <div
      className={twMerge("flex flex-col py-3 border-b px-3 pe-2", className)}
    >
      {children}
      {component.map((item) => (
        <Button
          key={item.name}
          className={`${
            activePage !== item.name && "hover:bg-secondary"
          } px-3.5 flex gap-5 rounded-lg py-2.5`}
          onClick={
            item.name !== "Show more"
              ? () => setActivePage(item.name)
              : showMore
          }
          variant={activePage == item.name ? "default" : "ghost"}
        >
          <item.icon
            className={`${
              activePage == item.name &&
              item.icon !== ListVideo &&
              "fill-secondary-dark stroke-secondary-hover"
            } w-5 h-5 ${
              isShowMore && item.name == "Show more" && "transform rotate-180"
            }`}
            strokeWidth={
              activePage == item.name && item.icon == ListVideo ? 2 : 1
            }
          />
          <span
            className={`${activePage == item.name && " font-medium"} text-sm`}
          >
            {item.name == "Show more" && isShowMore ? "Show less" : item.name}
          </span>
        </Button>
      ))}
    </div>
  );
}

export default SidebarButtons;
