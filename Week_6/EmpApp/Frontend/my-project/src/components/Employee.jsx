
import { useLocation } from "react-router";

function Employee() {
  //read state received in navigation
  const { state } = useLocation();

  return (
    <div className="p-2 border-3 rounded-4xl w-100 text-2xl font-bold">
      <p>Name: {state.name}</p>
      <p>Email {state.email}</p>
      <p>Mobile: {state.mobile}</p>
      <p>Designation: {state.designation}</p>
      <p>Company Name: {state.companyName}</p>
    </div>
  );
}

export default Employee;