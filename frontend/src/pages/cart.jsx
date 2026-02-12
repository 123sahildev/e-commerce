
import { useEffect } from "react";
import Header from "../components/header.jsx";
import { useSelector , useDispatch} from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faTrash } from "@fortawesome/free-solid-svg-icons";
import { productAction } from "../reduxtool/slice.js";
import axios from "axios";
 

export const CardProducts = () => {
    const dispatch = useDispatch();
    const cartProducts = useSelector(state => state.contents.cartProducts);

    useEffect(() => {

        let renderALlCards = async () => {
        let userCard = localStorage.getItem("userId");
        console.log(userCard);

          if (!userCard || userCard.length === 0) return;

          let res = await axios.post('http://10.215.54.229:5000/allcards',
            {userId : userCard}
          );
          let collected = [];
          res.data.message.forEach(element => {
            collected.push(element.data)
          });
          dispatch(productAction({type : 'addallcards', cards : collected}));

        }      
        renderALlCards();
    }, []);

    const removecart = async(e) => {
      let userId = localStorage.getItem("userId");

      if (e.target.tagName == 'svg'){
        let check = e.target.parentElement.previousSibling.innerText;
        let keep = cartProducts.find(tr => tr?.description.slice(0, 20) === check.slice(0, 20));
        let deleteres = await axios.post('http://10.215.54.229:5000/deletecard',{ id : keep.id, userId : userId });
        dispatch(productAction({type : 'removetocart', id : keep.id }));
      }

      else {
        let check = e.target.parentElement.parentElement.previousSibling.innerText;
        let keep = cartProducts.find(tr => tr?.description.slice(0, 20) === check.slice(0, 20));
        let deleteres = await axios.post('http://10.254.131.229:5000/deletecard',{ id : keep.id });
        dispatch(productAction({type : 'removetocart', id : keep.id, userId : userId }));
      }
    }

  return (
    <>
    <div className="l:w-150 l:visible hidden  outline outline-[#aaaa] l:flex flex-col absolute top-27 left-2 h-full">
      {cartProducts?.map((item, idx) => {
        return <div  key={idx} className="group items-center w-full h-24 outline outline-[#aaaa] mb-2 flex">
          <img src={item?.images[0]} alt="" className=" h-20 ml-2 outline-1 outline-[#aaaa] "/>
          <p className="ml-2 text-[15px] l:w-80 hidden l:block w-50">{item?.description.length > 160 ? item?.description.slice(0, 160)+'........' : item?.description}</p>
      
           <button onClick={removecart}  className="hover:bg-[#ff1e00] group-hover:block  transition-all hover:text-[white] duration-500 mt-4 absolute right-3 ">
           <FontAwesomeIcon icon={faTrash} 
             className=" p-2 text-[50px] " />
           </button>
          
        </div>
      })}
    </div>

    <div className="w-85 visible l:hidden  outline  outline-[#aaaa] flex flex-col absolute top-27 left-2 h-full">
    {cartProducts?.map((item, idx) => {
      return <div  key={idx} className="group  items-center w-full h-19 outline outline-[#aaaa] mb-2 flex">
        <img src={item?.images[0]} alt="" className=" h-12 self-center w-12 ml-2 outline-1 outline-[#aaaa] "/>
        <p className="ml-2 text-[12px] w-53 h-14 ">{item?.description.length > 110 ? item?.description.slice(0, 110)+'........' : item?.description}</p>
                    
         <button onClick={removecart}  className=" rounded-3xl absolute right-2 bg-[#93929239] ">
         <FontAwesomeIcon  icon={faTrash} 
           className=" p-2 text-[20px] " />
         </button>
        
      </div>
    })}
  </div>
  </>
  );

}

export default function CartProducts() {
  return (
    <>
      <Header />
      <CardProducts />
    </>
  )
}
