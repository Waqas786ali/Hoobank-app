import React from 'react'

function Button({styles}) {
  return (
    <button type='button' className={` rounded-[10px] outline-none ${styles} font-poppins font-medium text-[18px] text-primary  py-4 px-6  bg-blue-gradient `}> Get Started</button>
  )
}

export default Button;