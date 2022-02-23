import ExpenseItem from './components/ExpenseItem'
import CostMeMoney from './components/CostMeMoney'

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]

  const spendMoney = [
    {
      id: 1,
      item: 'ps5',
      price: 600,
      date: new Date(2022, 1, 1),
    },
    {
      id: 2,
      item: 'MacBook Pro',
      price: 1200,
      date: new Date(2021, 12, 31),
    },
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>

      <CostMeMoney
        id={spendMoney[0].id}
        item={spendMoney[0].item}
        price={spendMoney[0].price}
      />
      <CostMeMoney
        id={spendMoney[1].id}
        item={spendMoney[1].item}
        price={spendMoney[1].price}
      />
    </div>
  )
}

export default App
