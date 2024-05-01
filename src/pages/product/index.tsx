import {useParams, useNavigate} from 'react-router-dom'
import { ProductProps } from '../home'
import { BsCartPlus } from 'react-icons/bs'
import toast from 'react-hot-toast'
import { CartContext } from "../../contexts/CartContext";
import {useContext} from 'react'
import { useFetchDocument } from '../../hooks/useFetchDocument'

export function Product(){

    const { id } = useParams()
    const { addItemCart } = useContext(CartContext)
    // const [product, setProduct] = useState<ProductProps>()

    const { document: product, loading } = useFetchDocument("products", id);
    console.log(product)
    
    const navigate = useNavigate()

    // useEffect(()=>{
    //     async function getProducts(){
    //         const response = await api.get(`/products/${id}`)
    //         setProduct(response.data)
    //     }
    //     getProducts()
    // },[id])

    function handleAddCartItem(product:ProductProps){
        toast.success("Produto adicionado ao carrinho!")
        addItemCart(product)
        navigate('/cart')
    }
    

    return (
        <div className='max-w-full flex justify-center'>
            <section className='flex mt-10 max-w-7xl h-auto px-4 p-1 rounded'>
                <div className='flex flex-col justify-center items-center'>
                    <img src={product?.cover} className='w-44 h-44'/>
                    <span className='text-slate-600 font-bold text-2xl'>{product?.title}</span>
                    <p>{product?.description}</p>
                   <div className='flex gap-3'>
                        <strong className='text-2xl text-slate-600'>{product?.price.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        })}</strong>
                        <button className="bg-zinc-900 p-1 rounded hover:bg-zinc-900/70" onClick={() => handleAddCartItem(product!)}>
                            <BsCartPlus size={20} color="#FFF"/>
                        </button>
                   </div>
                </div>

            </section>
        </div>
    )
}
