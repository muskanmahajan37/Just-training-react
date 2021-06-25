import './MenuIcon.css';

const MenuIcon = (props) => {
    return (
        <div className="menuIcon">
            <img src={props.img} alt={props.alt}></img>
        </div>
    )
}

export default MenuIcon