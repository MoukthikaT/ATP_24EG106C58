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
        let res = await fetch("https://emp-backend-583t.onrender.com/emp-api/employees");
        let resObj = await res.json();

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

  return (
    <div>
      <h1 className="text-3xl text-center pb-6 font-semibold">
        List of Employees
      </h1>

      {/* Adjusted grid for better arrangement */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {emps.length > 0 ? (
          emps.map((empObj) => (
            <div
              key={empObj._id}
              className="bg-blue-700 p-4 text-center text-lg rounded-xl text-white font-medium shadow-md"
            >
              <p className="truncate">{empObj.email}</p>
              <p className="mb-3">{empObj.name}</p>

              <div className="flex justify-center gap-2">
                <button
                  onClick={() => gotoEmpoyee(empObj)}
                  className="bg-amber-300 px-3 py-1 rounded-lg text-sm"
                >
                  View
                </button>

                <button
                  onClick={() => gotoEditEmpoyee(empObj)}
                  className="bg-emerald-500 px-3 py-1 rounded-lg text-sm text-white"
                >
                  Edit
                </button>

                <button className="bg-red-500 px-3 py-1 rounded-lg text-sm text-white">
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-lg col-span-full">
            No Employees Found
          </p>
        )}
      </div>
    </div>
  );
}

export default ListOfEmps;
