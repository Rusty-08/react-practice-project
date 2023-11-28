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

function App() {
  return (
    <div className='max-h-screen flex flex-col'>
      <PageHeader />
      <section className='w-full'>
        <div className="flex mt-16">
          {/* SIDEBAR */}
          <aside>
            <div className="w-[4.5rem] z-20 bg-white fixed top-16 bottom-0 p-1 flex flex-col flex-shrink-0">
              <SidebarLinks />
            </div>
          </aside>

          {/* BODY */}
          <div className="flex-grow ml-[4.5rem] py-3 overflow-x-hidden">
            <div className='relative h-16 z-20'>
              <Category categories={CategoryLists} />
            </div>
            {/* VIDEO POST */}
            <div className="grid px-6 pb-3 grid-cols-3 gap-4">
              <PostVideo posts={videoPosts} />
            </div>
            {/* SHORT VIDEO POST */}
            <div className="px-6 mt-2 mb-5">
              <div className='flex gap-2 items-center mb-7'>
                <FileVideo2 className='fill-red-600 stroke-red-200' strokeWidth={1} />
                <p className='text-xl font-bold'>Shorts</p>
              </div>
              <Shorts shorts={shorts} />
            </div>
            {/* VIDEO POST */}
            <div className="grid px-6 grid-cols-3 gap-4">
              <PostVideo posts={videoPosts} />
            </div>
            <div className="grid px-6 grid-cols-3 gap-4">
              <PostVideo posts={videoPosts} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App