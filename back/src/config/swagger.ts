import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";
import path from "path";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "Express + Prisma + TypeScript API documentation",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: [
    path.join(__dirname, "../routes/**/*.ts"),
    path.join(__dirname, "../modules/**/*.ts"),
  ],
};

const swaggerSpec = swaggerJsdoc(options);

export const swaggerDocs = (app: Express) => {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log("✅ Swagger Docs: http://localhost:5000/docs");
};
