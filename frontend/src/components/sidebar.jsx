import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeCategory } from "../thunks/changeCategory";
import { useParams } from "react-router-dom";
import { initialRender } from "../thunks/initialRender";

export default function sidebar({sideModel}) {
    const dispatch = useDispatch();

    const changeProducts = (e) => {
        if (e.target.innerText === 'All'){
            dispatch(initialRender())
            return
        }
        dispatch(changeCategory(e.target.innerText));
    }

    const { cateName } = useParams();
    
    const category = [
        "All","beauty","fragrances","furniture","groceries","home-decoration","kitchen-accessories","laptops","mens-shirts","mens-shoes","mens-watches","mobile-accessories","motorcycle","skin-care","smartphones","sports-accessories","sunglasses","tablets","tops","vehicle","womens-bags","womens-dresses","womens-jewellery","womens-shoes","womens-watches"
]
  return (
    <nav className={` z-5 overflow-x-scroll h-screen pl-3 flex-col transition-all duration-400 flex  gap-2 fixed top-22 l:top-18.5 pr-10 l:pl-5 py-5 l:bg-[#06012a] bg-[#090145] left-0 l:translate-x-0 ${sideModel ? 'translate-x-0' : '-translate-x-60'} `}>
        <h1 className="mb-3 flex text-white justify-self-center font-[Arial] text-[25px] font-bold">Categories</h1>
    {
        category.map((e, idx) => {
            return (
                <Link key={idx} onClick={changeProducts} to={`/category/${e}`} className={`font-[Arial] text-[18px] hover:underline transition-all   duration-200 text-white ${cateName === e && "bg-[#0000ffa6]"}`}>{e}</Link>
            )
        })
    }
    </nav>
  )
}
