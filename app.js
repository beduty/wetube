import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(helmet());
app.use(morgan("dev"));

console.log(routes.home);
console.log(routes.users);
console.log(routes.videos);

app.use(routes.home, globalRouter); // join, about, search등의 페이지를 담당한다.
app.use(routes.users, userRouter); // "http://localhost:4000/user" 이후의 라우트에 대해서 정의한다.
app.use(routes.videos, videoRouter); 


export default app;
