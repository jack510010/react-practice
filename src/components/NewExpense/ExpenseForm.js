import React, { useState } from 'react'

import './ExpenseForm.css'

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('') // 可以這樣寫，但是今天如果有 100個 變數，你就不會這樣寫
  const [enteredAmount, setEnteredAmount] = useState('') // 可以這樣寫，但是今天如果有 100個 變數，你就不會這樣寫
  const [enteredDate, setEnteredDate] = useState('') // 可以這樣寫，但是今天如果有 100個 變數，你就不會這樣寫

  //   const [userInput, setUserInput] = useState({
  //     100個 變數的寫法，你會這樣寫
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: '',
  //   })

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value) // 1、2個變數的寫法
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value,
    // })
    // setUserInput((preState) => {
    // 這串看一下 z筆記.txt， 筆記位置是 setUserInput((preState)
    //   return { ...preState, enteredTitle: e.target.value }
    // })
  }

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: e.target.value,
    // })
  }

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredDate: e.target.value,
    // })
  }

  const submitHandler = (e) => {
    e.preventDefault()

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }

    console.log(expenseData) // 測試是否有效果

    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('') // 這三個是讓表單送出後，欄位會清空
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
