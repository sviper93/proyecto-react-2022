import "./Menu.css"
import { NavLink, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

const Menu = () => {

    const usuario = useContext(UserContext)

    const navigation = useNavigate()

    return (
        <nav className="main-menu">
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/criptomonedas">Lista de criptos</NavLink></li>
                <li><NavLink to="/perfil">Perfil de {usuario.name}</NavLink></li>
                <a onClick={() => {
                    localStorage.removeItem("tokenEDmarket")
                    navigation("/login")
                }}>Cerrar Sesión</a>
            </ul>
        </nav>
    )
}

export default Menu