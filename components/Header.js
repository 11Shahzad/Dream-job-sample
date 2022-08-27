import { useContext, useReducer }  from 'react'
import { LogContext } from '../pages/api/Context';
import styles from '../styles/Header.module.css'

const Header = (props) => {
 const {login, setLogin } = useContext(LogContext);


  return (
    <header className='header bg-black text-white justify-center'>

   
      <div id="para" className="cursor-default relative xs-:px-3 x+:container x+:pr-[46rem] lg:pl-20 lg:pr-[40rem] md:pr-[32rem] md:pl-10 smd:pr-[24.5rem] smd:pl-3 s-:pl-3 flex s-:flex-col m+:pt-[5.5rem] mx-auto l+:pl-20 ">
            <div className="flex-col ">

                <div className=" x+:text-6xl lg:text-4xl md:text-3xl s-:items-center s-:text-center sm:text-lg xs-:text-base text-white font-black justify-around leading-[3.75rem]">
                    <h1>{props.heading}</h1>
                </div>

                <div className=" l+:text-lg md:text-base s-:items-center s-:text-center sm:text-sm xs-:text-xs mt-8 text-white font-normal">
                    <p>Finding a Job that matches your skills & interest is a lot easier now,
                        You can browse the Jobs & apply whenever & wherever you want.<img
                            className="absolute left-[24rem] s-:hidden top-[30rem]" src="/image/circle.png" alt=""/></p>
                </div>
                <div className="flex text-md items-center xs-:justify-around sm:text-sm xs-:text-xs xs-:px-3 smd:pl-3 sm:pl-3 leading-7 space-x-5 pt-9 pb-[12.5rem]">
                    <h1>Protect {login? 'On' : 'Off'} </h1>
                     <label className={styles.switch}>
                        <input name='Remote' id='remote' type="checkbox"checked={login}  onChange={(e) => setLogin(e.currentTarget.checked) }
   
                    />
                        <span className={` ${styles.slider} ${styles.round}`}></span>
                    </label> 
                

                    <h1>Onsite</h1>
                    <label className={styles.switch}>
                        <input name='Remote'  type="checkbox"/>
                        <span className={`${styles.slider} ${styles.round}`}></span>
                    </label> 

                    <img src="/image/Group 100.png" alt="lines" className="absolute s-:hidden top-[30.375rem] left-[2.37rem]"/>
                </div>
            </div>
            <img className="z-10 absolute top-[3.313rem] left-[4rem] m-:hidden" src="/image/dec.png" alt=""/>
            <img src="/image/Group 100.png" alt="lines" className=" absolute  top-[4.563rem] right-[35.925rem] md:right-[20rem] lg:right-[29.925rem] z-10 m-:hidden"/>
        
            <div className="flex s-:flex-col"> <img id="toprec" className="toprec x+:hidden absolute top-0 right-0 s-:top-[9rem] xs-:top-[13rem] xs-:w-5/12 sm:w-2/5  z-0 w-1/2 x+:w-fit"
                    src="/image/Rectangle 30.png" alt=""/></div>
        </div>
        <img id="toprec" className="toprec absolute top-24 z-0 right-0  hidden x+:block"
            src="/image/Rectangle 30.png" alt=""/>

    
      </header>
  )}

Header.defaultProps={
  title:'Default-title'
}
//function check()
//{
 // const x=document.getElementById('remote')
  //const y=document.getElementById('login')
//}
  //   if (x.checked === true){
//     console.log('disabled')
//     y.setAttribute('disabled', 'false' )
//   } 
//   else{
//     y.removeAttribute('disabled')
//     console.log('enabled')
//   }
// }
Header.defaultProps = {
  heading: 'Your Dream Job is waiting for you!'
  
}
export default Header