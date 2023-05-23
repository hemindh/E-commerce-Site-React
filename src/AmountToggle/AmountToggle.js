import React from 'react'
import '../App.css'

const AmountToggle = ({amount  , setIncrease , setDecrease}) => {
  return (
    <div className='flex'>
   <div className='amount_plus'>

   <button type='button' onClick={() => setDecrease()} className='Minus'>
    -
   </button>
   </div>
   <span className='Qun'>{amount}</span>

   <div className='amount_minus'>

   <button type='button'  onClick={() => setIncrease()} className='Plus'>
    +
   </button>
   </div>

    </div>
  )
}

export default AmountToggle