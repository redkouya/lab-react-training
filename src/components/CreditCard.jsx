

function CreditCard(props) {


    const last4Digits=()=>{
        return "**** ".repeat(3)+props.number.slice(props.number.length-4)
    }
  return (
    <div>
    <h2>{last4Digits()}</h2>
    <p>Expires {props.expirationMonth.toString().padStart(2,'0')}/{props.expirationYear.toString().substring(props.expirationYear.toString().length-2)}</p>

    </div>
  )
}

export default CreditCard