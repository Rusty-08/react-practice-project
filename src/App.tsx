import React from 'react'
import PageHeader from './layouts/PageHeader'
import Category from './layouts/Category'
import { CategoryLists } from './components/CategoryLists'
import SidebarLinks from './layouts/SidebarLinks'

function App() {
  return (
    <div className='max-h-screen flex flex-col'>
      <PageHeader />
      <div className="flex w-full h-screen">
        {/* Sidebar */}
        <div className="w-[4.5rem] p-1 flex flex-col flex-shrink-0">
          <SidebarLinks />
        </div>

        {/* Body */}
        <div className="flex-grow px-6 py-2 overflow-x-hidden">
          <Category categories={CategoryLists} />
        </div>
      </div>
    </div>
  )
}

export default App