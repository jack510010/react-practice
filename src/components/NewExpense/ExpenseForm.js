import React, { useState } from 'react'

import './ExpenseForm.css'

const ExpenseForm = () => {
  //   const [enteredTitle, setEnteredTitle] = useState('')  可以這樣寫，但是今天如果有 100個 變數，你就不會這樣寫
  //   const [enteredAmount, setEnteredAmount] = useState('')  可以這樣寫，但是今天如果有 100個 變數，你就不會這樣寫
  //   const [enteredDate, setEnteredDate] = useState('')  可以這樣寫，但是今天如果有 100個 變數，你就不會這樣寫

  const [userInput, setUserInput] = useState({
    // 100個 變數的寫法，你會這樣寫
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  })

  const titleChangeHandler = (e) => {
    // console.log('Title changed~~') //測試效果，沒錯是我要的
    // console.log(e.target.value)    測試效果，沒錯是我要的

    // setEnteredTitle(e.target.value) 1、2個變數的寫法

    setUserInput({
      // 100個 變數的寫法

      ...userInput,
      //! 這裡前面一定要寫『 ...userInput 』， 如果光是單單寫 『enteredTitle: e.target.value』的話， enteredAmount、enteredDate 這兩個變數就會被丟掉。

      enteredTitle: e.target.value,
    })
  }

  const amountChangeHandler = (e) => {
    // setEnteredAmount(e.target.value)

    setUserInput({
      ...userInput,
      enteredAmount: e.target.value,
    })
  }

  const dateChangeHandler = (e) => {
    // setEnteredDate(e.target.value)
    setUserInput({
      ...userInput,
      enteredDate: e.target.value,
    })
  }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
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
