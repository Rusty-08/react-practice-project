import React, { useState } from "react";
import { notification } from "../data/Notifications";
import Button from "../components/Button";
import Image from "../components/Image";
import { Bell, Dot, MoreVertical, Settings } from "lucide-react";

function Notification() {
  const [showNotification, setShowNotification] = useState(false);

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setShowNotification(!showNotification)}
      >
        <Bell
          className={showNotification ? "fill-secondary-dark" : ""}
          strokeWidth={1}
        />
      </Button>

      <div
        style={{ display: showNotification ? "block" : "none" }}
        className="absolute overflow-hidden transition-all duration-300 right-0 z-10 mt-2 w-[30rem] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div className="flex border-b ps-5 h-12 pe-3 justify-between items-center">
          <p>Notifications</p>
          <Button variant="ghost" size="icon">
            <Settings strokeWidth={1} />
          </Button>
        </div>
        <div
          style={{
            height: "calc(100vh - 6.5rem)",
          }}
          className="overflow-y-scroll scrollbar-thin scrollbar-thumb-neutral-500"
        >
          {notification.map((item, index) => (
            <Button
              key={index}
              className="group w-full justify-evenly rounded-none p-4 px-0 flex flex-row"
              variant="ghost"
            >
              <div className="relative w-[2.7rem] flex items-center justify-center">
                <Image
                  className="w-full m-0 p-0 h-[2.7rem]"
                  src={item.profile}
                  variant="profile"
                />
                <Dot className="text-blue-600 absolute -left-5" />
              </div>
              <div className="flex w-[15rem] items-start justify-start flex-col gap-2">
                <p className="text-sm text-start">{item.title}</p>
                <span className="text-xs text-secondary-text">{item.date}</span>
              </div>
              <Image src={item.image} className="w-[5.5rem] rounded-md" />
              <Button
                className="group-hover:opacity-[1] opacity-0 -mt-2 -mx-3"
                variant="transparent"
                size="icon"
              >
                <MoreVertical className="fill-secondary-dark" strokeWidth={1} />
              </Button>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notification;
