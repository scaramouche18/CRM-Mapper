import React, { useState } from 'react'

export default function Buttons({text}) {

  const [checked,setChecked] = useState(false)
  const [filter,setFilter] = useState("")

  const handleClick = (e)=>{
    setChecked(prev => !prev)
    setFilter(e.target.textContent)
  }
  
  console.log(filter);


  return (
    <>
        <button className='rounded-xl w-[40%] flex justify-around  hover:bg-blue-400 p-2' onClick={handleClick}>

          <input type="checkbox" checked = {checked}/>
          {text}
        </button>
    </>
  )
}
