function IdCard(props) {

 
  return (
    <div class="idcard">
    <div class="idcard-img">
      <img src={props.picture} alt={props.name} width="200px" />
      </div>
      <div>
        <p>
          <b>First Name:</b> {props.firstName}
        </p>
        <p>
          <b>Last Name:</b> {props.lastName}
        </p>
        <p>
          <b>Gender:</b> {props.gender}
        </p>
        <p>
          <b>Height:</b> {props.height}
        </p>
        <p>
          <b>Birth:</b> {props.birth}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
