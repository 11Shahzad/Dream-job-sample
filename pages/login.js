import React from 'react'
const login = () => {
  return (
    <div className='bg-black'>
    <div className='flex-col mx-auto bg-black text-white flex align-middle text-center items-center'>Login Page
     <form action="/Dashboard" className='flex-col space-y-5 border flex align-middle text-center items-center'>
     <label htmlFor="username">Username
      <input className='bg-black text-white' type="text" id='username'autoComplete='current' placeholder='Username' /></label>
      <label htmlFor="pass">Password
      <input className='bg-black text-white' type="password" id='pass' autoComplete='current' placeholder='*****'/></label>
      <input type="submit" />
    </form>
    </div>
    </div>
  )
}

export default login