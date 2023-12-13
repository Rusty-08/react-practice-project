import React, { useEffect, useRef, useState } from "react";
import PageHeader from "./layouts/PageHeader";
import Category from "./layouts/Category";
import { CategoryLists } from "./data/CategoryLists";
import SidebarLinks from "./layouts/SidebarLinks";
import PostVideo from "./layouts/PostVideo";
import { videoPosts } from "./data/Posts";
import Shorts from "./layouts/Shorts";
import { shorts } from "./data/Shorts";
import { ChevronDown, ChevronRight, FileVideo2 } from "lucide-react";
import Button from "./components/Button";
import ExpandSidebar from "./layouts/ExpandSidebar";
import SidebarButtons from "./layouts/SidebarButtons";
import { pages } from "./data/sidebar/SidebarCategories";
import { youPages } from "./data/sidebar/YouLinks";
import { subscriptions } from "./data/sidebar/Subscriptions";
import { explore } from "./data/sidebar/Explore";
import { moreFromYouTube } from "./data/sidebar/MoreFromYoutube";
import { options } from "./data/sidebar/Options";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [activePage, setActivePage] = useState("Home");
  const [isShowMorePage, setIsShowMorePage] = useState(false);
  const [isShowMoreSubs, setIsShowMoreSubs] = useState(false);

  useEffect(() => {
    if (showSidebar) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [showSidebar]);

  return (
    <div className={`${showSidebar && "me-4"} max-h-screen flex flex-col`}>
      <PageHeader
        isSidebarOpen={showSidebar}
        showSidebar={() => setShowSidebar(true)}
      />
      <section className="w-full">
        <ExpandSidebar
          setDisplay={() => setShowSidebar(false)}
          onDisplay={showSidebar}
        >
          {/* main button section */}
          <SidebarButtons
            className="px-0 pe-0 mx-3 me-2"
            activePage={activePage}
            setActivePage={setActivePage}
            component={pages}
          />

          {/* You button section */}
          <SidebarButtons
            activePage={activePage}
            setActivePage={setActivePage}
            component={
              isShowMorePage
                ? youPages
                : [
                    ...youPages.slice(0, 5),
                    ...youPages.slice(youPages.length - 1),
                  ]
            }
            showMore={() => setIsShowMorePage(isShowMorePage ? false : true)}
            isShowMore={isShowMorePage}
          >
            <Button
              className={`${
                activePage !== "You" && "hover:bg-secondary"
              } px-3.5 items-center font-medium flex gap-1.5 rounded-lg h-10`}
              onClick={() => setActivePage("You")}
              variant={activePage == "You" ? "default" : "ghost"}
            >
              You
              <ChevronRight size="1.3rem" strokeWidth={1} />
            </Button>
          </SidebarButtons>

          {/* Subscriptions section */}
          <SidebarButtons
            activePage={activePage}
            setActivePage={setActivePage}
            component={
              isShowMoreSubs
                ? subscriptions
                : [
                    ...subscriptions.slice(0, 5),
                    ...subscriptions.slice(subscriptions.length - 1),
                  ]
            }
            showMore={() => setIsShowMoreSubs(isShowMoreSubs ? false : true)}
            isShowMore={isShowMoreSubs}
          >
            <h4 className="px-3.5 flex items-center py-1.5 pb-1 font-medium">
              Subscriptions
            </h4>
          </SidebarButtons>

          {/* Explore section */}
          <SidebarButtons
            activePage={activePage}
            setActivePage={setActivePage}
            component={explore}
          >
            <h4 className="px-3.5 flex items-center py-1.5 pb-1 font-medium">
              Explore
            </h4>
          </SidebarButtons>

          {/* More from YouTube section */}
          <SidebarButtons
            activePage={activePage}
            setActivePage={setActivePage}
            component={moreFromYouTube}
          >
            <h4 className="px-3.5 flex items-center py-1.5 pb-1 font-medium">
              More from YouTube
            </h4>
          </SidebarButtons>

          {/* Additional Options section */}
          <SidebarButtons
            activePage={activePage}
            setActivePage={setActivePage}
            component={options}
          />
        </ExpandSidebar>
        <div className="flex mt-14">
          {/* SIDEBAR */}
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
