import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import Header from "../components/header.jsx";
import Sidebar from "../components/sidebar.jsx";
import Products from "../components/products.jsx";
import Loader from "../loaders/loader.jsx";
import CategoryModel from '../nav_models/sidemodel.jsx'
import { faL } from "@fortawesome/free-solid-svg-icons";
import Formlab from "../loaders/formlab.jsx";

export default function home() {
  const [sideModel, setSideModel] = useState(false);

  return (
    <>
      {sideModel && <CategoryModel modelref={setSideModel} />}
      <Header sideModel={sideModel} setSideModel={setSideModel} />
      <Sidebar sideModel={sideModel} />
      <Products />
      <Loader />
    </>
  )
}
