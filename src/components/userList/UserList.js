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
    },
    {
        nome: "La Voipe",
        seguidores: "100",
        municipio: "Vitória",
        faculdade: "EEEFM. Dr josé Moysés",
        profissao: "estudante",
        img: "./user-2.jpg",
        id: "n2",
    },
    {
        nome: "Brenda Ker",
        seguidores: "600",
        municipio: "Vila velha",
        faculdade: "EEEFM. Dr Maria Augusta Tavares",
        profissao: "Programador",
        img: "./user-3.jpg",
        id: "n3",
    },
    {
        nome: "Jhayane Kelly",
        seguidores: "56",
        municipio: "Serra",
        faculdade: "UFES",
        profissao: "Medicina Veterinária",
        img: "./user-4.jpg",
        id: "n4",
    },
];

const UserList = (props) => {
    const [showPopUp, setShowPopUp] = useState();
    const [currentPopUp, setCurrentPopUp] = useState([]);
    const displayPopUp = (e) => {
        const newItem = userAccounts.filter((acc) => acc.id === e.target.id);
        setCurrentPopUp(...newItem);
        setShowPopUp(true);
        console.log(e);
    };

    const mouseLeave = function () {
        setShowPopUp(false);
    };

    return (
        <ul className="user_list">
            {userAccounts.map((acc) => {
                return (
                    <li className="user_item" key={acc.id}>
                        {currentPopUp.id === acc.id && showPopUp && (
                            <PopUp
                                nome={currentPopUp.nome}
                                id={currentPopUp.id}
                                key={currentPopUp.id}
                                onMouseLeave={mouseLeave}
                            />
                        )}
                        <div className="picture">
                            <img src="./user-1.jpg"></img>
                        </div>
                        <div className="user_informations">
                            <p
                                className="username"
                                onMouseEnter={displayPopUp}
                                id={acc.id}
                            >
                                {acc.nome}
                            </p>
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
