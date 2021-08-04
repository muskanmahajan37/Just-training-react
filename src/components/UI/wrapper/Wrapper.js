import styles from './Wrapper.module.css';

const Wrapper = function (props) {
    return (
        <div className={`${styles['wrapper']} ${props.className}`}>
            {props.children}
        </div>
    )
}

export default Wrapper;