import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

function ExpenseItem(props) {
  //這個通常取名叫props， 這樣比較不容易搞混。
  /* 
  props is a super important concept because it allows you to make your components reuseable
  and it allows you to pass data from another component to this component.
  */

  return (
    /*
        the value of this special children props will always be the content between the opening and closing tags of your custom components.
        <Card></Card> 會像 wrapper 一樣包起來，這樣 Card 包住的都能吃到 Card.css ，需要寫一隻 Card.js 來做這個 wrapper
    */
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  )
}

export default ExpenseItem
