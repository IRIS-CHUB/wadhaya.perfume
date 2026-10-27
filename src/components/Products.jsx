import React from "react";
import Heading from "./Heading.jsx";
import ProductCard from "./ProductCard.jsx";
import Img1p from "../assets/images/perfume_img/pr1.png";
import Img2p from "../assets/images/perfume_img/pr2.png";
import Img3p from "../assets/images/perfume_img/pr3.png";
import Img4p from "../assets/images/perfume_img/pr4.png";
import Img1a from "../assets/images/perfume_img/at1.png";
import Img2a from "../assets/images/perfume_img/at2.png";
import Img3a from "../assets/images/perfume_img/at3.png";
import Img4a from "../assets/images/perfume_img/at4.png";
// Temporary catalogue data: replace titles and prices with approved product details before launch.
const ProductsData = [
{id:"perfume-1",img:Img1p,title:"Signature Perfume 01",price:100,aosDelay:"0"},
{id:"perfume-2",img:Img2p,title:"Signature Perfume 02",price:200,aosDelay:"100"},
{id:"perfume-3",img:Img3p,title:"Signature Perfume 03",price:300,aosDelay:"200"},
{id:"perfume-4",img:Img4p,title:"Signature Perfume 04",price:400,aosDelay:"300"}];
const ProductsData2 = [
{id:"attar-1",img:Img1a,title:"Arabian Attar 01",price:100,aosDelay:"0"},
{id:"attar-2",img:Img2a,title:"Arabian Attar 02",price:200,aosDelay:"100"},
{id:"attar-3",img:Img3a,title:"Arabian Attar 03",price:300,aosDelay:"200"},
{id:"attar-4",img:Img4a,title:"Arabian Attar 04",price:400,aosDelay:"300"}];
const Products = ({onAddToCart}) => <section className="wadhaya-products-section"><div className="container text-primary dark:text-brandWhite"><Heading title="The Wadhaya Collection" subtitle="Fragrance, with a signature of its own" /><ProductCard ProductsData={ProductsData} onAddToCart={onAddToCart}/><ProductCard ProductsData={ProductsData2} onAddToCart={onAddToCart}/></div></section>;
export default Products;