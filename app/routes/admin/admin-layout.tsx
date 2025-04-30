import React from 'react'
import { Outlet } from 'react-router'

const AdminLayout = () => {
  return (
    <div className='flex w-full min-h-screen bg-gray-50'>
      {/* Мобільна панель навігації */}
      <div className='lg:hidden'>
        {/* Тут має бути компонент MobileSidebar */}
        <div className="p-4 bg-white shadow">Mobile Sidebar</div>
      </div>

      {/* Десктопна бічна панель */}
      <aside className='w-full max-w-[270px] hidden lg:block bg-white shadow'>
        <div className="p-4">Sidebar</div>
      </aside>

      {/* Основний контент */}
      <main className='flex-1 p-4'>
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout
