import { useState } from "react";
import AddUserAccount from "./components/addUserAccount/AddUserAccount";
import UserList from "./components/userList/UserList";


const App = () => {
    const [userAccountCollection, setUserAccountCollection] = useState([]);

    const sendInformations = function (uName, uAge) {
        const newAccount = {
            text: uName,
            age: uAge,
            id: Math.random().toString(),
        };
        setUserAccountCollection((previous) => {
            const newAccountList = [...previous];
            newAccountList.unshift(newAccount);
            return newAccountList;
        });
    };

    return (
        <>
            <AddUserAccount onSendInformations={sendInformations} />
            <div class="wrapper">
                <UserList item={userAccountCollection} />
            </div>
        </>
    );
};

export default App;
