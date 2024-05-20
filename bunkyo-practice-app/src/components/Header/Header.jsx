import BunkyoLogo from '../../assets/logo_bunkyo.png';
import styles from './Header.module.css';

export default function Header() {

    const address = "Calle Valverde 13, Madrid - 91 0133 383 - "
    const email = "info@escuelabunkyo.com";

    return (
        <header>
            <div className={styles.container} >
                <p>{address}
                    <a href="mailto:info@escuelabunkyo.com">{email}
                    </a> | <a id="accesoAlumnos" href="">Acceso alumnos</a>
                </p>
                <a href="/">
                    <img src={BunkyoLogo} alt="" />
                </a>

            </div>
        </header>
    );
}