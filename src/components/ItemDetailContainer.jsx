import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const dataBase = getFirestore();
        const document = doc(dataBase, "items", id);
        getDoc(document, id).then(element => {
            setItem({id:element.id, ...element.data()});

        });
    }, [id]);

    return (
        <ItemDetail item={item} />
    )
}

export default ItemDetailContainer;