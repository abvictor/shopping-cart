import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { Link } from "react-router-dom"
import { ProductProps } from "../home"

export function Cart(){

    const { cart, total, addItemCart, removeItemCart } = useContext(CartContext)


    return (
        <div className="w-full justify-center px-4 max-auto">
            <h1 className="font-medium text-2xl text-center my-4">Seu carrinho</h1>
            {cart.length === 0 && (
                <div className="flex flex-col items-center justify-center">
                    <p className="font-medium">Parece que o carrinho está vazio...</p>
                    <Link to="/" className="bg-slate-600 my-3 p-1 px-3 text-white font-medium rounded">Voltar para os produtos</Link>
                </div>
            )}
            {cart.map((item) => (
              <section className="flex items-center justify-between border-b-2 border-gray-300">
                 <img 
                     src={item.cover}
                     alt={item.title}
                     className="w-28"
                 />
                 <strong>Preço: {item.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                     })}</strong>
 
                 <div className="flex items-center gap-3">
                     <button className="bg-slate-600 rounded px-2 text-white font-medium flex items-center justify-center" onClick={()=> removeItemCart(item)}>-</button>
                         {item.amount}
                     <button className="bg-slate-600 rounded px-2 text-white font-medium flex items-center justify-center" onClick={() => addItemCart(item as ProductProps)}>+</button>
                 </div>
 
                 <strong className="float-right">
                     Subtotal: {item.total.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                     })}
                 </strong>
              </section>
            ))}

            {cart.length !== 0 && (
                <p className="font-bold mt-4">Total: {total}</p>
            )}
        </div>
    )
}