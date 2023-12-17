import React, { useEffect, useRef, useState } from "react";
import PageHeader from "./layouts/PageHeader";
import Category from "./layouts/Category";
import { CategoryLists } from "./data/CategoryLists";
import SidebarLinks from "./layouts/SidebarLinks";
import PostVideo from "./layouts/PostVideo";
import { videoPosts } from "./data/Posts";
import Shorts from "./layouts/Shorts";
import { shorts } from "./data/Shorts";
import MainSidebar from "./layouts/MainSidebar";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [activePage, setActivePage] = useState("Home");

  useEffect(() => {
    if (showSidebar) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [showSidebar]);

  return (
    <div
      className={`${
        showSidebar && "lg:me-[0.95rem]"
      } max-h-screen flex flex-col`}
    >
      <PageHeader
        isSidebarOpen={showSidebar}
        showSidebar={() => setShowSidebar(true)}
      />
      <section className="w-full">
        <div
          onClick={() => setShowSidebar(false)}
          className={`z-[77] fixed transition-[background-color] duration-300 delay-300 overflow-y-scroll scrollbar scrollbar-track-white bg-opacity-50 w-full h-screen ${
            showSidebar ? "visible bg-black" : "hidden bg-transparent"
          }`}
        ></div>

        {/* EXPANDED SIDEBAR */}
        <MainSidebar
          showSidebar={showSidebar}
          setShowSidebar={() => setShowSidebar(false)}
          activePage={activePage}
          setActivePage={setActivePage}
        />

        <div className="flex mt-14">
          {/* MINIMIZE SIDEBAR */}
          <aside>
            <div className="w-[4.5rem] z-20 bg-white fixed top-14 bottom-0 p-1 hidden md:flex flex-col flex-shrink-0">
              <SidebarLinks
                activePage={activePage}
                setActivePage={setActivePage}
              />
            </div>
          </aside>

          {/* BODY */}
          <div className="flex-grow md:ml-[4.5rem] py-2 overflow-x-hidden">
            <div className="relative h-16 z-20">
              <Category
                isSidebarOpen={showSidebar}
                categories={CategoryLists}
              />
            </div>
            {/* VIDEO POST */}
            <PostVideo posts={videoPosts} />
            {/* SHORT VIDEO POST */}
            <div className="px-6 mt-2 mb-5">
              <Shorts shorts={shorts} />
            </div>
            {/* VIDEO POST */}
            <PostVideo posts={videoPosts} />
            <PostVideo posts={videoPosts} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
