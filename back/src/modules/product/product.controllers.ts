import { Request, Response } from "express";
import { prisma } from "../../config/prisma";

const addProduct = async (req: Request, res: Response) => {
  try {
    const { title, description, price, rating } = req.body;
    if (!title || !description || price == null || rating == null) {
      res.status(400).json({
        success: false,
        message:
          "Пожалуйста, заполните все поля: title, description, price, rating",
      });
      return;
    }
    const product = await prisma.product.create({
      data: {
        title,
        description,
        price,
        rating,
      },
    });
    res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in addProduct: ${error}`,
    });
  }
};
const getProduct = async (req: Request, res: Response) => {
  try {
    const product = await prisma.product.findMany();
    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in getProduct: ${error}`,
    });
  }
};
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!product) {
      res.status(404).json({
        success: false,
        message: `Продукт с id ${id} не найден`,
      });
      return;
    }
    await prisma.product.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json({
      success: true,
      message: "Продукт успешно удалён!",
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in deleteProduct: ${error}`,
    });
  }
};
const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, price, rating } = req.body;
    const product = await prisma.product.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!product) {
      res.status(404).json({
        success: false,
        message: `Продукт с id ${id} не найден`,
      });
      return;
    }
    const updatedProduct = await prisma.product.update({
      where: {
        id: Number(id),
      },
      data: {
        title,
        description,
        price,
        rating,
      },
    });
    res.status(200).json({
      success: true,
      message: "Продукт успешно изменён!",
      product: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in updateProduct: ${error}`,
    });
  }
};
export default {
  addProduct,
  getProduct,
  deleteProduct,
  updateProduct,
};
