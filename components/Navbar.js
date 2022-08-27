import Link from "next/link"
  import { useContext }  from 'react'
  import { useRouter } from "next/router"
  import { LogContext } from '../pages/api/Context'

const Navbar = () => {

const red= '#ff0000'
 const gree= '#34D399'

 const router=useRouter()
const {login}= useContext(LogContext)
function link(){
  
    if (login){
      router.push('/#')
    }
    else{
    router.push('/login')}}

    return (
        <div className="bg-black">
        <div className="x+:container bg-black text-white xs-:px-3 l+:pl-20 md:px-10 smd:px-2 l+:pr-6 l-:pr-6 flex mx-auto justify-between items-center pt-5 pb-6 ">
      
        <div className="flex cursor-pointer sm:pl-3">
            <Link href="/"><img src="/image/logo.png" alt="logo"/></Link>
        </div>

        <ul className="flex sm:absolute sm:right-1 sm:top-1 l+:text-lg sm:text-sm s-:hidden sm:flex-col text-base space-y-1 m+:w-2/5 font-semibold items-center justify-between">
            <li className="cursor-pointer hover:text-[#34D399] tracking-[0.0019rem] leading-[1.75rem] hover:animate-pulse hover:scale-110 delay-100 duration-300 ease-in-out">
                <Link href="/Products">Product</Link>
            </li>
            <img src="/image/dots.png" alt="dots"/>
            <li className="cursor-pointer hover:text-[#34D399] hover:animate-pulse hover:scale-110 delay-100 duration-300 ease-in-out">
                <Link href="/Performance"> Performance </Link>
            </li>
            <img src="/image/dots.png" alt="dots"/>
            <li className="cursor-pointer hover:text-[#34D399] hover:animate-pulse hover:scale-110 delay-100 duration-300 ease-in-out">
                <Link href="/Dashboard">Dashboard </Link>
            </li>
    </ul> 
        <div className="items-center sm:absolute sm:top-[6.5rem] sm:right-0 s-:hidden sm:flex-col space-y-2 flex">
            <a href={ login ? '/' : '/login'}>
                <button  className={`${login ? 'text-red-900':'text-[#34D399]' } mt-0 mx-9 l+:text-lg md:text-base sm:text-sm cursor-pointer hover:animate-pulse hover:text-[#fff] hover:scale-110 delay-100 duration-300 ease-in-out font-semibold leading-7`}
> { login ? 'Offline' : 'Login'}</button></a>
          
           <Link  href="/signup">
               <button
                className="bg-[#10B981] hover:animate-pulse hover:bg-green-400 shadow-lg l+:text-lg md:text-base sm:text-sm xs-:text-xs hover:scale-110 delay-100 duration-300 ease-in-out font-medium m+leading-7 sm:py-1 sm:px-3 py-2.5 px-7 rounded-lg">
                    Sign Up</button></Link>
        </div>

    </div>
    </div>
  )
}

export default Navbar
// function handleChange() {
//     if(document.getElementById('remote').checked == true){
//         document.getElementById("login").removeAttribute("disabled");
//     }else{
//         document.getElementById("login").setAttribute("disabled", "disabled");
//    }
// }
// function login () {
//     var x=document.getElementById('login')
//    var  y=document.getElementById('remote')
    
//     if (y.checked == true){
//        x.disabled== true
//        }
//         else {x.disabled== false
//         }
//     }
    



    // function myFunction() {
    //     var element = document.getElementById("menu");
    //     element.classList.toggle(`${styles.mystyle}`);
    //     var element = document.getElementById("para");
    //     element.classList.toggle(`${styles.mystyle1}`);
    //  }

