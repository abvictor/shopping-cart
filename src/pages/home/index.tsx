import { useState, useEffect } from "react";
import {useContext} from 'react'
import { BsCartPlus } from "react-icons/bs";

import { CartContext } from "../../contexts/CartContext";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";


import { db } from '../../services/firebase/firebaseConnection'
import {collection, onSnapshot} from 'firebase/firestore'

export interface ProductProps{
    id: string;
    title: string;
    description: string;
    price: number;
    cover: string;
}

export function Home(){
    const [products, setProducts] = useState<ProductProps[]>([])
    const { addItemCart } = useContext(CartContext)


    useEffect(() => {
      const unsub = onSnapshot(collection(db, "products"), (snapshot) => {
          const productsList: ProductProps[] = [];
          
          snapshot.forEach((doc) => {
              const product: ProductProps = {
                  id: doc.id,
                  title: doc.data().title,
                  description: doc.data().description,
                  price: doc.data().price,
                  cover: doc.data().cover,
              };
              
              productsList.push(product);
          });
          setProducts(productsList);
      });
  
      return () => unsub();
  }, []);

      console.log(products)


    function handleAddCartItem(product:ProductProps){
        toast.success("Produto adicionado ao carrinho!")
        addItemCart(product)
    }


    return (
        <div>
            <main className="w-full max-w-7xl px-4 mx-auto">
                <h1 className="font-bold text-2xl mb-4 mt-10 text-center">Produtos recomendados</h1>
                
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
                   {products.map((product) => (
                     <Link to={`/product/${product.id}`} key={product.id}>
                        <section className="w-full ">
                        <img src={product.cover} alt={product.title} className="w-full rounded-lg max-h-70 mb-2"/>    
                        <p className="font-medium mt-1 mb-2">{product.title}</p>

                        <div className="flex gap-3 items-center">
                            <strong className="text-zinc-700/90">{product.price.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</strong>
                            <button className="bg-zinc-900 p-1 rounded hover:bg-zinc-900/70" onClick={() => handleAddCartItem(product)}>
                                <BsCartPlus size={20} color="#FFF"/>
                            </button>
                        </div>                  
                    </section>
                     </Link>
                   ))}
                </div>
            </main>
        </div>
    )
}