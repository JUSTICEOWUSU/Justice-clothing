import express  from "express";
import authRouter from "./routes/authRoute/authRouter";
import categoriesRouter from "./routes/categoryRoute/categoriesRoute";
import checkoutRouter from "./routes/paymentRoute/checkoutRouter";
import shopRouter from "./routes/shopRoute/shopRouter";

const app = express()

app.use(express.json())

app.use("/shopData",shopRouter);
app.use("/categories",categoriesRouter);
app.use("/checkout",checkoutRouter);
app.use("/signUp",authRouter);

export default app