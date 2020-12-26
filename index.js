import express from "express";
const app = express();
const PORT = 4000;
function handleListening(){
    console.log(`Listening on : http://localhost:${PORT}`);
}

function handleHome(req, res){
    // req : 서버입장에서 브라우저가 어떤 정보들을 보냈는지 확인가능한다. 
    // res : 어떻게 응답할 지 명세할 수 있다. 
    res.send("Hello from home1");
}

const betweenHome = (req, res, next)=> {
    console.log("Between");
    next();
}

app.use(betweenHome);
// app.get("/", betweenHome, handleHome);
app.get("/", handleHome);

function handleProfile(req, res){ res.send("You are on my profile1");}
app.get("/profile", handleProfile);
app.listen(PORT, handleListening);
