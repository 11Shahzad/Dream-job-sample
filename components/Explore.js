import React from 'react'

const Explore = () => {
    return (
        <div>
            <div
        className="justify-around flex cursor-default items-center l+:text-4xl md:text-3xl smd:text-2xl s-:text-xl font-extrabold leading-9 m+:mt-[18.75rem] smd:mt-[15rem] s-:mt-[11rem] mx-auto text-[#10B981]">
        <h1>Explore Dream Studio</h1>
    </div>
            <div className="flex justify-center flex-wrap  items-center mx-auto s+:mt-[5rem]  ">
                <div
                    className="hover:bg-white cursor-pointer mt-[1rem] hover:animate-pulse hover:scale-110 hover:shadow-lg delay-100 duration-300 ease-in-out text-center rounded-lg">
                    <a href="#">
                        <h1 className="font-bold text-2xl md:text-xl w-fit mx-auto smd:text-lg s-:text-base xs-:text-sm leading-6 pt-6 flex text-center justify-around pb-6">Software
                        </h1>
                        <img className="s+:px-[2.3125rem] s-:w-1/2  mx-auto pt-[5.563]" src="img/software.png" alt="pc logo" />
                        <p className="pb-6 leading-4 md:text-sm smd:text-sm sm:text-sm xs-:text-xs w-fit mx-auto ">View More</p>
                    </a>
                </div>
                <div
                    className="hover:bg-white cursor-pointer  mt-[1rem] hover:animate-pulse hover:scale-110 hover:shadow-lg delay-100 duration-300 ease-in-out text-center rounded-lg">
                    <a href="#">
                        <h1 className="font-bold text-2xl md:text-xl w-fit mx-auto smd:text-lg s-:text-base xs-:text-sm leading-6 pt-6 flex text-center justify-around pb-6">Design
                        </h1>
                        <img className="s+:px-[2.3125rem] s-:w-1/2  mx-auto pt-[5.563]" src="img/design.png" alt="pc logo" />
                        <p className="pb-6 leading-4 md:text-sm smd:text-sm sm:text-sm  w-fit mx-auto xs-:text-xs">View More</p>
                    </a>
                </div>
                <div
                    className="hover:bg-white cursor-pointer mt-[1rem] hover:animate-pulse hover:scale-110 hover:shadow-lg delay-100 duration-300 ease-in-out text-center rounded-lg">
                    <a href="#">
                        <h1 className="font-bold text-2xl md:text-xl w-fit mx-auto smd:text-lg s-:text-base xs-:text-sm leading-6 pt-6 flex text-center justify-around pb-6">Finance
                        </h1>
                        <img className="s+:px-[2.3125rem] s-:w-1/2  mx-auto pt-[5.563]" src="img/finance.png" alt="pc logo" />
                        <p className="pb-6 leading-4 md:text-sm smd:text-sm sm:text-sm w-fit mx-auto xs-:text-xs">View More</p>
                    </a>
                </div>
                <div
                    className="hover:bg-white cursor-pointer mt-[1rem] hover:animate-pulse hover:scale-110 hover:shadow-lg delay-100 duration-300 ease-in-out text-center rounded-lg">
                    <a href="#">
                        <h1 className="font-bold text-2xl md:text-xl w-fit mx-auto smd:text-lg s-:text-base xs-:text-sm leading-6 pt-6 flex text-center justify-around pb-6">
                            Photography</h1>
                        <img className="s+:px-[2.3125rem] s-:w-1/2  mx-auto pt-[5.563]" src="img/photography.png" alt="pc logo" />
                        <p className="pb-6 leading-4 md:text-sm smd:text-sm sm:text-sm w-fit mx-auto xs-:text-xs">View More</p>
                    </a>
                </div>
                <div
                    className="hover:bg-white cursor-pointer mt-[1rem] hover:animate-pulse hover:scale-110 hover:shadow-lg delay-100 duration-300 ease-in-out text-center rounded-lg">
                    <a href="#">
                        <h1 className="font-bold text-2xl w-fit mx-auto md:text-xl smd:text-lg s-:text-base xs-:text-sm leading-6 pt-6 flex text-center justify-around pb-6">Management
                        </h1>
                        <img className="s+:px-[2.3125rem] s-:w-1/2  mx-auto pt-[5.563]" src="img/software.png" alt="pc logo" />
                        <p className="pb-6 leading-4 md:text-sm smd:text-sm sm:text-sm  xs-:text-xs w-fit mx-auto">View More</p>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Explore