import React from 'react'


export default function Navbar
    () {
    return (
        <>
            <header className="w-full sticky z-50 top-0 text-gray-600 body-font">
                <div className="container w-full bg-[#627254] opacity-100 flex flex-wrap p-5 flex-col md:flex-row items-center md:justify-between ">
                    <div>                    
                            <a className=" flex title-font font-medium items-center text-gray-100 mb-4 md:mb-0 " href="/">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-purple-500 rounded-full" viewBox="0 0 24 24">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                                </svg> */}
                                <img className='pl-2' src="/dic_logo.png" alt="oops" />

                                <span className="ml-3 text-2xl">Wordly Words</span>
                            </a>
                    </div>

                    <nav className=" flex flex-wrap items-center text-base justify-between ">

                        <a className="mr-16 scroll-m-2 text-gray-100 hover:underline underline-offset-8" href="#search">Synonyms</a>                       
                        <a className="mr-16 text-gray-100 hover:underline underline-offset-8" href="#search">Rhyming</a>
                        <svg className="w-4 mr-40 h-4 text-gray-100 dark:text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </nav>

                    

                </div>
            </header>
        </>
    )
}
