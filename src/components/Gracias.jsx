import { Link, useParams } from "react-router-dom";

const Gracias = () => {
    const {orderId} = useParams();



    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    {orderId ? <div className="alert alert-secondary text-center " role="alert"><h3>Gracias por tu Compra!</h3><p>Se generó una Orden de Compra con el numero: <b>{orderId}</b></p></div> : ""}
                    <Link to={"/"} className="btn btn-secondary">Volver a la pagina Principal</Link>
                </div>
            </div>
        </div>
    )
}

export default Gracias;