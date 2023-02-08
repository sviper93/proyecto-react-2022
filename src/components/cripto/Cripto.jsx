import "./Cripto.css"
import { Link } from "react-router-dom"

const Cripto = ({id, name, priceUsd, symbol, changePercent24Hr}) => { // 2. No olvidar añadir el id
    return (
        <div className="cripto">
            <h2>{name}</h2>
            <div className="info">
                <p><span className="label">Precio: </span>{parseFloat(priceUsd).toFixed(4)}</p>
                <p><span className="label">Código: </span>{symbol}</p>
                <p>
                    <span className="label">Variación 24 Horas: </span>
                    <span className={parseFloat(changePercent24Hr) > 0 ? "positivo" : "negativo"}>
                        {parseFloat(changePercent24Hr).toFixed(3)}%
                    </span>
                </p>
                <Link to={`/criptomonedas/${id}`}>Ver detalles</Link>
            </div>
        </div>
    )
}

export default Cripto