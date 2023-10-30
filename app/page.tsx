import React from 'react'
import Sidebar from '@/components/Sidebar'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-row">
      <div className="flex">
        <Sidebar />
      </div>
    </div>
  )
}
