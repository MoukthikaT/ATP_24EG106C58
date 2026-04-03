import { useState } from "react";
import UserCard from "./components/UserCard";

function App() {
  const [count, setCount] = useState(0);

  const users = [
    { id: 1, name: "User1", email: "user1@gmail.com", role: "Developer" },
    { id: 2, name: "User2", email: "user2@gmail.com", role: "Tester" },
    { id: 3, name: "User3", email: "user3@gmail.com", role: "Manager" },
    { id: 4, name: "User4", email: "user4@gmail.com", role: "HR" }
  ];

  function OnClick() {
    setCount(count + 1);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Total Count: {count}</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "10px",
        justifyItems: "center"
      }}>
        {users.map((u) => (
          <UserCard
            key={u.id}
            name={u.name}
            email={u.email}
            role={u.role}
            onAdd={OnClick}
          />
        ))}
      </div>
    </div>
  );
}

export default App;