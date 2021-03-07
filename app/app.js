"use strict";//이크마 스트립트 문법을 준수하겠다는 의미의 코드 -> 항상 작성해주는 것이 좋다

const express = require('express');
const app = express();


//앱 셋팅 -> 뷰들을 셋팅하는 코드
app.set("views", "./src/views");
//뷰 엔진 셋팅하는 코드
app.set("view engine", "ejs");

const home = require("./src/routes/home")
app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드

module.exports = app;
