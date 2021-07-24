import "./style/PopUp.css";

const PopUp = (props) => {
    return (
        <div class="overlay">
            <div class="modal">
                <header>
                    <h3>{props.header}</h3>
                </header>
                <div class="content"></div>
                <footer>
                    <p>{props.footer}</p>
                    <button class="close-btn" onClick={props.onCloseModal}>
                        Close modal
                    </button>
                </footer>
            </div>
        </div>
    );
};

export default PopUp;
