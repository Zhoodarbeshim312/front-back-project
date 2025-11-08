import { Request, Response } from "express";
import { prisma } from "../../config/prisma";
import bcrypt from "bcryptjs";
import { generateToken } from "../../config/token";

interface IUser {
  username: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  id: number;
}

const register = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const existing = await prisma.user.findUnique({
      where: {
        username,
      },
    });
    if (existing) {
      return res.status(401).json({
        success: false,
        message: `Такой пользователь существует!`,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user: IUser = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });
    const token = generateToken(user.id);
    res.status(201).json({
      success: true,
      token,
      user,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      error: `Error in register: ${error}`,
    });
  }
};
export default {
  register,
};
