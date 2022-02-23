import './CostMeMoney.css'

function CostMeMoney(props) {
  return (
    <div>
      <div className="cost">
        <h3>{props.id}</h3>
      </div>
      <div className="cost">
        <h3>{props.item}</h3>
      </div>
      <div className="cost">
        <h3>${props.price}</h3>
      </div>
    </div>
  )
}

export default CostMeMoney
