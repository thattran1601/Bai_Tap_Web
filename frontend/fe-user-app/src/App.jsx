import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://bai-tap-web-ye3z.onrender.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div style={{padding:"20px"}}>
      <h1>Danh sách người dùng</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>
                <button onClick={() => {
                  if (window.confirm("Bạn có chắc chắn muốn xóa người dùng này?")) {
                    fetch(`https://bai-tap-web-ye3z.onrender.com/users/${user.id}`, {
                      method: "DELETE"
                    })
                      .then((res) => res.json())
                      .then(() => {
                        setUsers(users.filter((u) => u.id !== user.id));
                      })
                      .catch((err) => console.error(err));
                  }
                }}>
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
         </table>
    </div> 
  );
}
export default App;