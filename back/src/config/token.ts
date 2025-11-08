import jwt from "jsonwebtoken";
export const generateToken = (userId: number) => {
  const JWT_SECRET = process.env.JWT_SECRET!;
  return jwt.sign(
    {
      id: userId,
    },
    JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
};
