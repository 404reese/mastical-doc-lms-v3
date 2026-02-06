import React from 'react'

const page = () => {
  return (
    <div>
        <h1 className='font-bold text-xl m-4'>All Links Dump Page</h1>

        <ul className='list-disc list-inside m-4 text-blue-600'>
            <li><a href="/admin">Admin Dashboard</a></li>
            <li><a href="/login">Login Page</a></li>
            <li><a href="/courses">Courses Page</a></li>
            <li><a href="/dashboard">User Dashboard</a></li>
            <li><a href="/learn/123">video player</a></li>
        </ul>
        
    </div>
  )
}

export default page