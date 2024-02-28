import React from 'react'
import { useState } from 'react'

import QrContainer from '../QrContainer'
import { FaBolt } from 'react-icons/fa'

const InputField = () => {
  const [userInput, setUserInput] = useState("")
  const [isQRGenerated, setIsQRGenerated] = useState(false)
  const [qrCode, setQrCode] = useState('')

  let randomQRCode = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${userInput}`;
  
  const handleSubmit = (e) => {
    e.preventDefault();
      
    if (userInput !== '') {
      setUserInput("")
      setIsQRGenerated(true)
      setQrCode(randomQRCode)
    } else {
      alert("Please give input");
    }
  }
    
  const onChangeUserInput = (e) => {
    setUserInput(e.target.value)
  }
    
  return (
    <div className='w-full min-h-36 flex flex-col justify-center items-center'>
      <div className='input-container bg-orange-300 mt-10 w-2/4 min-h-36 rounded-xl flex flex-col justify-center items-center mb-4 py-6 space-y-3'>
        <h1 className='font-serif text-2xl font-bold text-emerald-500'>QR Code Generator</h1>
        <form onSubmit={handleSubmit} className='w-3/5 space-y-5 flex flex-col justify-center items-center'>
          <input 
            className='pl-3 w-full h-8 rounded font-mono text-base focus:outline-none focus:ring focus:ring-sky-300'
            type='text' 
            value={userInput} 
            placeholder='Type here...'
            onChange={onChangeUserInput}
          />

          <div className='flex flex-row justify-around items-center bg-green-400 min-w-48 min-h-10 px-2 rounded-md hover:bg-green-600'>
            <FaBolt className='font-semibold text-lg'/>
            <button className='font-sans font-semibold text-lg' type='submit'>
              Generate QR Code
            </button>
          </div>
        </form>
      </div>
      
      <div className='mb-10 w-full flex flex-col justify-center items-center rounded-xl'>
        <div className='w-2/4 h-96 bg-white flex flex-col justify-center items-center rounded-xl'>
          {isQRGenerated ? 
            <>
              <img 
                className='w-64 '
                src={qrCode} alt={userInput} 
              />
            </> 
            : 
            <QrContainer />
          }
        </div>
      </div>

      <div className='flex flex-row self-end mr-10 px-4 bg-black'>
        <h2 className='font-serif text-lg italic font-bold text-rose-700 underline decoration-white decoration-solid'>
          By CodeWithYash...
        </h2>
      </div>
    </div>
  )
}

export default InputField