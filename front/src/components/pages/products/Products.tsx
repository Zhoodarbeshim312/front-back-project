"use client";
import axios from "axios";
import scss from "./Products.module.scss";
import { useEffect, useState } from "react";
import Image from "next/image";
export interface Root {
  success: boolean;
  product: Product[];
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  rating: number;
  createdAt: string;
  updatedAt: string;
}

const Products = () => {
  const [data, setData] = useState<Product[]>([]);
  const getData = async () => {
    try {
      let res = await axios.get<Root>(
        "http://localhost:5000/api/products/getProduct"
      );
      setData(res.data.product);
    } catch (error) {
      console.log(`Error in getData: ${error}`);
      alert("Ошибка при получении данных");
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);

  return (
    <section className={scss.Products}>
      <div className="container">
        <div className={scss.content}>
          {data.map((el) => (
            <div className={scss.card} key={el.id}>
              <Image
                src="/noImage.avif"
                alt={el.title}
                width={300}
                height={200}
              />

              <h1>{el.title}</h1>
              <p className={scss.price}>{el.price} c</p>
              <p className={scss.rating}>⭐ {el.rating}</p>
              <p className={scss.description}>{el.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
