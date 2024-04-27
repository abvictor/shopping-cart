export function Cart(){
    return (
        <div className="w-full max-w-7xl px-4 max-auto">
            <h1 className="font-medium text-2xl text-center my-4">Seu carrinho</h1>

            <section className="flex items-center justify-between border-b-2 border-gray-300">
                <img 
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MV7N2?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1551489688005"
                    alt="Logo produto no carrinho"
                    className="w-28"
                />
                <strong>Preço: R$ 1.000</strong>

                <div className="flex items-center gap-3">
                    <button className="bg-slate-600 rounded px-2 text-white font-medium flex items-center justify-center">-</button>
                        2
                    <button className="bg-slate-600 rounded px-2 text-white font-medium flex items-center justify-center">+</button>
                </div>

                <strong className="float-right">
                    Subtotal: R$ 1.000
                </strong>
            </section>

            <p className="font-bold mt-4">Total: R$ 1.000</p>
        </div>
    )
}