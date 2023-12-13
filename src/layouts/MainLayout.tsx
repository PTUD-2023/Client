import { memo } from 'react'
import { Outlet } from 'react-router-dom'

import Home from 'src/pages/Home'
import Contract from 'src/pages/Contract'
function MainLayout() {
  return (
    <div className='h-full bg-[#f2f4f7]'>
      <Home />
      <div className='mt-[56px]'>
        <Outlet />
      </div>
    </div>
  )
}

export default memo(MainLayout)
