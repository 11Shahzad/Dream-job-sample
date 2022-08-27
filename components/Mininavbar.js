import React from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

 

const Mininavbar = () => {
  return (
    <div id="button" className="button s+:hidden absolute hover:cursor-pointer w-10 right-4 top-4 " onClick={myFunction}>
    <img src="/image/menu.png" alt=""/>

<div id="menu" onMouseLeave={hide} className="list-none .bg-gray-800 hidden pb-3 s+:hidden shadow-lg shadow-[#34D399] absolute duration-300 ease-in-out right-0 top-10 bg-gray-700 rounded-lg items-center space-y-1 text-center text-white">
<ul className="space-y-1 pt-1 "/>
    <li className="cursor-pointer hover:text-[#34D399] hover:animate-pulse text-xs hover:scale-110 delay-100 duration-300 ease-in-out">
        <Link href="/Products">Product </Link>
    </li>
    <img className="mx-auto" src="/image/dots.png" alt="dots"/>
    <li className="cursor-pointer hover:text-[#34D399] hover:animate-pulse text-xs hover:scale-110 delay-100 duration-300 ease-in-out">
        <Link href="/Performance"> Performance </Link>
    </li>
    <img className="mx-auto" src="/image/dots.png" alt="dots"/>
    <li className="cursor-pointer hover:text-[#34D399] hover:animate-pulse text-xs hover:scale-110 delay-100 duration-300 ease-in-out">
        <Link href="/Dashboard">Dashboard </Link>
    </li>



    <li className="text-[#34D399] mx-9 l+:text-lg md:text-base hover:animate-pulse text-xs cursor-pointer hover:text-[#fff] hover:scale-110 delay-100 duration-300 ease-in-out font-semibold leading-7">
        <Link href="/login"> Login</Link>
</li>
    <li
         className="bg-[#10B981] hover:bg-green-400 mb-3 px-4 mx-auto w-fit hover:animate-pulse rounded-lg text-xs hover:scale-110 delay-100 duration-300 ease-in-out ">
           <Link href='/signup'> Sign Up </Link></li>
        <ul/>
</div>
</div>

  )
}
function myFunction() {
    var element = document.getElementById("menu");
    element.classList.toggle(`${styles.mystyle}`);
    var element = document.getElementById("para");
    element.classList.toggle(`${styles.mystyle1}`);
 }
 
 function hide() { 
     var element = document.getElementById("menu");
    element.classList.toggle(`${styles.mystyle}`);
    var element = document.getElementById("para");
    element.classList.toggle(`${styles.mystyle1}`);
     
   
 }
   

export default Mininavbar