import {useState} from 'react'

const Searchbar = ({onAdd}) => {


 

  return (
    <div className="flex s-:mx-0 mx-auto  s-:bg-black s-:text-white items-center
    l+:container justify-center m+:text-center s-:flex-col s-:w-1/2 m+:justify-around 
    x+:w-3/4 shadow-lg -mt-14 s-:-mt-44 absolute  s+:left-0 s+:right-0 border rounded-lg  bg-white ">
      <form onSubmit={onSubmit}>
        
       <div className="flex justify-center items-center text-center ">
           <img className="s+:pt-[2.656rem] m+:ml-10 s-:invert s-:w-1/3 s-:mr-3 s-:py-5 s+:pb-[2.226rem] smd:ml-5" src="img/Frame.png" alt="location logo"/>
           <h2 className="text-lg sm:text-sm xs-:text-xs cursor-default s-:pt-2 smd:mr-3 m+:ml-4">Location</h2>
       </div>
       <img className="my-auto m+:pl-1.5 m+:ml-1.5" src="img/_.png" alt="line"/>

       <input className="outline-0 text-sm s-:text-xs smd:-mr-9 md:-mr-5 s-:pl-6 s-:bg-black mx-auto text-clip  items-center "type="text" placeholder="Enter Your Location Here!"
       onChange={(e) => setText(e.target.value)} />
       <div className="bg-[#D1D5DB] s-:opacity-50 s+:h-[7.625rem] s+:w-[0.01rem] s-:my-3 s-:w-[7.625rem] s-:h-[0.01rem] "></div>
       <select onChange={(e) => setCatagory(e.target.value)}
       name="Catagory" defaultValue={'Catagory'} className="bg-white s-:text-sm s-:py-3 s-:bg-black s-:text-white mx-auto my-0 smd-text text-lg outline-0 cursor-pointer transition-all ease-in-out delay-100 duration-300"
           id="city">
             <option className='bg-white text-black hover:bg-green-500' value='Catagory' disabled>Catagory</option>
           <option className='bg-white text-black ' value="c1">catagory1</option>
           <option className='bg-white text-black 'value="C2">catagory2</option>
       </select>
       <div className="bg-[#D1D5DB] s-:opacity-50 s+:h-[7.625rem] s+:w-[0.01rem] s-:my-3 s-:w-[7.625rem] s-:h-[0.01rem] "></div>

       <select onChange={(e) => setSkill(e.target.value)}
       name="Skills" defaultValue={'Skills'} className="bg-white sm:text-sm xs-:text-xs s-:py-3 s-:bg-black s-:text-white text-lg mx-auto outline-0 cursor-pointer "
          id="skills">
            <option value='Skills' disabled>Skills</option>
           <option value="Skill1">Skill1</option>
           <option value="skill2">skill2</option>
       </select>
       <div className="bg-[#D1D5DB] s-:opacity-50 s+:h-[7.625rem] s+:w-[0.01rem] s-:w-[7.625rem] s-:my-3 s-:h-[0.01rem] "></div>


       <input onClick={ alert('Please Add location')}
           className="font-medium px-6 l+:px-12 smd:mx-5 s-:mb-5 s-:text-sm py-3.5 m+:mx-10 hover:animate-pulse hover:bg-green-400 cursor-pointer bg-[#10B981] rounded-lg text-white"
           type="submit" value="Search" />
   </form>
   </div>
  )
}

export default Searchbar