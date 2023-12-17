import React, { useState } from "react";
import ExpandSidebar from "./ExpandSidebar";
import SidebarButtons from "./SidebarButtons";
import { pages } from "../data/sidebar/SidebarCategories";
import { youPages } from "../data/sidebar/YouLinks";
import Button from "../components/Button";
import { ChevronRight } from "lucide-react";
import { subscriptions } from "../data/sidebar/Subscriptions";
import { explore } from "../data/sidebar/Explore";
import { moreFromYouTube } from "../data/sidebar/MoreFromYoutube";
import { options } from "../data/sidebar/Options";

type Props = {
  showSidebar: boolean;
  setShowSidebar: (show: boolean) => void;
  activePage: string;
  setActivePage: (page: string) => void;
};

function MainSidebar({
  showSidebar,
  setShowSidebar,
  activePage,
  setActivePage,
}: Props) {
  const [isShowMorePage, setIsShowMorePage] = useState(false);
  const [isShowMoreSubs, setIsShowMoreSubs] = useState(false);

  return (
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
            : [...youPages.slice(0, 5), ...youPages.slice(youPages.length - 1)]
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
  );
}

export default MainSidebar;
