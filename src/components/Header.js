import styles from "./Header.module.css";
import Li from './Li';
import { AiOutlineHome } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import { BsBuilding } from "react-icons/bs";
import { TiGroup } from "react-icons/ti";

import { CgMenuGridR } from "react-icons/cg";
import { TiMessages } from "react-icons/ti";
import { IoMdNotifications } from "react-icons/io";
import { BsCaretDownFill } from "react-icons/bs";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="./logo.png" alt="logo"></img>
                <input type="search" placeholder="Pesquisar no Facebook" />
            </div>
            <div className={styles.menu_navigation}>
                <nav>
                    <ul>
                        <Li message="Página Inicial">
                            <AiOutlineHome />
                        </Li>
                        <Li message="Amigos">
                            <FaUserFriends />
                        </Li>
                        <Li message="Watch">
                            <MdOndemandVideo />
                        </Li>
                        <Li message="Marketplace">
                            <BsBuilding />
                        </Li>
                        <Li message="groups">
                            <TiGroup />
                        </Li>
                    </ul>
                </nav>
            </div>
            <div className={styles.user_navigation}>
                <div className={styles.user_profile}>
                    <img src="./perfil.jpg" alt="profile"></img>
                    <span>Victor</span>
                </div>
                <div className={styles.user_menu}>
                    <ul>
                        <li>
                            <CgMenuGridR/>
                        </li>
                        <li>
                            <TiMessages/>
                        </li>
                        <li>
                            <IoMdNotifications/>
                        </li>
                        <li>
                            <BsCaretDownFill/>
                        </li>
                    </ul>
                </div>
            </div>

        </header>
    );
};

export default Header;
