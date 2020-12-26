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
6. ws
