"use strict";//이크마 스트립트 문법을 준수하겠다는 의미의 코드 -> 항상 작성해주는 것이 좋다

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get('/', ctrl.home);
router.get('/login', ctrl.login);

module.exports = router