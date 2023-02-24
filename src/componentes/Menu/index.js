import styles from './Menu.module.css'
import MenuLink from "../MenuLink";

export default function Menu() {
  return (
    <header>
        <nav className={styles.navegacao}>
            <MenuLink to="/home">
                Home
            </MenuLink>
            <MenuLink to="/login">
                Login
            </MenuLink>
            <MenuLink to="/cadastro">
                Cadastro
            </MenuLink>
        </nav>
    </header>
  )
}
