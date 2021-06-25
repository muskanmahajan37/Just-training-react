import './Li.module.css';

const Li = (props) => {
    return (
        <li>
            <img src={props.img} alt={props.alt}></img>
            <div>{props.children}</div>
        </li>
    )
}

export default Li;