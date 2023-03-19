import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./Contexto/CartContext";
import trash from "./images/trash2.svg";

const Cart = () => {
    const { cart, clear, removeItem, cartTotal, cartSum } = useContext(CartContext);

    if (cartTotal() === 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="con-md-12">


                        <div className="alert alert-warning text-center" role="alert">
                            No se encontraron productos en el carrito!
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row my-5">
                <div className="con-md-12">
                    <table className="table">
                        <tbody>
                        <tr>
                            <td className="text-end" colSpan={5}><Link className="btn btn-warning bg-warning" onClick={() => { clear() }}>Vaciar carrito</Link></td>
                        </tr>
                        {
                            cart.map(item => (
                                <tr key={item.index}>
                                    <td className="text-start" width="10%"><img src={item.imagen} alt={item.nombre} width={120} /></td>
                                    <td className="text-start align-middle" width="40%">{item.nombre}</td>
                                    <td className="text-center align-middle" width="20%">{item.quantity} x ${item.precio}</td>
                                    <td className="text-center align-middle" width="20%">${item.quantity * item.precio}</td>
                                    <td className="text-end align-middle" width="10%"><button type="button" className="btn btn-warning" onClick={() => { removeItem(item.index) }} title={"Eliminar el producto"}><img src={trash} alt={"Eliminar producto"} width={32} /></button></td>
                                </tr>

                            ))
                        }
                        <tr>
                            <td colSpan={2}>&nbsp;</td>
                            <td className="text-center">Total a pagar</td>
                            <td className="text-center"><b>${cartSum()}</b></td>
                            <td>&nbsp;</td>
                        </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;