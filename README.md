# WeTube

cloning Youtube with VanillaJS and NodeJS

1. npm init으로 package.json 설정 초기화
2. npm install express로 서버위한 Express 모듈 추가. (dependency)
3. package.json의 Script항목으로 단축 명령어 작업할 수 있다.
   --> npm start로 입력하면, node index.js로 치환되어 실행된다.
   "scripts": {
   "start" : "node index.js"
   }
4. app.listen(4000); 으로 브라우저가 접속하기를 기다린다.
5. app.get("/", handle )으로 들어온 브라우저에게 응답을 한다.
   function handleHome(req, res){
   // req : 서버입장에서 브라우저가 어떤 정보들을 보냈는지 확인가능한다.
   // res : 어떻게 응답할 지 명세할 수 있다. res로 .html과 .css를 보냄으로써 접속한 상대에게 화면을 보여줄 수 있다.
   console.log(req);
   res.send("Hello from home");
   }
   app.get("/", handleHome);
6. npm install nodemon -D 로 -D를 붙여줌으로써 개발할 때만 쓸 수 있다.
7. babel모듈은 JavaScript의 최신 표준 함수를 사용하여도 알아서 브라우저별 규격에 맞게 변경해주는 편리함을 제공한다.
8. Express의 미들웨어(MiddleWare)는 HTTP의 Method 실행전 전처리 함수로 사용한다.
   --> app.get("/profile", middle, callback)으로 callback 실행할지 말지를 결정지을 수 있다.
   --> 미들웨어는 다음과 같이 구성된다. const middle = (req, res, next)=>{}
   --> middle 함수 내부에서 어떠한 조건이 충족되면 next();를 호출하는 방식으로 사용한다.
   --> const middle = (req, res, next)=>{} 로 next에 또다른 MiddleWare 함수를 넣으면, 콜백체인으로 쓸 수 있다.
   --> app.use(middle)로 모든 연결에 대해서 중간에 middleWare를 넣어줄 수 있다.
9. 추가한 미들웨어는 다음과 같다.
   1. morgan은 로깅용으로 사용--> app.use(morgan("dev"));로 사용하면 미들웨어로 동작하여 HTTP Method중간에 로그를 기록한다.
   2. helmet은 보안용으로 사용.
   3. body-parser : 사용자가 보내온 HTTP POST 데이터의 body로 부터 쉽게 정보를 얻을 수 있다.
      app.use(bodyParser.urlencoded({extended:true})); -> html로 보낸 정보를 읽을 수 있다.
      app.use(bodyParser.json());-> json으로 보낸 정보를 읽을 수 있다.
   4. cookie-parser : 쿠키는 사용자의 정보를 개인 컴퓨터에 저장하는 정보 단위다. 쿠키에 유저 정보를 저장할 수 있다.
10. ES6에서는 모듈을 사용하여 파일간 변수등을 공유할 수 있다.
    --> Export로 변수를 내보내고, Import로 변수를 받아서 사용할 수 있다.
    --> export default "변수"; 해주면, 외부에서는 import "변수" from "./path"로 받아온다.
    --> export 변수 해주면, 외부에서는 import {변수} from "./path"로 받아온다.
11. 라우팅은 url 요청에 따라서 App이 응답하는 방법을 정의하는 것을 의미한다.
    --> export const userRouter = express.Router();로 정의하여 app.js에서는 userRouter를 붙여주기만 하면 된다!
    --> app.use("/user", userRouter); //으로 userRouter는 "http://localhost:4000/user" 이후의 라우트에 대해서 정의할 수 있다.
    --> 요청 url의 성격에 따라서 .js파일을 분리할 수 있는 장점이 있다.
