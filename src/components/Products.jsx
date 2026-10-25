
import React from "react";
import Heading from "./Heading.jsx";
import ProductCard from "./ProductCard.jsx";

import Img1p from "../assets/images/perfume_img/pr1.png";
import Img2p from "../assets/images/perfume_img/pr2.png";
import Img3p from "../assets/images/perfume_img/pr3.png";
import Img4p from "../assets/images/perfume_img/pr4.png";
import Img5p from "../assets/images/perfume_img/pr5.png";

import Img1a from "../assets/images/perfume_img/at1.png";
import Img2a from "../assets/images/perfume_img/at2.png";
import Img3a from "../assets/images/perfume_img/at3.png";
import Img4a from "../assets/images/perfume_img/at4.png";

const ProductsData = [
  {
    id: 1,
    img: Img1p,
    title: "Perfume 1",
    price: "100",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2p,
    title: "Perfume 2",
    price: "200",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3p,
    title: "Perfume 3",
    price: "300",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4p,
    title: "Perfume 4",
    price: "400",
    aosDelay: "600",
  },
];

const ProductsData2 = [
  {
    id: 1,
    img: Img1a,
    title: "Attar 1",
    price: "100",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2a,
    title: "Attar 2",
    price: "200",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3a,
    title: "Attar 3",
    price: "300",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4a,
    title: "Attar 4",
    price: "400",
    aosDelay: "600",
  },
];

const Products = () => {
  return (
    <div>
      <div className="container text-primary dark:text-brandWhite">
        <Heading
          title="Our Products"
          subtitle="Explore Our Products"
        />

        <ProductCard ProductsData={ProductsData} />
        <ProductCard ProductsData={ProductsData2} />
      </div>
    </div>
  );
};

export default Products;
