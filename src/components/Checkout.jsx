import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { CartContext } from "./Contexto/CartContext";
import {addDoc, collection, getFirestore} from "firebase/firestore"

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");
    const { cart, clear, cartSum } = useContext(CartContext);

    const generarOrden = () => {
        const buyer = { name: nombre, email: email, phone: telefono };
        const fecha = new Date();
        const date = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
        const order = { buyer: buyer, items: { cart }, date: date, total: cartSum() };

        if (nombre.length === 0) {
            return false;
        }

        if (email.length === 0) {
            return false;
        }

        if (telefono.length === 0) {
            return false;
        }


        const dataBase = getFirestore();
        const ordersCollection = collection(dataBase, "orders");
        addDoc(ordersCollection, order).then(data => {
            setOrderId(data.id);
            clear();
        });

    }

    return (
        <div className="container my-5">
            <div className="row">
                <h1 className="text-center">Finalizacion de compra</h1>
                <div className="col-md-3">
                    <form>
                        <div className="mb-3">  
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" onInput={(e) => { setNombre(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="text" class="form-control" id="email" onInput={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefono" className="form-label">Teléfono</label>
                            <input type="text" className="form-control" id="telefono" onInput={(e) => { setTelefono(e.target.value) }} />
                        </div>
                        <button type="button" className ="btn btn-secondary" onClick={generarOrden}>Generar Orden</button>
                    </form>
                </div>
                <div className="con-md-9">
                    <table className="table">
                        <tbody>
                            {
                                cart.map(item => (
                                    <tr key={item.index}>
                                        <td className="text-start" width="10%"><img src={item.imagen} alt={item.nombre} width={60} /></td>
                                        <td className="text-start align-middle" width="40%">{item.nombre}</td>
                                        <td className="text-center align-middle" width="20%">{item.quantity} x ${item.precio}</td>
                                        <td className="text-center align-middle" width="20%">${item.quantity * item.precio}</td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td className="text-center">Total a pagar</td>
                                <td className="text-center"><b>${cartSum()}</b></td>
                            </tr>   
                        </tbody>
                    </table>
                </div>
            </div>
            {orderId ? <Navigate to={"/gracias/" + orderId} /> : ""};
        </div>
    )
}

export default Checkout;