import React from 'react'
import PageHeader from './layouts/PageHeader'
import Category from './layouts/Category'
import { CategoryLists } from './data/CategoryLists'
import SidebarLinks from './layouts/SidebarLinks'
import PostVideo from './components/PostVideo'
import { videoPosts } from './data/Posts'

function App() {
  return (
    <div className='max-h-screen flex flex-col'>
      <PageHeader />
      <div className="flex w-full">
        {/* Sidebar */}
        <div className="w-[4.5rem] p-1 flex flex-col flex-shrink-0">
          <SidebarLinks />
        </div>

        {/* Body */}
        <div className="flex-grow px-6 py-2 overflow-x-hidden">
          <Category categories={CategoryLists} />
          <div className="grid grid-cols-3 gap-5">
            <PostVideo posts={videoPosts} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App