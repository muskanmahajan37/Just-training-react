import "./styles/popUp.css";

const PopUp = function (props) {
    return (
        <div className="popUp" onMouseLeave={props.onMouseLeave}>
            <div>
                <div className="image">
                    <img src={props.img}></img>
                </div>
                <div className="info">
                    <p>{props.nome}</p>
                    <p>{props.seguidores} seguidores</p>
                    <p>mora em {props.municipio}</p>
                </div>
            </div>
            <div className="buttons">
                <button onClick={props.onAddFriend} id={ props.id }>{props.adicionarText}</button>
                <button>Mensagem</button>
                <button>...</button>
            </div>
        </div>
    );
};

export default PopUp;
