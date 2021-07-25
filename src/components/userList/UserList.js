import "./styles/UserList.css";
import React, { useState } from "react";
import PopUp from "../popUp/PopUp";

const userAccounts = [
    {
        nome: "Silas Calebe",
        seguidores: "45",
        municipio: "Cariacica",
        faculdade: "Multivix",
        ocupacao: "Advogado",
        img: "./user-1.jpg",
        id: "n1",
        add: "Adicionar",
        cancelar: "cancelar",
    },
    {
        nome: "La Voipe",
        seguidores: "100",
        municipio: "Vitória",
        faculdade: "EEEFM. Dr josé Moysés",
        profissao: "estudante",
        img: "./user-2.jpg",
        id: "n2",
        add: "Adicionar",
        cancelar: "cancelar",
    },
    {
        nome: "Brenda Ker",
        seguidores: "600",
        municipio: "Vila velha",
        faculdade: "EEEFM. Dr Maria Augusta Tavares",
        profissao: "Programador",
        img: "./user-3.jpg",
        id: "n3",
        add: "Adicionar",
        cancelar: "cancelar",
    },
    {
        nome: "Jhayane Kelly",
        seguidores: "56",
        municipio: "Serra",
        faculdade: "UFES",
        profissao: "Medicina Veterinária",
        img: "./user-4.jpg",
        id: "n4",
        add: "Adicionar",
        cancelar: "cancelar",
    },
];

const UserList = (props) => {
    const [showPopUp, setShowPopUp] = useState();
    const [currentPopUp, setCurrentPopUp] = useState([]);

    // const [conectionRequest, sendConectionRequest] = useState(true);

    const displayPopUp = (e) => {
        const newItem = userAccounts.filter((acc) => acc.id === e.target.id);
        setCurrentPopUp(...newItem);
        setShowPopUp(true);
    };

    const mouseLeave = function () {
        setShowPopUp(false);
    };

    const AddFriend = function (e) {
        e.preventDefault();

        setCurrentPopUp((currentPopUp.add = "cancelar"));
    };

    return (
        <ul className="user_list">
            {userAccounts.map((acc) => {
                return (
                    <li className="user_item" key={acc.id}>
                        {currentPopUp.id === acc.id && showPopUp && (
                            <PopUp
                                nome={currentPopUp.nome}
                                img={currentPopUp.img}
                                id={currentPopUp.id}
                                adicionarText={currentPopUp.add}
                                seguidores={currentPopUp.seguidores}
                                municipio={currentPopUp.municipio}
                                key={currentPopUp.id}
                                onAddFriend={AddFriend}
                                onMouseLeave={mouseLeave}
                            />
                        )}
                        <div className="picture">
                            <img src={acc.img}></img>
                        </div>
                        <div className="user_informations">
                            <span
                                className="username"
                                onMouseEnter={displayPopUp}
                                id={acc.id}
                            >
                                {acc.nome}
                            </span>
                            <p className="seguidores">
                                {acc.seguidores} amigos em comum
                            </p>
                            <p className="municipio">{acc.municipio}</p>
                            <p className="faculdade">
                                estudante em {acc.faculdade}
                            </p>
                            <p className="ocupacao">{acc.ocupacao}</p>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};

export default UserList;
