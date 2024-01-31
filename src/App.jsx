import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUsername } from "./features/Users";

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [userData, setUserData] = useState({
    name: '',
    username: '',
    newUsername: '',
  });

  const { name, username } = userData;


  const handleChange = (field, value) => {
    setUserData({ ...userData, [field]: value });
  };

  const handleAddUser = () => {
    let newUserId = 1;
  
    if (userList.length > 0) {
      newUserId = userList[userList.length - 1].id + 1;
    }
  
    dispatch(
      addUser({
        id: newUserId,
        name,
        username,
      })
    );
  };
  
  const handleDeleteUser = (userId) => {
    dispatch(deleteUser({ id: userId }));
  };


  return (
    <div className="App">
      <div className="addUser">
        <input
          type="text"
          placeholder="Name..."
          value={name}
          onChange={(event) => handleChange('name', event.target.value)}
          className="input"
        />
        <input
          type="text"
          placeholder="Username..."
          value={username}
          onChange={(event) => handleChange('username', event.target.value)}
          className="input"
        />
        <button className="btn" onClick={handleAddUser}>Add User</button>
      </div>
      <div className="displayUsers">
        {userList.map((user, i) => {
          return (
            <div key={i}>
              <h2 className="name"> {user.name}</h2>
              <p className="user-name"> {user.username}</p>
              <button className="btn" onClick={() => handleDeleteUser(user.id)}>Delete User</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
