// import AppRoutes from "./routes/AppRoute";

// const App = () => {
//   return(
//     <AppRoutes/>
//   )
// }
// export default App;
import React, { useEffect, useState } from "react";
import { FiPhone, FiUser } from "react-icons/fi";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/users/")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
        <p className="text-gray-500 text-xl animate-pulse">Loading users...</p>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
        <p className="text-red-500 text-xl">{error}</p>
      </div>
    );

  if (users.length === 0)
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
        <p className="text-gray-500 text-xl">No users found.</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 flex flex-col gap-6 justify-center items-center p-6">
      {users.map((user) => (
        <div
          key={user.id}
          className="max-w-md w-full p-6 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300 cursor-pointer flex items-center space-x-4"
        >
          <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-purple-400 via-pink-500 to-red-500 flex justify-center items-center text-white font-bold text-3xl select-none">
            {user.first_name.charAt(0).toUpperCase()}
            {user.last_name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
              <FiUser />
              {user.first_name} {user.last_name}
            </h2>
            <p className="text-pink-600 text-lg font-medium">@{user.username}</p>
            <p className="mt-2 flex items-center gap-2 text-gray-600 text-md">
              <FiPhone />
              {user.phoneNumber}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
