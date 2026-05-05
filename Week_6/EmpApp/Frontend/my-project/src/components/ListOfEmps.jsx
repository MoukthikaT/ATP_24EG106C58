import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

function ListOfEmps() {
  const [emps, setEmps] = useState([]);
  const navigate = useNavigate();

  const gotoEmpoyee = (empObj) => {
    navigate("/employee", { state: empObj });
  };

  const gotoEditEmpoyee = (empObj) => {
    navigate("/edit-emp", { state: empObj });
  };

  useEffect(() => {
    async function getEmps() {
      try {
        let res = await fetch("http://localhost:4000/emp-api/employees");

        let resObj = await res.json();
        console.log("API response:", resObj);

        // ✅ Handle both response formats
        if (Array.isArray(resObj)) {
          setEmps(resObj);
        } else if (resObj.payload) {
          setEmps(resObj.payload);
        } else {
          setEmps([]);
        }
      } catch (err) {
        console.log("Error fetching employees:", err);
        setEmps([]);
      }
    }

    getEmps();
  }, []);

  console.log("emps:", emps);

  return (
    <div>
      <h1 className="text-4xl text-center pb-8 font-bold">
        List of Employees
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {emps.length > 0 ? (
          emps.map((empObj) => (
            <div
              key={empObj._id}
              className="bg-blue-800 p-5 text-center text-2xl rounded-3xl text-white font-bold"
            >
              <p>{empObj.email}</p>
              <p className="mb-4">{empObj.name}</p>

              <div className="flex justify-around">
                <button
                  onClick={() => gotoEmpoyee(empObj)}
                  className="bg-amber-300 p-2 rounded-2xl"
                >
                  View
                </button>

                <button
                  onClick={() => gotoEditEmpoyee(empObj)}
                  className="bg-emerald-500 p-2 rounded-2xl text-white"
                >
                  Edit
                </button>

                <button className="bg-red-500 p-2 rounded-2xl text-white">
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-xl col-span-full">
            No Employees Found
          </p>
        )}
      </div>
    </div>
  );
}

export default ListOfEmps;