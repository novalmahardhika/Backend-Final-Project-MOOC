import express from 'express';
import UserController from "./app/controllers/user.js";
import Auth from "./app/controllers/user.js";
import AuthMiddleware from "./middlewares/auth.js";
// import { User } from './app/models/index.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './DOCS/openapi.json' assert {type: "json"};
// import { uploadToMemory } from './middlewares/uploadOnMemory.js';
// import { uploadToCloudinary } from "./middlewares/uploadOnCloudinary.js"
import cors from "cors";

const app = express();
const PORT = 80;

app.use(cors());
app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const isBodyNotNull = async (req, res, next) => {
  if (!Object.keys(req.body).length) {
    res.setHeader('Content-Type', 'application/json');
    res.status(400).json({ message: "Body is missing." });
    return;
  }
  next();
}

app.get("/", (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json({message: "Ping successfully"});
})

//MEMBERABOVE
//Register user
app.post("/register", isBodyNotNull, Auth.register)

//Login user
app.post("/login", isBodyNotNull, Auth.login);

//Get user
app.get("/users", AuthMiddleware.authorize, AuthMiddleware.isRootOrAdmin, UserController.findAll);

//Get current user
app.get("/current-user", AuthMiddleware.authorize, UserController.currentUser);


//ADMIN
//Register user
app.post("/admin/register", isBodyNotNull, AuthMiddleware.authorize, AuthMiddleware.isRoot, Auth.registerAdmin)

app.get("*", (req, res) => {
  res.status(404).json({ message: "404 not found." })
})

app.listen(PORT, () =>
  console.log("Server is live:  http://127.0.0.1:%d", PORT)
)