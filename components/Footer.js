import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
        <footer className="bg-[#1F2937] text-white w-full absolute left-0 right-0">
            <img src="/image/Groupb.png" alt="" className="absolute m-:hidden right-[2.219rem] bottom-[28.323rem]"/>

            <div className="m+:container text-center m-:px-3 s+:mt-[8rem] s-:mt-10 mx-auto">
                <h1 className="text-4xl md:text-3xl smd:text-2xl sm:text-lg xs-:text-xs font-extrabold ">Contact Us</h1>
                <p className="text-lg smd:text-base xs-:px-3 sm:text-sm xs-:text-xs py-14 mx-auto m+:px-[6rem]">
                    Finding Link job that matches your skills & interest is a lot easier now,
                    You can browse the jobs & apply whenever & wherever you want. Finding a Job that matches your
                    skills
                    & interest is a lot easier now,
                    You can browse the jobs & apply whenever & wherever you want.</p>
            </div>
            <div className="flinks flex justify-center items-center mx-auto">
                <Link  href="https://www.google.com/"><a className="fl mr-4 s+:p-[1.063rem] s-:px-2 s-:py-3 bg-[#374151]  rounded-full hover:animate-pulse hover:bg-gray-200 cursor-pointer hover:scale-125 delay-100 duration-300 ease-in-out"
                   ><img src="/image/footer links/Group 51.png" className="s-:w-1/2 mx-auto" alt=""/></a></Link>
                <Link href="https://www.facebook.com"><a className="fl mr-4 s+:py-[1.063rem] s-:p-3 bg-[#374151]  rounded-full px-[1.2rem] hover:animate-pulse hover:bg-gray-200 cursor-pointer hover:scale-125 delay-100 duration-300 ease-in-out"
                    ><img src="/image/footer links/Group 52.png"className="s-:w-1/2 mx-auto" alt=""/></a></Link>
                <Link  href="https://www.instagram.com"><a className="fl mr-4 s+:p-[1.063rem] s-:px-2 s-:py-3 bg-[#374151] rounded-full hover:animate-pulse hover:bg-gray-200 cursor-pointer hover:scale-125 delay-100 duration-300 ease-in-out"
                   ><img src="/image/footer links/Group 54.png"className="s-:w-1/2 mx-auto" alt=""/> </a></Link>
                <Link  href="https://www.twitter.com"><a className="fl mr-4 s+:py-[1.063rem] s-:py-3 s-:px-1.5 bg-[#374151] rounded-full s+:px-[0.93rem] hover:animate-pulse hover:bg-gray-200 cursor-pointer hover:scale-125 delay-100 duration-300 ease-in-out"
                   ><img src="/image/footer links/Vector.png" className="s-:w-1/2 mx-auto" alt=""/></a></Link>

            </div>
            <div className="flex flex-wrap container mx-auto items-center justify-center m-:px-0 px-[5.313rem] s+:py-[5rem] s-:py-10">
                <div className="phone flex mx-auto  py-[1rem]">
                    <img src="/image/Frame3.png"alt="phone "/>
                    <p className="flex justify-around items-center  xs-:text-xs xs-:px-3  cursor-pointer pl-[1.93rem]">+92-340-7909920 </p>
                </div>
                <div className="location flex mx-auto py-[1rem]">
                    <img src="/image/Frame (1).png"alt="location "/>
                    <p className="flex justify-center items-center  xs-:text-xs xs-:px-3  cursor-pointer pl-[1.93rem]">Somewhere in Islamabad, Pakistan</p>
                </div>
                <div className="Email flex mx-auto py-[1rem]">
                    <img src="/image/Frame (2).png" alt="Email "/>
                    <p className="flex justify-around items-center xs-:text-xs xs-:px-3 cursor-pointer  pl-[1.93rem]">Someone@here.com</p>
                </div>
            </div>
        </footer>



    </div>
  )
}

export default Footer