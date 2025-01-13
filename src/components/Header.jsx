import styles from './Header.module.css';
import ignateLogo from '../assets/ignite-logo.svg';

export function Header() {
    return (
        <div>
            <header className={ styles.header }>
            <img src={ ignateLogo } alt='logotipo do ignate'/>
            </header>
        </div>
    );
}