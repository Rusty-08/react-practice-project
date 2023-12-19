import React, { EventHandler, useEffect, useRef, useState } from "react";
import { notification } from "../data/Notifications";
import Button from "../components/Button";
import Image from "../components/Image";
import { Bell, Dot, MoreVertical, Settings } from "lucide-react";
import useClickOutside from "../components/ClickOutside";

function Notification() {
  const [isUnread, setIsUnread] = useState(new Array<boolean>(9).fill(false));
  const [notificationRef, showNotification, setShowNotification] =
    useClickOutside(false);
  const [isViewed, setIsViewed] = useState(false);

  return (
    <div ref={notificationRef} className="md:relative">
      <Button
        variant="ghost"
        className="relative"
        size="icon"
        onClick={(e) => {
          e.stopPropagation();
          setShowNotification(!showNotification);
          setIsViewed(true);
        }}
      >
        <Bell
          className={showNotification ? "fill-secondary-dark" : ""}
          strokeWidth={1}
        />
        {!isViewed && (
          <div className="absolute w-5 h-5 top-0.5 p-0 text-xs text-[0.7rem] right-0.5 bg-red-600 text-white rounded-full border-2 border-white flex items-center justify-center">
            {notification.length}
          </div>
        )}
      </Button>
      {showNotification && (
        <div className="absolute overflow-hidden transition-all duration-300 right-0 z-10 mt-2 w-full max-w-[28rem] md:w-[28rem] origin-top-right sm:right-0 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
            className="hover-scroll overflow-y-scroll md:scrollbar-thin"
          >
            {notification.map((item, index) => (
              <Button
                key={index}
                className="group w-full justify-evenly rounded-none p-4 px-0 flex flex-row"
                variant="ghost"
                onClick={() => {
                  const updatedIsUnread = [...isUnread];
                  updatedIsUnread[index] = true;
                  setIsUnread(updatedIsUnread);
                }}
              >
                <div className="relative w-8 md:w-[2.7rem] flex items-center justify-center">
                  <Image
                    className="w-full m-0 p-0 h-8 md:h-[2.7rem]"
                    src={item.profile}
                    variant="profile"
                  />
                  {!isUnread[index] && (
                    <Dot className="text-blue-600 absolute -left-5" />
                  )}
                </div>
                <div className="flex w-[10rem] md:w-[12rem] items-start justify-start flex-col gap-2">
                  <p className="text-sm text-start">{item.title}</p>
                  <span className="text-xs text-secondary-text">
                    {item.date}
                  </span>
                </div>
                <Image src={item.image} className="w-[5.5rem] rounded-md" />
                <Button
                  className="md:group-hover:opacity-[1] md:opacity-0 -mt-2 -mx-3"
                  variant="transparent"
                  size="icon"
                >
                  <MoreVertical
                    className="fill-secondary-dark"
                    strokeWidth={1}
                  />
                </Button>
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Notification;
