import styles from './Li.module.css'

const Li = (props) => {
    return (
        <li className={styles.list}>
            <img src={props.img} alt={props.img}></img>
            <div>{ props.children }</div>
        </li>
    )
}

export default Li;