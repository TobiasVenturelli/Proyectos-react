import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import ItemList from "./ItemList";
import Cargando from "./Cargando";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [cargando, setCargando] = useState(true);
    const {id} = useParams();
    useEffect(() => {
        const dataBase = getFirestore();
        const itemsCollection = collection(dataBase, "items");
        const filtrado = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(filtrado).then(elements => {
            setItems(elements.docs.map(element => ({id:element.id, ...element.data()})));
            setCargando(false);
        })

    }, [id]);



    return (
        <div className="container">
            {cargando ? <Cargando /> : <ItemList items={items} />}
        </div>
    )
}

export default ItemListContainer;