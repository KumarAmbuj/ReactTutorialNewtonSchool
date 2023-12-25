function Card(props) {
  return (
    <div className="card">
      <div>Nmae: {props.user.firstName + " " + props.user.lastName}</div>
      <div>Age: {props.user.age}</div>
      <div>Gender: {props.user.gender}</div>
      <div>Email: {props.user.email}</div>
      <div>Username: {props.user.username}</div>
    </div>
  );
}
export default Card;
