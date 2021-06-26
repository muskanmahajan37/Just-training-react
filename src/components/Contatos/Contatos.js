import styles from './Contatos.module.css';
import User from './User';
import { MdVideoCall } from 'react-icons/md';
import { BiSearchAlt2 } from 'react-icons/bi';
import { HiDotsHorizontal } from 'react-icons/hi';

const Contatos = () => {
    return (
        <div className={styles.contatos}>
            <div>
                <p>Patrocinado</p>
            </div>
            <div className={styles.items}>
                <p>Contatos</p>
                <div>
                    <MdVideoCall />
                    <BiSearchAlt2 />
                    <HiDotsHorizontal/>
                </div>

            </div>
            <ul>
                <User img={'./perfil.jpg'}>Steven Carl</User>
                <User img={'./perfil.jpg'}>Steven Carl</User>
                <User img={'./perfil.jpg'}>Steven Carl</User>
                <User img={'./perfil.jpg'}>Steven dfdCarl</User>
                <User img={'./perfil.jpg'}>Steven Carl</User>
                <User img={'./perfil.jpg'}>Steven Cdfdfarl</User>
                <User img={'./perfil.jpg'}>Steven Carl</User>
                <User img={'./perfil.jpg'}>Steven Carl</User>
                <User img={'./perfil.jpg'}>Steven Cadfdfrl</User>
                <User img={'./perfil.jpg'}>Steven Carl</User>
                <User img={'./perfil.jpg'}>Steven Carl</User>
                <User img={'./perfil.jpg'}>Steven Carl</User>
                <User img={'./perfil.jpg'}>Steven Carl</User>
                <User img={'./perfil.jpg'}>Steven Carl</User>
                <User img={'./perfil.jpg'}>Steven Carl</User>
                <User img={'./perfil.jpg'}>Steven Carl</User>
                <User img={'./perfil.jpg'}>Steven Carl</User>
            </ul>
        </div>
    )
}

export default Contatos;