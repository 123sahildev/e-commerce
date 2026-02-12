import { useSelector, useDispatch } from "react-redux";
import Header from "../components/header";
import { data, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { initialRender } from "../thunks/initialRender";
import { changeCategory } from "../thunks/changeCategory";
import { useEffect } from "react";
import { productAction } from "../reduxtool/slice";
import axios from "axios";

export const CardDetails = () => {
    const { id, cateName } = useParams()

    const imgPath = useSelector(state => state.contents.allProducts.find(tr => tr.id.toString() == id))
    const checkBrand = imgPath?.brand ? imgPath?.brand : 'Unknown brand'
    const dispatch = useDispatch();

    useEffect(() => {
        let renderProducts = () => {
            dispatch(changeCategory(cateName))
        }

        renderProducts();
    }, []);

    const checkdouble = useSelector(state => state.contents.cartProducts.find(tr => tr.id === imgPath.id));
    
    const addToCart = async() => {
        let localId = localStorage.getItem("userId");

        let res = await axios.post('http://10.215.54.229:5000/addcards',
            {data : {...imgPath, userId : localId}}
        )
        console.log(res.data.message);

        if (checkdouble) {
            console.log('frontend this card already exist!');
            return
        }
        dispatch(productAction({type : 'addtocart', product : imgPath}));
        
    }
    
    return (
        <div className="absolute left-1  top-30 flex flex-col l:flex-row max-w-max">
            <img src={imgPath?.images[0]} alt="" className="l:h-80 l:w-80 w-60 h-60 outline outline-[#aaaa]" />
            <div className="flex flex-col">
                <h1 className=" font-[Arial] mt-2 ml-2 font-bold text-[20px]">{imgPath?.title}</h1>
                <p className=" w-75 m-2 mt-1 text-[15px] font-[Arial] max-w-fit">{imgPath?.description}</p>
                
                <small className="ml-2 mt-2 font-[Arial] font-bold text-[#00ff00] text-[17px]">{checkBrand}</small>
                <div className="mt-1 w-max rounded-[3px] px-2 ml-2 flex items-center text-white font-[Arial] font-bold bg-[#ff1900]">
                    OFF
                    <h1 className="text-white  font-[Arial] ml-1.5">{imgPath?.discountPercentage+'%'}</h1>
                </div>
                <p className="mt-2 font-[Arial] ml-2 text-[20px] text-[#ff4400] font-bold">{`${imgPath ? 'Rs.'+imgPath.price+'$': "loading..."}`}</p>
                <div className="flex ml-2  mt-3 gap-2 items-center bottom-0 w-max l:absolute">
                    <button onClick={addToCart} className="l:h-11 px-4 l:py-0 py-1 l:px-8 text-white font-[Arial] l:text-[23px] text-[18px] font-bold rounded-[5px] duration-300 cursor-pointer hover:bg-[#fe6303] bg-[#03fe25]">Add to cart</button>
                    <button className="l:h-11 l:px-8 px-4 l:py-0 py-1 text-white font-[Arial] l:text-[23px] text-[18px] font-bold rounded-[5px] duration-300 cursor-pointer hover:bg-[#03fe25] bg-[#f92904]">Buy now</button>
                </div>
            </div>
        </div>
    )
} 




export default function productDetails() {
  return (
    <>
        <Header />
        <CardDetails />
    </>
  )
}
