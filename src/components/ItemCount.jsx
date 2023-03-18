import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {
    const [items, setItems] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAgregado, setItemAgregado] = useState(false);

    const incrementarStock = () => {
        if (items < itemStock) {
            setItems(items + 1);
        }
    }

    const decrementarStock = () => {
        if (items > 1) {
            setItems(items - 1);
        }
    }

    const addToCart = () => {
        if (itemStock >= items) {
            setItemStock(itemStock - items);
            setItems(1);
            console.log("Agregaste: " + items + " Productos al Carrito!");
            setItemAgregado(true);
            onAdd(items);
        }
    }

    useEffect(() => {
        setItemStock(stock);
    }, [stock]);

    return (
        <div className="container">
            <div className="row my-1">
                <div className="col">
                    <div className="btn-group">
                        <button className="btn btn-secondary text-dark" onClick={decrementarStock}>-</button>
                        <button className="btn btn-secondary text-dark">{items}</button>
                        <button className="btn btn-secondary text-dark" onClick={incrementarStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col">
                    {itemAgregado ? <Link to={"/cart"} className="btn btn-secondary text-dark">Terminar mi compra</Link> : 
                    <button className="btn btn-secondary text-dark" onClick={addToCart}>Agregar Al Carrito</button>}
                </div>
            </div>
        </div>
    )
}

export default ItemCount;