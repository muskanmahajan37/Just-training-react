import styles from './User.module.css';
import UserNavigation from './UserNavigation';
const User = () => {
    return (
        <div className={styles.user}>
            <div className={styles.user_profile}>
                <img src="./perfil.jpg" alt="perfil"></img>
                <span>Victor</span>
            </div>
            <div>
                <UserNavigation>Menu</UserNavigation>
                <UserNavigation>Messenger</UserNavigation>
                <UserNavigation>Notificações</UserNavigation>
                <UserNavigation>Conta</UserNavigation>
            </div>
        </div>
    )
}

export default User;