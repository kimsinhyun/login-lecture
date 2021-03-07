"use strict";//이크마 스트립트 문법을 준수하겠다는 의미의 코드 -> 항상 작성해주는 것이 좋다

const home = (req, res) => {
        res.render('home/index');
}
// 위에 코드는 이크마 문법이구 사실 아래와 똑같다
// function hello(req, res){
//     res.render('home/login');
// } 

const login = (req, res)=> {
    res.render('home/login');
};

module.exports = {
    home,
    login,
}