import React from 'react'

export default function HomePage() {
    return(
        <div>
            <header className='flex items-center justify-between gap-6 p-6'>
                <h1 className='font-medium'>Free<span className='text-blue-400 bold'>Scribe</span></h1>
                <button className='flex items-center gap-2 specialBtn px-3 py-2 rounded-lg text-blue-400'>
                    <p>New</p>
                    <i className='fa-solid fa-plus'></i>
                </button>
            </header>
        </div>
    )
}