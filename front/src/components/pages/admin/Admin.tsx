"use client";
import { useState } from "react";
import scss from "./Admin.module.scss";
import axios from "axios";

type TValues = {
  title: string;
  price: number | string;
  rating: number | string;
  description: string;
};

const Admin = () => {
  const [data, setData] = useState<TValues[]>([]);
  const [values, setValues] = useState<TValues>({
    title: "",
    price: "",
    rating: "",
    description: "",
  });

  const addProduct = async () => {
    if (
      !values.title.trim() ||
      !values.price ||
      !values.rating ||
      !values.description.trim()
    ) {
      alert("Заполните пустые ячейки!");
      return;
    }

    try {
      const addNewProduct = {
        title: values.title,
        price: Number(values.price),
        rating: Number(values.rating),
        description: values.description,
      };

      await axios.post(
        "http://localhost:5000/api/v1/product/addProduct",
        addNewProduct
      );

      setData([...data, addNewProduct]);
      setValues({
        title: "",
        price: "",
        rating: "",
        description: "",
      });

      alert("Продукт успешно добавлен!");
    } catch (error) {
      console.log(`Error in addProduct: ${error}`);
      alert("Ошибка при добавлении продукта!");
    }
  };

  return (
    <section className={scss.Admin}>
      <div className="container">
        <div className={scss.content}>
          <h1>Add New Product!</h1>
          <div className={scss.form}>
            <input
              value={values.title}
              onChange={(e) => setValues({ ...values, title: e.target.value })}
              type="text"
              placeholder="Title..."
            />
            <input
              value={values.price}
              onChange={(e) => setValues({ ...values, price: e.target.value })}
              type="text"
              placeholder="Price..."
            />
            <input
              value={values.rating}
              onChange={(e) => setValues({ ...values, rating: e.target.value })}
              type="text"
              placeholder="Rating..."
              maxLength={3}
            />
            <input
              value={values.description}
              onChange={(e) =>
                setValues({ ...values, description: e.target.value })
              }
              type="text"
              placeholder="Description..."
            />
            <button onClick={addProduct}>Add!</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
