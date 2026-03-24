function User(props) {
  const { userObj } = props
  return (
    <div className="border-2 rounded-4xl p-5 shadow-2xl ">
      <img className="m-auto mb-5 rounded-3xl ring-1" src={userObj.image} alt="Image not found" />
      <h2 className=" align-middle font-bold ">{userObj.name}</h2>
      <p className="font-bold">{userObj.email}</p>
    </div>
  )
}
export default User
