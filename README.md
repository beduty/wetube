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
