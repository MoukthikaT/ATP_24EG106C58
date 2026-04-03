function UserCard(props) {
  return (
    <div style={{
      border: "1px solid black",padding: "10px",width: "150px",textAlign: "center"}}>
      <h4>{props.name}</h4>
      <p>{props.email}</p>
      <p>{props.role}</p>

      <button onClick={props.onAdd}>Add User</button>
    </div>
  );
}

export default UserCard;