import React, { useState } from "react";
import AddNewUser from "./components/addNewUser/AddNewUser";
import UserList from "./components/userList/UserList";
const App = () => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredProfissao, setEnteredProfissao] = useState("");
    const [enteredMunicipio, setEnteredMunicipio] = useState("");
    const [userList, setUserList] = useState([]);

    const changeUsername = function (e) {
        setEnteredUsername(e.target.value);
    };

    const changeProfissao = function (e) {
        setEnteredProfissao(e.target.value);
    };

    const changeMunicipio = function (e) {
        setEnteredMunicipio(e.target.value);
    };

    const createAccount = function (e) {
        e.preventDefault();
        setUserList((prevList) => {
            const previous = [...prevList];
            previous.unshift({
                nome: enteredUsername,
                profissao: enteredProfissao,
                municipio: enteredMunicipio
            });
            console.log(userList)
            return previous;
        });
    };

    return (
        <>
            <div className="wrapper">
                <AddNewUser
                    onChangeUsername={changeUsername}
                    onChangeProfissao={changeProfissao}
                    onChangeMunicio={changeMunicipio}
                    onSubmit={createAccount}
                />
            </div>

            <div className="account_wrapper">
                <UserList
                    item={userList}
                />
            </div>
        </>
    );
};

export default App;
