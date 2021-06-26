import styles from './User.module.css'

const User = (props) => {
    return (
        <li className={styles.user}>
            <img src={props.img}></img>
            <span>{ props.children }</span>
        </li>

    )
}

export default User;