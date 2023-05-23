
function Random(props) {
  return (
    <div>Random number : {Math.floor(Math.random() * (props.max - props.min) + props.min)}</div>
  )
}

export default Random