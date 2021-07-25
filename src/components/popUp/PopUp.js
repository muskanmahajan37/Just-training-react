import './styles/popUp.css';

const PopUp = function (props) {
    return (
        <div className="popUp" id={props.id} onMouseLeave={props.onMouseLeave}>
            <div>
                <div className="image">
                    <img src="./user-1.jpg"></img>
                </div>
                <div className="info">
                    <p>{ props.nome }</p>
                    <p>seguidores</p>
                    <p>mora em d</p>
                </div>
            </div>
            <div className="buttons">
                <button>Adicionar</button>
                <button>Mensagem</button>
                <button>op</button>
            </div>
        </div>
    );
};

export default PopUp;
