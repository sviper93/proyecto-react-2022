import { useParams } from "react-router-dom"
import "./CriptoPage.css"
import usePetition from "../../hooks/usePetition"
import CriptoInfo from "./info/CriptoInfo"
import CriptoHistory from "./info/CriptoHistorial"

const CriptoPage = () => {

    const params = useParams()

    const [cripto, cargandoCripto] = usePetition(`assets/${params.id}`)
    const [history, cargandoHistory] = usePetition(`assets/${params.id}/history?interval=d1`)

    if (cargandoCripto ||cargandoHistory) return <span>Cargando...</span>
    
    return (
        <div className="cripto-page-container">
            { cripto && <CriptoInfo cripto={cripto}/> }
            { history && <CriptoHistory history={history}/> }
        </div>
    )
}

export default CriptoPage