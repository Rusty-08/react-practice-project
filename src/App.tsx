import React from 'react'
import PageHeader from './layouts/PageHeader'
import Category from './layouts/Category'
import { CategoryLists } from './data/CategoryLists'
import SidebarLinks from './layouts/SidebarLinks'
import PostVideo from './layouts/PostVideo'
import { videoPosts } from './data/Posts'
import Shorts from './layouts/Shorts'
import { shorts } from './data/Shorts'
import { ChevronDown, FileVideo2 } from 'lucide-react'
import Button from './components/Button'
import SeeMoreSeparator from './components/SeeMoreSeparator'
import ShortsHeader from './layouts/ShortsHeader'

function App() {
  return (
    <div className='max-h-screen flex flex-col'>
      <PageHeader />
      <section className='w-full'>
        <div className="flex mt-14">
          {/* SIDEBAR */}
          <aside>
            <div className="w-[4.5rem] z-20 bg-white fixed top-16 bottom-0 p-1 hidden md:flex flex-col flex-shrink-0">
              <SidebarLinks />
            </div>
          </aside>

          {/* BODY */}
          <div className="flex-grow md:ml-[4.5rem] py-3 overflow-x-hidden">
            <div className='relative h-16 z-20'>
              <Category categories={CategoryLists} />
            </div>
            {/* VIDEO POST */}
            <PostVideo posts={videoPosts} />
            {/* SHORT VIDEO POST */}
            <div className="px-6 mt-2 mb-5">
              <ShortsHeader />
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