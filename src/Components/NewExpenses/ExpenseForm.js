import React from 'react'
import './ExpenseForm.css'
import { useState } from 'react'
export default function ExpenseForm() {
  
  const [enterTitle, setEnterTitle] = useState('');
  const [enterAmount, setEnterAmount] = useState('');
  const [enterDate, setEnterDate] = useState('');

  const titleChangeHandler = (e) => {
    setEnterTitle(e.target.value)
  }
  const amountChangeHandler = (e) => {
    setEnterAmount(e.target.value)
  }
  const dateChangeHandler = (e) => {
    setEnterDate(e.target.value)
  }

  return (
    <div>
        <form >
            <div className='new-expense__controls'>
            <div className='new-expense__control'>
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
            <label>Amount</label>
            <input type="number" onChange={amountChangeHandler} min="0.01" step="0.01" />
            </div>
            <div className='new-expense__control'>
            <label>Date</label>
            <input type="date" onChange={dateChangeHandler}  />
            </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Submit</button>
            </div>

        </form>
    </div>
  )
}
