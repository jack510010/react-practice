import React, { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

function ExpenseItem(props) {
  // 這個通常取名叫props， 這樣比較不容易搞混。
  /* 
  ! props is a super important concept because it allows you to make your components reuseable
  ! and it allows you to pass data from another component to this component.
  */

  const [title, setTitle] = useState(props.title)
  /* 
  這個 useState() 不能宣告在第一個 function 外面，也不能宣告在巢狀 function 裡面。 useState() 括號裡面需要給一個初始值
  useState() actually returns an array where the first value is the variable itself, 
  And the second element in the array is that updating function.

  useState() is a hook, always returns an array with exactly 2 elements.
  And always that the first element is the current state value. And the second element is a function for updating that.
  */

  const clickHandler = () => {
    //! 事件的命名用 xxxHandler 會比較好，你一眼看過去就知道這個是事件，例如 onClick 之類的
    //console.log('clicked!!!!!!!')，這個是測試我的 clickHandler 是否有在對的位置上呈現我想要的效果。 是有效果的～～

    setTitle('Updated')
    console.log(title)
  }

  return (
    /*
        the value of this special children props will always be the content between the opening and closing tags of your custom components.
        <Card></Card> 會像 wrapper 一樣包起來，這樣 Card 包住的都能吃到 Card.css ，需要寫一隻 Card.js 來做這個 wrapper
    */
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  )
}

export default ExpenseItem
