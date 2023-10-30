import React from 'react'
import Sidebar from '@/components/Sidebar'
import CourseTable from '@/components/CourseTable'

export default function page() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-row">
        <div className="flex">
            <Sidebar />
        </div>
        <CourseTable/>
    </div>
  )
}
