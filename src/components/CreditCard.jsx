function CreditCard(props) {
  const last4Digits = () => {
    return '**** '.repeat(3) + props.number.slice(props.number.length - 4);
  };

  const cardStyle = {
    backgroundColor: props.bgColor,
    color: props.color,
    width:"300px",
    height:"150px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div style={cardStyle} class="credit-card">
      <h2>{last4Digits()}</h2>
      <div class="credit-card-info">
        <p>Expires {props.expirationMonth.toString().padStart(2, '0')}/
        {props.expirationYear
          .toString()
          .substring(props.expirationYear.toString().length - 2)}</p>
          <p>{props.owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
