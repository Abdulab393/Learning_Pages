import React from 'react'

function SidebarPage() {
  return (
    <>
     <div className="flex h-screen   "> 
       <div className='flex bg-red-300 w-64 p-5 h-screen '>
         This is for sidebar component.
       </div>
       <div className='flex-1 bg-blue-200  p-5 '>This is for Card Component.
       <button flex rounded></button></div>
     </div>
    </>
  )
}

export default SidebarPage
