import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";

import "./database";

// routes
import { routes } from "./routes/index.routes";

const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(routes);
app.listen(3333);
