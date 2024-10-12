import React from 'react'
import { NavLink } from 'react-router-dom'

function ErrorPage() {
  return (
    <>
    <h1 className='text-4xl text-blue-950 '>404 Error </h1>
    <button className='bg-blue-900 text-lime-50 p-2 rounded-md m-2'>
        <NavLink to={"/"}>
        Back Home Page
        
        </NavLink>
        </button>
    </>
  )
}

export default ErrorPage