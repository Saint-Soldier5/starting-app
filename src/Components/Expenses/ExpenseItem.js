import React from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import "./ExpenseItem.css"
import { useState } from 'react';


export default function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title)

function handleClick(){
  setTitle("Updated!!!!")
  console.log(title)
}
  
  return (
    <Card className='expense-item'>
      
      <ExpenseDate date = {props.date} />
      
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <p className='expense-item__price'> $ {props.amount}</p>
      </div>
      <button onClick={handleClick}>Change title</button>

    </Card>
  );
}
