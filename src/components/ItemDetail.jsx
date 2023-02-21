import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col d-flex align-items-center justify-content-center">
                    <img src={item.imagen} alt={item.nombre} width={450} />
                </div>
                <div className="col d-flex align-items-center mt-5">
                    <div>
                        <h1>{item.nombre}</h1>
                        <p>{item.descripcion}</p>
                        <p><b>${item.precio}</b></p>
                        <ItemCount stock={item.stock} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;