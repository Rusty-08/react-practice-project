import React, { useEffect, useRef, useState } from 'react'
import PageHeader from './layouts/PageHeader'
import Category from './layouts/Category'
import { CategoryLists } from './data/CategoryLists'
import SidebarLinks from './layouts/SidebarLinks'
import PostVideo from './layouts/PostVideo'
import { videoPosts } from './data/Posts'
import Shorts from './layouts/Shorts'
import { shorts } from './data/Shorts'
import { ChevronDown, ChevronRight, FileVideo2 } from 'lucide-react'
import Button from './components/Button'
import SeeMoreSeparator from './components/SeeMoreSeparator'
import ShortsHeader from './layouts/ShortsHeader'
import ExpandSidebar from './layouts/ExpandSidebar'
import SidebarButtons from './layouts/SidebarButtons'
import { pages } from './data/SidebarCategories'
import { youPages } from './data/YouLinks'

function App() {

  const [showSidebar, setShowSidebar] = useState(false)
  const [activePage, setActivePage] = useState('Home')

  useEffect(() => {
    if (showSidebar) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }
  }, [showSidebar])

  return (
    <div className={`${showSidebar && 'me-4'} max-h-screen flex flex-col`}>
      <PageHeader 
        isSidebarOpen={showSidebar} 
        showSidebar={() => setShowSidebar(true)}
      />
      <section className='w-full relative'>
        <ExpandSidebar 
          setDisplay={() =>setShowSidebar(false)}
          onDisplay={showSidebar}
        >
          <div className="">
            <SidebarButtons 
              className='px-0 mx-3'
              activePage={activePage} 
              setActivePage={setActivePage} 
              component={pages}
            />
            <SidebarButtons 
              activePage={activePage} 
              setActivePage={setActivePage} 
              component={youPages}
            >
              <Button 
                className={`${activePage !== 'You' && 'hover:bg-secondary'} px-3.5 items-center font-medium flex gap-1.5 rounded-lg py-2.5`}
                onClick={()=>setActivePage('You')} 
                variant={ activePage == 'You' ? 'default':'ghost' }
              >
                You 
                <ChevronRight size="1.3rem" strokeWidth={1} />
              </Button>
            </SidebarButtons>
          </div>
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
            <div className='relative h-16 z-20'>
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
  )
}

export default App