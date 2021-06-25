import styles from './AsideOptions.module.css';

const AsideOptions = (props) => {
    return (
        <div className={styles.AsideOptions}>
            <img src={props.img}></img>
            <span>{ props.children }</span>
        </div>
    )
}

export default AsideOptions;