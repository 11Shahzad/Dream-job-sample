import {useState} from 'react'
import Link from 'next/link'
const Body = () => {
    const [text, setText] = useState('')
    const [city, setCity] = useState('select')
    const [skill, setSkill] = useState('select')



    const onSubmit = (e) => {
        e.preventDefault()
       if(!text || !city || !skill){
           alert('Please add Data')
       }
        else{
        alert("you Searched For "+ text+" "+city+" "+skill)
        console.log(text,city,skill)
    
    }
        }
  return (
    <div className='bg-[#F9FAFB] mt-0'>

    
<img src="/image/Group 110.png" alt="lines" className="absolute m-:hidden top-[59.5rem] left-[9.68rem]"/>
    <img src="/image/Group.png" alt="lines" className="absolute m-:hidden top-[58.93rem] right-[5rem]"/>
    <form onSubmit={onSubmit} className="flex s-:mx-0 mx-auto s-:bg-black s-:text-white items-center
     l+:container justify-center m+:text-center s-:flex-col s-:w-1/2 m+:justify-around 
     x+:w-3/4 shadow-lg -mt-[22.563rem] s-:-mt-[23rem] absolute  s+:left-0 s+:right-0 border rounded-lg  bg-white ">
        <div className="flex justify-center items-center text-center ">
            <img className="s+:pt-[2.656rem] m+:ml-10 s-:invert s-:w-1/3 s-:mr-3 s-:py-5 s+:pb-[2.226rem] smd:ml-5" src="/image/Frame.png" alt="location logo"/>
            <h2 className="text-lg sm:text-sm xs-:text-xs cursor-default s-:pt-2 smd:mr-3 m+:ml-4">Location</h2>
        </div>
        <img className="my-auto m+:pl-1.5 m+:ml-1.5" src="/image/_.png" alt="line"/>

        <input value={text} onChange={(e) => setText(e.target.value)} className="outline-0 text-sm s-:text-xs smd:-mr-9 md:-mr-5 s-:w-[9.25rem] s-:bg-black mx-auto text-clip  items-center "type="text" placeholder="Enter Your Location Here!"/>
        <div className="bg-[#D1D5DB] s-:opacity-50 s+:h-[7.625rem] s+:w-[0.01rem] s-:my-3 s-:w-[7.625rem] s-:h-[0.01rem] "></div>
         <select  className="bg-white s-:text-sm s-:py-3 s-:bg-black s-:text-white mx-auto my-0 smd-text text-lg outline-0 cursor-pointer"
            name="city" id="city" value={city} onChange={
                (e) => setCity(e.target.value)} >

            <option disabled value='select' className="sm:text-sm xs-:text-xs" >Catagory</option>
            <option value="onsite">Onsite</option>
            <option value="remote">Remote</option>
        </select> 
      
        <div className="bg-[#D1D5DB] s-:opacity-50 s+:h-[7.625rem] s+:w-[0.01rem] s-:my-3 s-:w-[7.625rem] s-:h-[0.01rem] "></div>

        <select className="bg-white text-center sm:text-sm xs-:text-xs s-:py-3 s-:bg-black s-:text-white text-lg mx-auto outline-0 cursor-pointer "
            name="skills" id="skills" value={skill} onChange={
                (e) => setSkill(e.target.value)}>
            <option disabled value='select' >Skills</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
        </select>
        <div className="bg-[#D1D5DB] s-:opacity-50 s+:h-[7.625rem] s+:w-[0.01rem] s-:w-[7.625rem] s-:my-3 s-:h-[0.01rem] "></div>


        <input 
            className="font-medium px-6 l+:px-12 smd:mx-5 s-:mb-5 s-:text-sm py-3.5 m+:mx-10 hover:animate-pulse hover:bg-green-400 cursor-pointer bg-[#10B981] rounded-lg text-white"
            type="submit" value="Search"/>
    </form>
    <div
        className="justify-around flex cursor-default items-center l+:text-4xl md:text-3xl smd:text-2xl s-:text-xl font-extrabold leading-9 m+:mt-[18.75rem] smd:mt-[15rem] s-:mt-[11rem] mx-auto text-[#10B981]">
        <h1>Explore Dream Studio</h1>
    </div>
  {/* navigation */}
    <div className="flex justify-center flex-wrap  items-center mx-auto s+:mt-[5rem]  ">
        <div
            className="hover:bg-white cursor-pointer mt-[1rem] hover:animate-pulse hover:scale-110 hover:shadow-lg delay-100 duration-300 ease-in-out text-center rounded-lg">
            <Link href="/more" ><a>
               <h1 className="font-bold text-2xl md:text-xl w-fit mx-auto smd:text-lg s-:text-base xs-:text-sm leading-6 pt-6 flex text-center justify-around pb-6">Software
                </h1>
                <img className="s+:px-[2.3125rem] s-:w-1/2  mx-auto pt-[5.563]" src="/image/software.png" alt="pc logo"/>
                <p className="pb-6 leading-4 md:text-sm smd:text-sm sm:text-sm  w-fit mx-auto xs-:text-xs"> View More </p>
           </a>
           </Link>
        </div>
        <div
            className="hover:bg-white cursor-pointer  mt-[1rem] hover:animate-pulse hover:scale-110 hover:shadow-lg delay-100 duration-300 ease-in-out text-center rounded-lg">
            <Link href="/more" ><a>
             <h1 className="font-bold text-2xl md:text-xl w-fit mx-auto smd:text-lg s-:text-base xs-:text-sm leading-6 pt-6 flex text-center justify-around pb-6">Design
                </h1>
                <img className="s+:px-[2.3125rem] s-:w-1/2  mx-auto pt-[5.563]" src="/image/design.png" alt="pc logo"/>
               <p className="pb-6 leading-4 md:text-sm smd:text-sm sm:text-sm  w-fit mx-auto xs-:text-xs"> View More </p>
          </a></Link>
        </div>
        <div
            className="hover:bg-white cursor-pointer mt-[1rem] hover:animate-pulse hover:scale-110 hover:shadow-lg delay-100 duration-300 ease-in-out text-center rounded-lg">
            <Link href="/more" ><a>
             <h1 className="font-bold text-2xl md:text-xl w-fit mx-auto smd:text-lg s-:text-base xs-:text-sm leading-6 pt-6 flex text-center justify-around pb-6">Finance
                </h1>
                <img className="s+:px-[2.3125rem] s-:w-1/2  mx-auto pt-[5.563]" src="/image/finance.png" alt="pc logo"/>
                <p className="pb-6 leading-4 md:text-sm smd:text-sm sm:text-sm  w-fit mx-auto xs-:text-xs">View More</p>
          </a></Link>
        </div>
        <div
            className="hover:bg-white cursor-pointer mt-[1rem] hover:animate-pulse hover:scale-110 hover:shadow-lg delay-100 duration-300 ease-in-out text-center rounded-lg">
            <Link href="/more" ><a>
               <h1 className="font-bold text-2xl md:text-xl w-fit mx-auto smd:text-lg s-:text-base xs-:text-sm leading-6 pt-6 flex text-center justify-around pb-6">
                    Photography</h1>
                <img className="s+:px-[2.3125rem] s-:w-1/2  mx-auto pt-[5.563]" src="/image/photography.png" alt="pc logo"/>
                <p className="pb-6 leading-4 md:text-sm smd:text-sm sm:text-sm  w-fit mx-auto xs-:text-xs">View More</p>
          </a></Link>
  </div>
        <div
            className="hover:bg-white cursor-pointer mt-[1rem] hover:animate-pulse hover:scale-110 hover:shadow-lg delay-100 duration-300 ease-in-out text-center rounded-lg">
           <Link href="/more" ><a>
                
                <h1 className="font-bold text-2xl w-fit mx-auto md:text-xl smd:text-lg s-:text-base xs-:text-sm leading-6 pt-6 flex text-center justify-around pb-6">Management
                </h1>
                <img className="s+:px-[2.3125rem] s-:w-1/2  mx-auto pt-[5.563]" src="/image/software.png" alt="pc logo"/>
                <p className="pb-6 leading-4 md:text-sm smd:text-sm sm:text-sm  w-fit mx-auto xs-:text-xs">View More</p>
           </a></Link>
        </div>

    </div> 
    <div className="flex cursor-default mx-auto relative m+:mt-[10rem]">
        <div><img className="absolute left-0 sm:top-[23rem] md:top-[-5rem] smd:top-[23rem] xs-:top-[23rem] md:w-2/5 w-1/2 x+:w-fit" 
src="/image/Rectangle 31.png" alt=""/></div>
       
        <img src="/image/Group 114.png" alt="" className="absolute m-:hidden md:top-[157rem] left-[2.063rem] top-[152.563rem]"/>

        <div className="x+:pl-[50.81rem] m-:px-3 x+:mt-[10rem] smd:mt-0 s-:mt-0 lg:pl-[40rem] xs-:px-3 md:pl-[26rem]  x+:pr-[6.5rem]  mx-auto flex-col">
            <img className="absolute s-:hidden " src="/image/Vector.png" alt=""/>
            <div
                className="grow text-4xl lg:3xl md:text-2xl smd:text-xl smd:text-center sm:text-lg xs-:text-base s-:px-3 s-:text-center  pt-[2.375rem] font-extrabold justify-around leading-[3.75rem]">
                <h1>How to Explore the Best Opportunites for Yourself?</h1>
            </div>
            <div className=" grow text-lg md:text-base s-:text-center sm:text-sm xs-:text-xs mt-8 smd:ms-auto smd:text-center s-:px-3 font-normal">
                <p>Finding a Job that matches your skills & interest is a lot easier now,
                    You can browse the Jobs & apply whenever & wherever you want.</p>
            </div>
            <div className="flex container pt-10  l-:mx-auto items-center">
                <div className="container flex items-center">
                    <img className="" src="/image/jobs.png" alt="jobs"/>
                    <div className="flex-col pl-3 ">
                        <h2 className="text-4xl md:2xl smd:xl sm:text-lg xs-:text-sm pt-5 font-extrabold"> 5000+</h2>
                        <p className="s-:text-xs">Total Jobs</p>
                    </div>

                </div>
                <div className="container flex items-center">
                    <img className="" src="/image/employ.png" alt="jobs"/>
                    <div className="flex-col pl-3 ">
                        <h2 className="text-4xl md:2xl smd:xl sm:text-lg xs-:text-sm pt-5 font-extrabold"> 80+</h2>

                        <p className="s-:text-xs">Total Employees</p>
                    </div>
                </div>
            </div>
            <div className="flex container ml:mx-auto l+:pt-10 l-:mx-auto items-center">
                <div className="container flex items-center">
                    <img className="" src="/image/seeker.png" alt="jobs"/>
                    <div className="flex-col pl-3 ">
                        <h2 className="text-4xl md:2xl smd:xl sm:text-lg xs-:text-sm pt-5 font-extrabold"> 2000+</h2>
                        <p className="s-:text-xs">Total Seekers</p>
                    </div>
                </div>

                <div className="container flex items-center">
                    <img className="" src="/image/experience.png" alt="jobs"/>
                    <div className="flex-col pl-3 ">
                        <h2 className="text-4xl md:2xl smd:xl sm:text-lg xs-:text-sm pt-5 font-extrabold"> 5years</h2>

                        <p className="s-:text-xs">Total Experience</p>
                    </div>
                </div>
            </div>


        </div>
    </div>
  
    <img src="/image/Group 115.png" alt="" className="absolute m-:hidden left-[7.313rem] top-[240.375rem]"/>
    <img src="/image/Group 118.png" alt="" className="absolute m-:hidden left-[7rem] top-[272.5rem]"/>
    <img src="/image/Group 116.png" alt="" className="absolute m-:hidden right-[6rem] top-[240.375rem]"/>
    <img src="/image/triangle.png" alt="" className="absolute m-:hidden right-[7.813rem] top-[273.25rem]"/>

    <div className="container flex-col xs-:px-3 items-center xs-:mt-[23rem] sm:mt-[27rem] md:mt-[10rem] mt-[20.929rem] smd:mt-[42rem] justify-around  mx-auto">
        <div className="container text-center mx-auto">
            <h1 className="text-4xl lg:3xl md:text-2xl smd:text-xl sm:text-lg xs-:text-sm font-extrabold hover:cursor-default">Our Team</h1>
            <p className="text-lg md:text-base smd:text-sm sm:text-sm xs-:text-xs pt-4 xs-:px-3 mx-auto lg:px-[12rem] hover:cursor-default">It’s consists of the best
                memebers
                gathered &
                collected to make the perfect team that can deliver the best results & in record time.</p>
        </div>
        <div className="team items-center flex flex-wrap  justify-center mx-auto ">
            <div
                className="flex-col mt-[6.25rem] w-[15rem] m+:w-[20.563rem] mx-[1.125rem] m+:h-[25rem] border bg-white shadow-lg rounded-xl">
                <img src="/image/Rectangle 34.png" alt="" className="relative s-:w-1/2  rounded-full -mt-[3.125rem] mx-auto"/>
                <h1 className="text-2xl font-bold md:text-xl smd:text-lg sm:text-base xs-:text-sm text-center hover:cursor-default m+:px-[4.5rem]">Muhammad Ali</h1>
                <p className="text-base  pt-[1.5rem] text-center m-:px-3 smd:text-sm sm:text-sm xs-:text-xs s+:px-3 m+:px-[2.125rem] hover:cursor-default">Finding a Job that
                    matches your skills & interest is a lot easier now,
                    You can browse the Jobs & apply whenever & wherever you want.
                    Let’s do it something earlier.</p>
                <button
                    className="mx-auto  m-:mb-3 bg-[#F3F4F6] text-base smd:text-sm sm:text-sm xs-:text-xs hover:animate-pulse hover:bg-gray-200 cursor-pointer hover:scale-110 delay-100 duration-300 ease-in-out rounded-lg text-[#10B981] py-3 px-6 justify-around flex mt-9">
                        <Link
                        href="/more"> Learn
                        More </Link></button>
            </div>
            <div
                className="container mt-[6.25rem] m+:w-[20.563rem] w-[15rem] mx-[1.125rem] m+:h-[25rem] border bg-white shadow-lg rounded-xl">
                <img src="/image/Rectangle 36.png" alt="" className="relative s-:w-1/2  rounded-full -mt-[3.125rem] mx-auto"/>
                <h1 className="text-2xl font-bold md:text-xl smd:text-lg sm:text-base xs-:text-sm text-center hover:cursor-default m+:px-[4.5rem]">Muhammad Ali</h1>
                <p className="text-base  pt-[1.5rem] text-center m-:px-3 smd:text-sm sm:text-sm xs-:text-xs s+:px-3 m+:px-[2.125rem] hover:cursor-default">Finding a Job that
                    matches your skills & interest is a lot easier now,
                    You can browse the Jobs & apply whenever & wherever you want.
                    Let’s do it something earlier.</p>
                <button
                    className="mx-auto bg-[#F3F4F6] m-:mb-3 text-base smd:text-sm sm:text-sm xs-:text-xs hover:animate-pulse hover:bg-gray-200 cursor-pointer hover:scale-110 delay-100 duration-300 ease-in-out rounded-lg text-[#10B981] py-3 px-6 justify-around flex mt-9">
                        <Link
                        href="/more"> Learn
                        More </Link></button>
            </div>
            <div
            className="container mt-[6.25rem] w-[15rem] m+:w-[20.563rem]  mx-[1.125rem] m+:h-[25rem] border bg-white shadow-lg rounded-xl">
                <img src="/image/Rectangle 38.png" alt="" className="relative s-:w-1/2  rounded-full -mt-[3.125rem] mx-auto"/>
                <h1 className="text-2xl font-bold md:text-xl smd:text-lg sm:text-base xs-:text-sm text-center hover:cursor-default m+:px-[4.5rem]">Muhammad Ali</h1>
                <p className="text-base  pt-[1.5rem] text-center m-:px-3 smd:text-sm sm:text-sm xs-:text-xs s+:px-3 m+:px-[2.125rem] hover:cursor-default">Finding a Job that
                    matches your skills & interest is a lot easier now,
                    You can browse the Jobs & apply whenever & wherever you want.
                    Let’s do it something earlier.</p>
                <button
                    className="mx-auto bg-[#F3F4F6] m-:mb-3 text-base smd:text-sm sm:text-sm xs-:text-xs hover:animate-pulse hover:bg-gray-200 cursor-pointer hover:scale-110 delay-100 duration-300 ease-in-out rounded-lg text-[#10B981] py-3 px-6 justify-around flex mt-9">
                    <Link href="/more"> Learn
                        More</Link></button>
            </div>
            <div
            className="container mt-[6.25rem] w-[15rem] m+:w-[20.563rem]  mx-[1.125rem] m+:h-[25rem] border bg-white shadow-lg rounded-xl">
                <img src="/image/Rectangle 40.png" alt="" className="relative s-:w-1/2  rounded-full -mt-[3.125rem] mx-auto"/>
                <h1 className="text-2xl font-bold md:text-xl smd:text-lg sm:text-base xs-:text-sm text-center hover:cursor-default m+:px-[4.5rem]">Muhammad Ali</h1>
                <p className="text-base  pt-[1.5rem] text-center m-:px-3 smd:text-sm sm:text-sm xs-:text-xs s+:px-3 m+:px-[2.125rem] hover:cursor-default">Finding a Job that
                    matches your skills & interest is a lot easier now,
                    You can browse the Jobs & apply whenever & wherever you want.
                    Let’s do it something earlier.</p>
                <button
                    className="mx-auto bg-[#F3F4F6] m-:mb-3 text-base smd:text-sm sm:text-sm xs-:text-xs hover:animate-pulse hover:bg-gray-200 cursor-pointer hover:scale-110 delay-100 duration-300 ease-in-out rounded-lg text-[#10B981] py-3 px-6 justify-around flex mt-9">
                        <Link href="/more"> Learn
                        More</Link></button>
            </div>
            <div
            className="container mt-[6.25rem] w-[15rem] m+:w-[20.563rem]  mx-[1.125rem] m+:h-[25rem] border bg-white shadow-lg rounded-xl">
                <img src="/image/Rectangle 43.png" alt="" className="relative s-:w-1/2 rounded-full -mt-[3.125rem] mx-auto"/>
                <h1 className="text-2xl font-bold md:text-xl smd:text-lg sm:text-base xs-:text-sm text-center hover:cursor-default m+:px-[4.5rem]">Muhammad Ali</h1>
                <p className="text-base  pt-[1.5rem] text-center m-:px-3 smd:text-sm sm:text-sm xs-:text-xs s+:px-3 m+:px-[2.125rem] hover:cursor-default">Finding a Job that
                    matches your skills & interest is a lot easier now,
                    You can browse the Jobs & apply whenever & wherever you want.
                    Let’s do it something earlier.</p>
                <button
                    className="mx-auto bg-[#F3F4F6] m-:mb-3 text-base smd:text-sm sm:text-sm xs-:text-xs hover:animate-pulse hover:bg-gray-200 cursor-default hover:scale-110 delay-100 duration-300 ease-in-out rounded-lg text-[#10B981] py-3 px-6 justify-around flex mt-9">
                        <Link
                        href="/more">Learn
                        More</Link></button>
            </div>
            <div
            className="container mt-[6.25rem] w-[15rem] m+:w-[20.563rem] mx-[1.125rem] m+:h-[25rem] border bg-white shadow-lg rounded-xl">
                <img src="/image/Rectangle 34.png" alt="" className="relative s-:w-1/2  rounded-full -mt-[3.125rem] mx-auto"/>
                <h1 className="text-2xl font-bold md:text-xl smd:text-lg sm:text-base xs-:text-sm text-center hover:cursor-default m+:px-[4.5rem]">Muhammad Ali</h1>
                <p className="text-base  pt-[1.5rem] text-center m-:px-3 smd:text-sm sm:text-sm xs-:text-xs s+:px-3 m+:px-[2.125rem] hover:cursor-default">Finding a Job that
                    matches your skills & interest is a lot easier now,
                    You can browse the Jobs & apply whenever & wherever you want.
  Let’s do it something earlier.</p>
                <button
                    className="mx-auto bg-[#F3F4F6] m-:mb-3 text-base smd:text-sm sm:text-sm xs-:text-xs hover:animate-pulse hover:bg-gray-200 cursor-pointer hover:scale-110 delay-100 duration-300 ease-in-out rounded-lg text-[#10B981] py-3 px-6 justify-around flex mt-9">
                        <Link href="/more"> Learn
                        More </Link></button>
            </div>


        </div>
        <div className="social container mx-auto">
            <div className="container flex-col mx-auto s+:w-[43rem] justify-center text-center mt-40 m-:mt-20">
                <h1 className="text-4xl md:3xl smd:2xl sm:text-xl xs-:text-lg  font-extrabold  text-center justify-center">
                    We’re available on more than 20+ Social Media Companies World Wide!</h1>
                <p className="text-lg smd:text-base sm:text-sm xs-:text-xs mt-9 text-center justify-center">
                    We’ve all the required Catagories that you can Explore from</p>
            </div>
            <div className="links flex-wrap flex justify-center l+:px-[15rem] mb-40 m-:mb-20 mt-[5.063rem] s-:mx-7 items-center mx-auto ">
                <Link href="/more" ><a className="link m+:p-7 s+:p-3.5 ml-3 mt-3 rounded-full   hover:animate-pulse  hover:bg-gray-200 shadow-lg cursor-pointer hover:scale-110 delay-100 duration-300 ease-in-out"
                    > <img src="/image/links/be.png" className="s-:w-1/2 s-:mx-auto s-:py-2"alt=""/> </a></Link>
                <Link href="/more"><a className="link  m+:p-7 s+:p-3.5 ml-3 mt-3 rounded-full hover:animate-pulse  hover:bg-gray-200 shadow-lg cursor-pointer hover:scale-110 delay-100 duration-300 ease-in-out"
                   > <img src="/image/links/t.png" className="s-:w-1/2 s-:mx-auto s-:py-2"alt=""/> </a></Link>
                <Link href="/more"><a className="link  m+:p-7 s+:p-3.5  ml-3 mt-3 rounded-full hover:animate-pulse  hover:bg-gray-200 shadow-lg cursor-pointer hover:scale-110 delay-100 duration-300 ease-in-out"
                    ><img src="/image/links/g.png" className="s-:w-1/2 s-:mx-auto s-:py-2"alt=""/> </a></Link>
                <Link href="/more"><a className="link m+:p-7 m+:px-8 s+:p-3.5  ml-3 mt-3 rounded-full hover:animate-pulse   hover:bg-gray-200 shadow-lg cursor-pointer hover:scale-110 delay-100 duration-300 ease-in-out s-:px-2 s+:px-[1.375rem]"
                   > <img src="/image/links/f.png" className="s-:w-1/2 s-:mx-auto s-:py-2"alt=""/></a></Link>
                <Link href="/more"><a  className="link m+:p-6 s+:p-3.5  mt-3  ml-3 rounded-full hover:animate-pulse  hover:bg-gray-200 shadow-lg cursor-pointer hover:scale-110 delay-100 duration-300 ease-in-out"
                     ><img src="/image/links/tw.png" className="s-:w-1/2 s-:mx-auto s-:py-2"alt=""/></a></Link>
                <Link href="/more"><a  className="link m+:p-7 s+:p-3.5  mt-3  ml-3 rounded-full  hover:animate-pulse  hover:bg-gray-200 shadow-lg cursor-pointer hover:scale-110 delay-100 duration-300 ease-in-out"
                    ><img src="/image/links/in.png" className="s-:w-1/2 s-:mx-auto s-:py-2"alt=""/></a></Link>
                <Link href="/more"><a  className="link m+:p-7 s+:p-3.5  mt-3 ml-3 rounded-full   hover:animate-pulse hover:bg-gray-200 shadow-lg cursor-pointer hover:scale-110 delay-100 duration-300 ease-in-out"
                    ><img src="/image/links/i.png" className="s-:w-1/2 s-:mx-auto s-:py-2"alt=""/></a></Link>
                <Link href="/more"><a  className="link m+:p-7 s+:p-3.5  mt-3 ml-3 rounded-full  hover:animate-pulse hover:bg-gray-200 shadow-lg cursor-pointer hover:scale-110 delay-100 duration-300 ease-in-out"
                    ><img src="/image/links/b.png"className="s-:w-1/2 s-:mx-auto s-:py-2" alt=""/></a></Link>
                <Link href="/more"><a  className="link m+:p-6 s+:p-3.5  mt-3 ml-3 rounded-full hover:animate-pulse  hover:bg-gray-200 shadow-lg cursor-pointer hover:scale-110 delay-100 duration-300 ease-in-out "
                    ><img src="/image/links/tw.png" className="s-:w-1/2 s-:mx-auto s-:py-2"alt=""/></a></Link>
                <Link href="/more"><a className="link m+:p-7 s+:p-3.5  mt-3 ml-3 rounded-full hover:animate-pulse  hover:bg-gray-200 shadow-lg cursor-pointer hover:scale-110 delay-100 duration-300 ease-in-out s-:px-1 s+:px-[1.063rem]"
                    ><img src="/image/links/p.png"className="s-:w-1/2 s-:mx-auto s-:py-2" alt=""/></a></Link>
                <Link href="/more"><a className="link m+:p-7 s+:p-3.5  mt-3 ml-3 rounded-full  hover:animate-pulse hover:bg-gray-200 shadow-lg cursor-pointer hover:scale-110 delay-100 duration-300 ease-in-out"
                    ><img src="/image/links/i.png"className="s-:w-1/2 s-:mx-auto s-:py-2" alt=""/></a></Link>
                <Link href="/more"><a className="link m+:p-7 s+:p-3.5  mt-3 ml-3 rounded-full  hover:animate-pulse hover:bg-gray-200 shadow-lg cursor-pointer hover:scale-110 delay-100 duration-300 ease-in-out"
                   > <img src="/image/links/be.png" className="s-:w-1/2 s-:mx-auto s-:py-2"alt=""/></a></Link>
  
            </div>
        </div>

    </div>

    </div>
  )
}

export default Body