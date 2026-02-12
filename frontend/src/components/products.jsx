import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { initialRender } from "../thunks/initialRender.jsx";
import { useParams } from "react-router-dom";
import { changeCategory } from "../thunks/changeCategory.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Cart = ({ data }) => {
    const dispatch = useDispatch();
    const title = data.title.length > 32 ? data.title.slice(0, 32) + "...." : data.title ;
    const titlem = data.title.length > 16 ? data.title.slice(0, 16) + "...." : data.title ;


  return (
    <div className="flex flex-col transition-shadow duration-200 l:px-3 h-63 l:h-100 py-3 shadow hover:shadow-[#868585] shadow-[#c3c3c3] w-40 l:w-75">
      <Link to={`${data.id}`} className=" mx-auto p-0  mb-0 w-36 l:w-69 "><img src={data.images[0]} alt="" className="h-38 l:h-70 cursor-pointer outline-1 outline-[#aaaa] w-full" /></Link>
      <h1 className={`text-[Arial] text-9 mt-0.5 ml-2 l:mt-2  hidden l:visible `}>{title}</h1>
      <h1 className={`text-[Arial] text-9 mt-0.5 ml-2 l:mt-2 flex l:hidden `}>{titlem}</h1>

      <li className="list-none line-through text-[red] ml-2 l:ml-1 mt-1 l:mt-4 text-[13px]">{data.discountPercentage+'%'}</li>
      <li className=" list-none mt-0.5 ml-2 l:ml-1 font-[Arial] text-[#ff4000]">{'Rs. '+data.price+'$'}</li>
    </div>
  )
}

export default function products() {
  const productData = useSelector(state => state.contents.allProducts);
  const dispatch = useDispatch();
  
  const { cateName } = useParams();

  useEffect(() => {
    if (cateName) {
      if (cateName === "All"){
        dispatch(initialRender());
        return
      }
      dispatch(changeCategory(cateName));
      return
    }
      dispatch(initialRender());
      
  }, []);
  

  return (
    <div className="absolute  justify-items-center grid grid-cols-2 l:mt-0 mt-28 left-[50%] transform translate-x-[-50%] l:translate-x-[0%] l:grid-cols-3 l:left-59 l:top-25 l:gap-4 gap-x-43 gap-y-4">
      {productData.map((item, idx) => {
        return <Cart data={item} key={idx} />
      })}
    </div>
  )

}
