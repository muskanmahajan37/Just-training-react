import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
import React, {useState} from 'react'

function App() {
    const [userInfo, setUserInfo] = useState([])

    function addUser(uName, uAge){
        setUserInfo((prevInfo) => {
            return [...prevInfo, {name: uName, age: uAge}]
        })
    }

    return <div className="App">
        <AddUser onAddUser={addUser}/>
        <UserList users={userInfo}/>
    </div>;
}

export default App;
