import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    return (
    <>
        <div className='p-5 bg-gray-800 md:px-44'>
        <div className='p-3 grid grid-cols-1 justify-items-start md:justify-items-center'>
            <div className='p-2 md:pl-36 justify-items-start md:justify-items-center grid md:grid-cols-2 grid-cols-1 w-screen mb-10'>
                <div id='logo_socialMedia' className='mr-0 md:mr-28 lg:mr-44'>
                    <span className='text-[2.5rem] font-light text-white'>News Arena</span>
                </div>
                <div className="relative flex flex-row" id="icons">
                    <div className='mx-5 p-3 pt-5 scale-150 text-gray-400 hover:text-white float-right'>
                        <InstagramIcon/>
                    </div>
                    <div className='mx-5 p-3 pt-5 scale-150 text-gray-400 hover:text-white float-left'>
                        <LinkedInIcon/>
                    </div>
                </div>
            </div>
            <div className='text-gray-500 md:text-center'>
                <span>© 2022 Abbas Dalal All Rights Reserved.</span>
            </div>
        </div>
    </div>
    </>
  )
}
