import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    /* useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
            }, 2000);
        });
        promesa.then((respuesta) => {
            setItems(respuesta);
        });
    }, [id]); */

    /* useEffect(() => {
        const dataBase = getFirestore();
        const itemCollection = collection(dataBase, "items");

        arrayProductos.forEach(item => {
            addDoc(itemCollection, item);
        });

        console.log("Se agregaron los productos");
    }, []); */

    useEffect(() => {
        const dataBase = getFirestore();
        const itemsCollection = collection(dataBase, "items");
        const filtrado = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(filtrado).then(elements => {
            setItems(elements.docs.map(element => ({id:element.id, ...element.data()})));
        })

    }, [id]);



    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;