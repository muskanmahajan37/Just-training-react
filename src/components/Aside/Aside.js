import styles from "./Aside.module.css";
import AsideOptions from "./AsideOptions";

const Aside = () => {
    return (
        <aside className={styles.aside}>
            <AsideOptions img="./mini.gif">Victor Lyra</AsideOptions>
            <AsideOptions img="https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/FZK_jEWapM0.png">
                COVID-19: Central de Informações
            </AsideOptions>
            <AsideOptions img="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/tSXYIzZlfrS.png">
                Encontrar Amigos
            </AsideOptions>
            <AsideOptions img="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/Im_0d7HFH4n.png">
                Grupos
            </AsideOptions>
            <AsideOptions img="https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/MN44Sm-CTHN.png">
                Markelplace
            </AsideOptions>
            <AsideOptions img="https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/FhOLTyUFKwf.png">
                Watch
            </AsideOptions>
            <AsideOptions img="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/N7UOh8REweU.png">
                Eventos
            </AsideOptions>
            <AsideOptions img="https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/VoY5lgHtw8x.png">
                Empregos
            </AsideOptions>
            <AsideOptions img="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/0gH3vbvr8Ee.png">
                Páginas
            </AsideOptions>
            <AsideOptions img="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/KlDlsO3UxDM.png">
                Salvos
            </AsideOptions>
            <AsideOptions img="https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/Eu3aZOl8riZ.png">Doações de Sangue</AsideOptions>
            <AsideOptions img="https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/nbUcQfHcgBv.png">Favoritos</AsideOptions>
            <AsideOptions img="https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/JQCVtO0LVjk.png">Jogar</AsideOptions>
            <AsideOptions img="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/4Y9Xi2D3hJv.png">Messenger</AsideOptions>
            <AsideOptions img="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/vxMUnHhu6Do.png">Saúde Emocional</AsideOptions>
            <AsideOptions img="https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/9s7nhm949yb.png">Ajuda da Comunidade</AsideOptions>
            <AsideOptions img="https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/VPndBxotRgH.png">Lembranças</AsideOptions>
            <AsideOptions img="https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/1Xvrz50fHMF.png">Messenger Kids</AsideOptions>
        </aside>
    );
};

export default Aside;
