import React from 'react'

export default function FileDisplay(props) {
  const { handleAudioReset, file, audioStream } = props
  return (
    <main className='flex-1 p-4 flex flex-col gap-3 text-center sm:gap-4 justify-center pb-20 w-full max-w-prose mx-auto'>
        <h1 className='text-5xl font-semibold sm:text-6xl md:text-7xl'>Your <span className='text-blue-400 bold'>File</span></h1>
        <div className='flex flex-col mx-auto text-left my-4'>
          <h3 className='font-semibold'>Name:</h3>
          <p>{file? file?.name : 'Custom audio'}</p>
        </div>
        <div className='flex items-center justify-between gap-4'>
          <button onClick={handleAudioReset} className='text-slate-400 hover:text-blue-600 duration-200'>Reset</button>
          <button className='specialBtn px-3 p-2 rounded-lg text-blue-400 flex items-center gap-2 font-medium'>
            <p>Transcribe</p>
            <i className='fa-solid fa-pen-nib'></i>
          </button>
        </div>
    </main>
  )
}
 