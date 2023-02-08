import axios from "axios"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import "./Login.css"

const Login = () => {

    const navigation = useNavigate()
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const[cargando, setCargando] = useState(false)
    const[error, setError] = useState()

    const submit = (e) => {
        e.preventDefault()
        setCargando(true)
        setError(null) // 1. Esto se añade para evitar que el mensaje de error se mantenga en pantalla
        // todo el tiempo y sólo aparezca cuando se produce el error
        axios.post(`https://reqres.in/api/login`, user)
        .then(data => {
            setCargando(false)
            localStorage.setItem("tokenEDmarket", data.data.token)
            navigation("/")
        })
        .catch(e => {
            setCargando(false)
            console.error(e)
            setError(e.response.data.error)
        })
    }

    if (localStorage.getItem("tokenEDmarket")) return <Navigate to="/" />

    return (
        <div className="login-container">
            <h1>Iniciar Sesión</h1>
            <form onSubmit={submit}>
                <div className="field">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input required onChange={(e) => {
                        setUser({
                            ...user,
                            email: e.target.value,
                        })
                    }} type="email" name="email"/>
                </div>
                <div className="field">
                    <label htmlFor="password">Contraseña</label>
                    <input required onChange={(e) => {
                        setUser({
                            ...user,
                            password: e.target.value
                        })
                    }} type="password" name="password"/>
                </div>
                <div className="submit">
                    <input type="submit"
                    className="link"
                    value={cargando ? "cargando..." : "Ingresar"}
                    />
                </div>
            </form>
            {
                error && <span className="error">Error: {error}</span>
            }
        </div>
    )
}

export default Login