import React, { Children, ComponentProps, ReactNode, useState } from "react";
import Button from "../components/Button";
import { ListVideo, LucideIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import Image from "../components/Image";
import { subscriptions } from "../data/Subscriptions";

type Category = {
  children?: ReactNode;
  component: {
    icon?: any;
    image?: string;
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
          } px-3.5 flex items-center ${item.image && "gap-5"} ${
            item.icon && "gap-6"
          }
           rounded-lg h-10`}
          onClick={
            item.name !== ""
              ? item.name !== "Show more"
                ? () => setActivePage(item.name)
                : showMore
              : showMore
          }
          variant={activePage == item.name ? "default" : "ghost"}
        >
          {item.image && (
            <Image
              className="h-6 w-6"
              variant="profile"
              src={item.image}
              alt=""
            />
          )}
          {item.icon && (
            <item.icon
              className={`${
                activePage == item.name &&
                item.icon !== ListVideo &&
                "fill-secondary-dark stroke-secondary-hover"
              } w-5 h-5 ${
                isShowMore &&
                (item.name == "Show more" || item.name == "") &&
                "transform rotate-180"
              }`}
              strokeWidth={
                activePage == item.name && item.icon == ListVideo ? 2 : 1
              }
            />
          )}
          <span
            className={`${
              activePage == item.name && "font-medium"
            } truncate text-sm`}
          >
            {item.name !== ""
              ? item.name == "Show more" && isShowMore
                ? "Show less"
                : item.name
              : isShowMore
              ? "Show less"
              : `Show ${subscriptions.length - 6} more`}
          </span>
        </Button>
      ))}
    </div>
  );
}

export default SidebarButtons;
