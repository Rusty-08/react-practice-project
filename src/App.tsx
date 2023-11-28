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
      <section className='w-full'>
        <div className="flex mt-16">
          {/* Sidebar */}
          <aside>
            <div className="w-[4.5rem] fixed top-16 p-1 flex flex-col flex-shrink-0">
              <SidebarLinks />
            </div>
          </aside>

          {/* Body */}
          <div className="flex-grow ml-[4.5rem] px-6 py-3 overflow-x-hidden">
            <div className='relative h-16'>
              <Category categories={CategoryLists} />
            </div>
            <div className="grid grid-cols-3 gap-5">
              <PostVideo posts={videoPosts} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App